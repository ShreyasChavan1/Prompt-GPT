import { createContext, useState, useEffect } from "react";

import { onAuthStateChanged } from 'firebase/auth'
import { auth } from "../lib/firebase";
import { doc, updateDoc, getDocs, setDoc ,onSnapshot, collection, serverTimestamp, addDoc, orderBy} from "firebase/firestore";
import { db } from "../lib/firebase";
import { arrayUnion,query } from "firebase/firestore";


export const Context = createContext();

const ContextProvider = (props) => {
    const [extended, setExtended] = useState(false)
    //for generative Ai
    const [input, setInput] = useState("");
    const [recentPrompts, setRecentPrompts] = useState("");
    // const [prevPrompts,setPrevPrompts] = useState([]);
    const [showResult, setShowResult] = useState(false);
    const [loading, setLoading] = useState(false);
    const [resultData, setResultData] = useState("");

    const [username, setUsername] = useState("")

    //for login
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    //saving login cred
    const [user, setUser] = useState(false);

    const [threads, setThreads] = useState([]);       // sidebar
  const [conversation, setConversation] = useState([]); // full chat
  const [activeThreadId, setActiveThreadId] = useState(null);

    
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user);
        });
        return () => {
            unsubscribe();
        };
    }, []);

    useEffect(()=>{
        if(!user)return;
        const threadsRef =  collection(db, "userChats", user.uid,"threads");
        const unsub = onSnapshot(threadsRef,(snap)=>{
            const list = snap.docs.map(d => ({id:d.id,...d.data()}));
            setThreads(list)
        })
        return ()=>unsub();
    },[user])

    const createnewThread = async() =>{
        
        setActiveThreadId(null);
        setShowResult(false)
        setConversation([]);

    }

    const openThread = async(threadId)=>{
        setActiveThreadId(threadId);
        setShowResult(true);

        const msgref = collection(db,"userChats",user.uid,"threads",threadId,"messages");
        const q = query(msgref,orderBy("createdAt","asc"))

        const snap = await getDocs(q);
        const msgs = snap.docs
  .map(d => d.data())
  .filter(m => typeof m.text === "string");


        setConversation(msgs)
    }

    const onSent = async (prompt) => {
        const message = prompt || input;

        if (!message.trim()) {
            return;
        }
        setLoading(true);
        let threadId = activeThreadId;

if (!threadId) {
  // Create thread ONLY when user actually sends a message
  const threadsRef = doc(
    collection(db, "userChats", user.uid, "threads")
  );

  await setDoc(threadsRef, {
    title: "New Chat",
    lastMessage: "",
    updatedAt: serverTimestamp()
  });

  threadId = threadsRef.id;
  setActiveThreadId(threadId);
}
        const geminiHistory = conversation
  .filter(m => typeof m.text === "string")   // kill bad messages
  .map(m => ({
    role: m.role,
    parts: [{ text: m.text || "" }]
  }));

        const res = await fetch(
  "https://prompt-gpt.vercel.app/api/ask-gemini",
  {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      prompt: message || "",
      history: geminiHistory
    })
  }
);

if (!res.ok) {
  const err = await res.text();
  console.error("Gemini API failed:", err);
  setLoading(false);
  return;
}

const response = await res.json();
const reply = response?.response || "Sorry, Gemini failed to answer.";

       

        const usermsg = {
            role:"user",
            text:message || "",
            createdAt:serverTimestamp()
        }

        const modelmsg = {
            role:"model",
            text:reply || "",
            createdAt:serverTimestamp()
        }

        const msgRef = collection(db,"userChats",user.uid,"threads",threadId,"messages");
        await addDoc(msgRef,usermsg);
        await addDoc(msgRef,modelmsg)

        const threadRef = doc(db, "userChats", user.uid, "threads", threadId);
    await setDoc(
      threadRef,
      {
        lastMessage: reply || "",
        updatedAt: serverTimestamp()
      },
      { merge: true }
    );
    setConversation(prev => [...prev, usermsg, modelmsg]);
    setInput("");
    setLoading(false);
        
    }


    const contextValue = {
        extended,
        setExtended,
        recentPrompts,
        setRecentPrompts,
        loading,
        setShowResult,
        showResult,
        resultData,
        onSent,
        input,
        setInput,
        username,
        setUsername,
        user,
        setUser,
        email,
        setEmail,
        pass,
        setPass,

        

        

        threads,
        conversation,
        activeThreadId,
        createnewThread,
        openThread,
    }

    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>

    )
}
export default ContextProvider;
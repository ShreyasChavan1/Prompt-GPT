import { createContext, useState, useEffect } from "react";
import run from "../server/config/gemini";
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from "../lib/firebase";
import { doc, updateDoc, getDocs, setDoc ,onSnapshot, collection, serverTimestamp, addDoc} from "firebase/firestore";
import { db } from "../lib/firebase";
import { arrayUnion } from "firebase/firestore";


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
        const threadsRef = doc(collection(db, "userChats", user.uid,"threads"));

        await setDoc(threadsRef,{
            title:"New Chat",
            text:"hello how can i help you",
            updatedAt:serverTimestamp()
        })
        setActiveThreadId(threadsRef.id);
        setShowResult(true)
        setConversation([]);

        return threadsRef.id
    }

    const openThread = async(threadId)=>{
        setActiveThreadId(threadId);
        setShowResult(true);

        const msgref = collection(db,"userChats",user.uid,"threads",threadId,"messages");
        const snap = await getDocs(msgref);
        const msgs = snap.docs.map(d=>d.data());

        setConversation(msgs)
    }
    // const getresponse = async (message) => {
    //     const res = await fetch("https://prompt-gpt.vercel.app/api/ask-gemini", {
    //         method: "POST",
    //         headers: { "Content-type": "application/json" },
    //         credentials: "include",
    //         body: JSON.stringify({ prompt: message })
    //     })
    //     const data = await res.json();
    //     console.log(data.response);
    //     return data.response
    // }

    const onSent = async (prompt) => {
        const message = prompt || input;

        if (!message.trim()) {
            return;
        }
        setLoading(true);
        let threadId = activeThreadId;
        if(!threadId){
            threadId = await createnewThread();
        }
        
        const geminiHistory = conversation.map(m => ({
  role: m.role,
  parts: [{ text: m.text }]
}));
console.log(geminiHistory)
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
        // setResultData("");
        // setLoading(true);
        // setShowResult(true);
        // setRecentPrompts(message);
        // const responce = await getresponse(message);

        // let responseArray = responce.split("**");
        // let newResponse = ""
        // for (let i = 0; i < responseArray.length; i++) {
        //     if (i === 0 || i % 2 !== 1) {
        //         newResponse += responseArray[i];
        //     } else {
        //         newResponse += "<b>" + responseArray[i] + "</b>";
        //     }
        // }
        // let newResponse2 = newResponse.split("*").join("<br>");
        // setResultData(newResponse2);
        // try {
        //     await updateDoc(userDocRef, {
        //         chats: arrayUnion({
        //             prompt: message,
        //             response: newResponse2,
        //             timestamp: new Date(),
        //         }),
        //     });
        // } catch (err) {
        //     await setDoc(userDocRef, {
        //         chats: [{
        //             prompt: message,
        //             response: newResponse2,
        //             timestamp: new Date(),
        //         }],
        //     });
        // }
        // setLoading(false);
        // setInput("");
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
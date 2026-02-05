import { createContext, useState,useEffect } from "react";
import run from "../server/config/gemini";
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from "../lib/firebase";
import { doc, updateDoc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../lib/firebase";
import { arrayUnion } from "firebase/firestore";


export const Context = createContext();

const ContextProvider = (props) => {
    const [extended, setExtended] = useState(false)
//for generative Ai
    const [input,setInput] = useState("");
    const [recentPrompts ,setRecentPrompts] = useState("");
    // const [prevPrompts,setPrevPrompts] = useState([]);
    const [showResult,setShowResult] = useState(false);
    const [loading,setLoading] = useState(false);
    const [resultData,setResultData] = useState("");
    const [chathistory, setChathistory] = useState([]);

    const[getchat,setGetchat] = useState(null);

    //for login
    const [email,setEmail] = useState("");
    const [pass,setPass] = useState("");
//saving login cred
    const [user,setUser] = useState(false);
        useEffect(() => {
          const unsubscribe = onAuthStateChanged(auth, (user) => {
              setUser(user);
          });
          return () => {
            unsubscribe();
        };
      }, []);

    const getresponse = async (message) =>{
        const res = await fetch("https://prompt-gpt.vercel.app/api/ask-gemini",{
            method: "POST",
            headers:{"Content-type":"application/json"},
            credentials: "include",
            body:JSON.stringify({prompt:message})
        })
        const data = await res.json();
        console.log(data.response);
        return data.response
    }

    const onSent = async (prompt) =>{
        const message = prompt || input;

        if (!message.trim()) {
            return;
        }
        setResultData("");
        setLoading(true);
        setShowResult(true);
        setRecentPrompts(message);
       const responce =  await getresponse(message);

       let responseArray = responce.split("**");
       let newResponse = ""
       for(let i=0;i<responseArray.length;i++){
        if(i===0 || i%2 !== 1){
            newResponse += responseArray[i];
        }else{
            newResponse += "<b>"+responseArray[i]+"</b>";
        }
       }
       let newResponse2 = newResponse.split("*").join("<br>");
       setResultData(newResponse2);

        try {
        console.log("Current user:", user);

        const userDocRef = doc(db, "userChats", user.uid);
        const userDocSnap = await getDoc(userDocRef);

        if (userDocSnap.exists()) {
  await updateDoc(userDocRef, {
    chats: arrayUnion({
      prompt: message,
      response: newResponse2,
      timestamp: new Date(),
    }),
  });
} else {
  await setDoc(userDocRef, {
    chats: [
      {
        prompt: message,
        response: newResponse2,
        timestamp: new Date(),
      },
    ],
  });
}
        console.log("Chat appended successfully");
    } catch (error) {
        console.error("Error updating chat: ", error);
    }

       setLoading(false);
       setInput("");
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

        user,
        setUser,
        email,
        setEmail,
        pass,
        setPass,

        chathistory,
        setChathistory

        ,getchat,
        setGetchat
    }

    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>

    )
}
export default ContextProvider;
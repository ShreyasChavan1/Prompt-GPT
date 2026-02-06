import {React , useState , useEffect} from 'react'
import './Sidebar.css';
import { assets } from '../../assets/assets';
import { auth } from '../../../../Backend/lib/firebase';
import { Context } from '../../../../Backend/context/context';
import { useContext } from 'react';
import { signOut } from 'firebase/auth';
import { doc , getDoc} from 'firebase/firestore';
import { db } from '../../../../Backend/lib/firebase';

const Sidebar = () => {
    
    const {setPass,setEmail,extended,setExtended,onSent,threads,openThread,createnewThread} = useContext(Context);
    
    const signOutLogic = async() =>{
        await signOut(auth);
        // setUser("");
        setPass("");
        setEmail("");
    }
   

  return (
   <div className="sidebar">
        <div className="top">
            <img src={assets.menu_icon} alt="" onClick={()=>setExtended(prev=>!prev)} className="menu" />
              <div onClick={() => {
                  createnewThread 
                  setShowResult(false);  
              }} className="new-chat">
                <img src={assets.plus_icon} alt="" />
                {extended?<p>New Chat</p>:null} 
                {/* //sidebar extended or collapsed loggic */}
            </div>
                {extended?
           <div className="recent">
        {threads.length === 0 && <p>No chats yet</p>}

        {threads.map(t => {
  const preview =
    typeof t.lastMessage === "string"
      ? t.lastMessage
      : "";

  return (
    <div
      key={t.id}
      className="recent-entry"
      onClick={() => openThread(t.id)}
    >
      <img src={assets.message_icon} alt="" />
      <p>
        {preview
          ? preview.length > 20
            ? preview.slice(0, 20) + "..."
            : preview
          : "New Chat"}
      </p>
    </div>
  );
})}

      </div>
                :null}
        </div>
        <div className="bottom">
            <div className="bottom-item recent-entry">
                <img onClick={()=>onSent("Please help me with usage of google Gemini")} src={assets.question_icon} alt="" />
                {extended?<p>Help</p>:null}
            </div>
            
            <div className="bottom-item recent-entry">
                <img onClick={signOutLogic} src={assets.logout_icon} alt="" />
                {extended?<p>logout</p>:null}
            </div>
        </div>
   </div>
  )
}

export default Sidebar
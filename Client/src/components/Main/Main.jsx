import React, { useContext, useEffect, useState } from 'react'
import './Main.css';
import { assets } from '../../assets/assets';
import { Context } from '../../../../Backend/context/context';
import { doc, setDoc , getDoc} from 'firebase/firestore';
import { auth, db } from '../../../../Backend/lib/firebase';
import { signOut } from 'firebase/auth';




const Main = (props) => {
  const {setInput,input,onSent,loading,showResult,setPass,setEmail,setShowResult,username,conversation} = useContext(Context);

   const signOutl = async() =>{
    await signOut(auth);
    // setUser("");
    setPass("");
    setEmail("");
}

  return (
    <div className="main">
        <div className="nav">
            <p onClick={() => {
                  setShowResult(false); 
                      
              }}>Gemini</p>
            <img onClick={()=>{signOutl()}}  src={assets.user_icon} alt=""/>
        </div>
        <div className="main-container">

        {
        conversation.length > 0 ? (
       <div className="result">

    {conversation.map((m, i) => (
      <div key={i}>

        <div className="result-title">
          <img src={assets.user_icon} alt="" />
          <p>{m.role === "user" ? m.text : ""}</p>
        </div>

        {m.role === "model" && (
          <div className="result-data">
            <img src={assets.gemini_icon} alt="" />
            <p>{m.text}</p>
          </div>
        )}

      </div>
    ))}

    {loading && (
      <div className="loader">
        <hr /><hr /><hr />
      </div>
    )}

  </div>
    ) : (

      !showResult?
        <>
            <div className="greet">
              <p><span>Hello , {username}</span></p>
              <p>How can I help you Today ?</p>
            </div>
            
            <div className="cards">
              <div className="card">
                <p>Suggest a Beautiful places to see on upcoming road Trip</p>
                <img onClick={()=>onSent("Suggest a Beautiful places to see on upcoming road Trip")} src={assets.compass_icon} alt="" />
              </div>
              <div className="card">
                <p>Breifly summarize this texxt : urban planning</p>
                <img onClick={()=>onSent("Breifly summarize this texxt : urban planning")} src={assets.bulb_icon} alt="" />
              </div>
              <div className="card">
                <p>Describe Team bonding activities</p>
                <img onClick={()=>onSent("Describe Team bonding activities")} src={assets.message_icon} alt="" />
              </div>
              <div className="card">
                <p>Improve Readability of this code</p>
                <img onClick={()=>onSent("Improve Readability of this code")} src={assets.code_icon} alt="" />
              </div>
            </div>
            </>
             : 
             
            <div className="result">
      <div className="result-title">
        <img src={assets.user_icon} alt="" />
        <p>{input}</p>
      </div>

      <div className="result-data">
        <img src={assets.gemini_icon} alt="" />
        {loading ? (
          <div className="loader">
            <hr /><hr /><hr />
          </div>
        ) : (
          <p>Waiting for Gemini…</p>
        )}
      </div>
    </div>
    )
  }  
        
            <div className="main-bottom">
              <div className="searchbox">
                <input onChange={(e)=>setInput(e.target.value)} value={input} type="text" placeholder='Enter your prompt here' />
                <div>
                  <img src={assets.gallery_icon} alt="" />
                  <img src={assets.mic_icon} alt="" />
                  {input?<img onClick={()=>onSent()} src={assets.send_icon} alt="" />:null}
                </div>
              </div>
              <p className="bottom-info">
                Gemini may display inaccurate info, including about people please double check before usage
              </p>
            </div>
        </div>
    </div>
  )
}

export default Main
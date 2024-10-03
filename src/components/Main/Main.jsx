import React, { useContext, useState } from 'react'
import './Main.css';
import { assets } from '../../assets/assets';
import { Context } from '../../context/context';
import run from '../../config/gemini';




const Main = (props) => {
  const {setInput,input,onSent,loading,showResult,recentPrompts,resultData,email} = useContext(Context);

  return (
    <div className="main">
        <div className="nav">
            <p>bhAI</p>
            <img src={assets.user_icon} alt=""/>
        </div>
        <div className="main-container">
        
        
        {!showResult?
        <>
            <div className="greet">
              <p><span>Hello , {email}</span></p>
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
                <p>{recentPrompts}</p>
              </div>
              <div className="result-data">
                <img src={assets.gemini_icon} alt="" />
                {loading?
                <div className="loader">
                  <hr />
                  <hr />
                  <hr />
                </div>  
                :
                <p dangerouslySetInnerHTML={{__html:resultData}}></p>
                // <p>{resultData}</p>
                }
              </div>
            </div>
            }
            <div className="main-bottom">
              <div className="searchbox">
                <input onChange={(e)=>setInput(e.target.value)} value={input} type="text" placeholder='Enter your prompt here' />
                <div>
                  <img src={assets.gallery_icon} alt="" />
                  <img src={assets.mic_icon} alt="" />
                  <img onClick={()=>onSent()} src={assets.send_icon} alt="" />
                </div>
              </div>
              <p className="bottom-info">
                bhAI may display inaccurate info, including about people please double check before usage
              </p>
            </div>
        </div>
    </div>
  )
}

export default Main
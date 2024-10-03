import React, { useContext, useState } from 'react'
import './Main.css';
import { assets } from '../../assets/assets';
import { Context } from '../../context/context';
import run from '../../config/gemini';




const Main = (props) => {
  const {setInput,input,onSent,loading,showResult,recentPrompts,resultData,email} = useContext(Context);
  const [chathistory,setChathistory] = useState([]);

  const handleSent = async (prompt) => {
    setInput(prompt || input);
    onSent(prompt || input);
  };
  const updateChatHistory = (prompt, response) => {
    setChathistory((prevChats) => [
      ...prevChats,
      { prompt, response },
    ]);
  };
  const handleSend = async (prompt) => {
    handleSent(prompt);
    const response = resultData;
    updateChatHistory(prompt || input, response);
    console.log(chathistory);
  };
  return (
    <div className="main">
        <div className="nav">
            <p>bhAI</p>
            <img src={assets.user_icon} alt=""/>
        </div>
        <div className="main-container">
        
        {chathistory.length > 0 && (
          <div className="chat-history-container">
            {chathistory.map((chat, index) => (
              <div key={index} className="chat-history">
                <div className="result-title">
                  <img src={assets.user_icon} alt="" />
                  <p>{chat.prompt}</p>
                </div>
                <div className="result-data">
                  <img src={assets.gemini_icon} alt="" />
                  <p dangerouslySetInnerHTML={{ __html: chat.response }}></p>
                </div>
              </div>
            ))}
          </div>
        )}
        
        {!showResult?
        <>
            <div className="greet">
              <p><span>Hello , {email}</span></p>
              <p>How can I help you Today ?</p>
            </div>
            
            <div className="cards">
              <div className="card">
                <p>Suggest a Beautiful places to see on upcoming road Trip</p>
                <img onClick={()=>handle("Suggest a Beautiful places to see on upcoming road Trip")} src={assets.compass_icon} alt="" />
              </div>
              <div className="card">
                <p>Breifly summarize this texxt : urban planning</p>
                <img onClick={()=>handle("Breifly summarize this texxt : urban planning")} src={assets.bulb_icon} alt="" />
              </div>
              <div className="card">
                <p>Describe Team bonding activities</p>
                <img onClick={()=>handle("Describe Team bonding activities")} src={assets.message_icon} alt="" />
              </div>
              <div className="card">
                <p>Improve Readability of this code</p>
                <img onClick={()=>handle("Improve Readability of this code")} src={assets.code_icon} alt="" />
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
                  <img onClick={()=>handleSend()} src={assets.send_icon} alt="" />
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
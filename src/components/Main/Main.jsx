import React, { useContext } from 'react';
import './Main.css';
import { assets } from '../../assets/assets';
import { Context } from '../../context/context';

const Main = (props) => {
  const {
    setInput,
    input,
    onSent,
    loading,
    showResult,
    recentPrompts,
    resultData,
    email,
    chatHistory,
  } = useContext(Context);

  const handleSend = async (prompt) => {
    await onSent(prompt); // Call onSent from context
  };

  return (
    <div className="main">
      <div className="nav">
        <p>bhAI</p>
        <img src={assets.user_icon} alt="" />
      </div>
      <div className="main-container">

        {/* Render chat history */}
        {chatHistory.length > 0 && (
          <div className="chat-history-container">
            {chatHistory.map((chat, index) => (
              <div key={index} className="result">
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

        {/* Greeting message and cards */}
        {!showResult ? (
          <>
            <div className="greet">
              <p><span>Hello, {email}</span></p>
              <p>How can I help you today?</p>
            </div>

            <div className="cards">
              <div className="card">
                <p>Suggest beautiful places to see on an upcoming road trip</p>
                <img onClick={() => handleSend("Suggest beautiful places to see on an upcoming road trip")} src={assets.compass_icon} alt="" />
              </div>
              <div className="card">
                <p>Briefly summarize this text: urban planning</p>
                <img onClick={() => handleSend("Briefly summarize this text: urban planning")} src={assets.bulb_icon} alt="" />
              </div>
              <div className="card">
                <p>Describe team bonding activities</p>
                <img onClick={() => handleSend("Describe team bonding activities")} src={assets.message_icon} alt="" />
              </div>
              <div className="card">
                <p>Improve readability of this code</p>
                <img onClick={() => handleSend("Improve readability of this code")} src={assets.code_icon} alt="" />
              </div>
            </div>
          </>
        ) : (
          <div className="result">
            <div className="result-title">
              <img src={assets.user_icon} alt="" />
              <p>{recentPrompts}</p>
            </div>
            <div className="result-data">
              <img src={assets.gemini_icon} alt="" />
              {loading ? (
                <div className="loader">
                  <hr />
                  <hr />
                  <hr />
                </div>
              ) : (
                <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
              )}
            </div>
          </div>
        )}

        {/* Bottom input section */}
        <div className="main-bottom">
          <div className="searchbox">
            <input
              onChange={(e) => setInput(e.target.value)}
              value={input}
              type="text"
              placeholder='Enter your prompt here'
            />
            <div>
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
              <img onClick={() => handleSend(input)} src={assets.send_icon} alt="" />
            </div>
          </div>
          <p className="bottom-info">
            bhAI may display inaccurate info, including about people; please double-check before usage.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;

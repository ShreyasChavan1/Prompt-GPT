import {React , useState} from 'react'
import './Sidebar.css';
import { assets } from '../../assets/assets';
import { auth } from '../../lib/firebase';
import { Context } from '../../context/context';
import { useContext } from 'react';
import { signOut } from 'firebase/auth';

const Sidebar = () => {
    const [extended, setExtended] = useState(false)
    const {setUser,setPass,setEmail} = useContext(Context)
    const signOutLogic = async() =>{
        await signOut(auth);
        setUser("");
        setPass("");
        setEmail("");
    }
  return (
   <div className="sidebar">
        <div className="top">
            <img src={assets.menu_icon} alt="" onClick={()=>setExtended(prev=>!prev)} className="menu" />
            <div className="new-chat">
                <img src={assets.plus_icon} alt="" />
                {extended?<p>New Chat</p>:null} 
                {/* //sidebar extended or collapsed loggic */}
            </div>
                {extended?
            <div className="recent">
                <p className="recent-title">
                    Recent
                </p>
                    <div className="recent-entry">
                        <img src={assets.message_icon} alt="" />
                        <p>What is react ...</p>
                    </div>
            </div>
                :null}
        </div>
        <div className="bottom">
            <div className="bottom-item recent-entry">
                <img src={assets.question_icon} alt="" />
                {extended?<p>Help</p>:null}
            </div>
            <div className="bottom-item recent-entry">
                <img src={assets.history_icon} alt="" />
                {extended?<p>History</p>:null}
            </div>
            <div className="bottom-item recent-entry">
                <img src={assets.setting_icon} alt="" />
                {extended?<p>Settings</p>:null}
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
import React, { useState ,useEffect} from 'react'
import { createUserWithEmailAndPassword ,onAuthStateChanged, signInWithEmailAndPassword, signOut} from 'firebase/auth';
import './login.css';
import { db,auth } from '../../lib/firebase';
import {doc, setDoc } from 'firebase/firestore';
import { useContext } from 'react';
import { Context } from '../../context/context';


const Login = () => {

  const [load,setLoad] = useState(false);

  const {user,setUser,email,setEmail,pass,setPass} = useContext(Context);
  const [username,setUsername] = useState("");

    const handleRegister = async (e) =>{
        try {
            e.preventDefault()
            setLoad(true);
            let res = await createUserWithEmailAndPassword(auth,email,pass)
            await setDoc(doc(db, "user", res.user.uid), {
              username,
              email,
              id:res.user.uid,
            });

            await setDoc(doc(db, "userChats", res.user.uid), {
              chats:{},
            });
            alert("registration success");
            // setUser("");
            // setEmail("");
            // setPass("");
        } catch (error) {
            console.log(error)
            alert(error);
        } finally{
          setLoad(false);
        }
    };
    const handleLogin = async (e) =>{
        try {
            e.preventDefault()
            setLoad(true);
            let res = await signInWithEmailAndPassword(auth,email,pass)
            console.log(res);
            // setUser("");
            // setEmail("");
            // setPass("");
          } catch (error) {
            console.log(error)
            alert(error);
        } finally{
          setLoad(false);
        }
    }
  return (
    <>
    <div className="form-container">
    <main className="form-signin">
      <form>
        <h1 className="form-title">Please sign in</h1>

        <div className="form-group">
          <input
            type="text"
            className="form-input"
            id="username"
            placeholder="Username"
            onChange={(e)=>setUsername(e.target.value)}
            required
          />
          <input
            type="text"
            value={email}
            className="form-input"
            id="Email"
            placeholder="Email"
            onChange={(e)=>setEmail(e.target.value)}
            required
          />
          
          <input
            type="password"
            value={pass}
            className="form-input"
            id="pass"
            placeholder="Pass"
            required
            onChange={(e) => setPass(e.target.value)}
          />
          
        </div>

        <div className="error-message"></div>

        <button disabled={load} type="submit" onClick={handleRegister} className="btn-submit">{load?"loading":"Register"}</button>
        <button disabled={load} onClick={handleLogin}className="btn-submit">{load?"loading":"login"}</button>
        <p className="form-footer">&copy; Vighnesh & Shreyas Co.</p>
      </form>
      </main>
      </div>
      </>
  )
}

export default Login
import React, { useState } from 'react'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';
import './login.css';
import { db, auth } from '../../../../Backend/lib/firebase';
import { doc, setDoc } from 'firebase/firestore';
import { useContext } from 'react';
import { Context } from '../../../../Backend/context/context';


const Login = () => {

  const [load, setLoad] = useState(false);

  const { email, setEmail, pass, setPass, setUsername } = useContext(Context);


  const handleRegister = async (e) => {
    try {
      e.preventDefault();
      setLoad(true);

      const res = await createUserWithEmailAndPassword(auth, email, pass);

      // Send verification email
      await sendEmailVerification(res.user);
      alert("Check your inbox and verify your email. Then log in again.");

      // Create user profile anyway
      await setDoc(doc(db, "user", res.user.uid), {
        username,
        email,
        id: res.user.uid,
        verified: false
      });

      // Create empty chat doc
      await setDoc(doc(db, "userChats", res.user.uid), {
        chats: {}
      });

    } catch (error) {
      console.log(error);
      alert(error.message || "Registration failed");
    } finally {
      setLoad(false);
    }
  };

  const handleLogin = async (e) => {
    try {
      e.preventDefault()
      setLoad(true);
      let res = await signInWithEmailAndPassword(auth, email, pass)
       if (!res.user.emailVerified) {
    alert("Verify your email first.");
    setLoad(false);
    return;
  }
    
    } catch (error) {
      console.log(error)
      alert(error);
    } finally {
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
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              <input
                type="text"
                value={email}
                className="form-input"
                id="Email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
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

            <button disabled={load} type="submit" onClick={handleRegister} className="btn-submit">{load ? "loading" : "Register"}</button>
            <button disabled={load} onClick={handleLogin} className="btn-submit">{load ? "loading" : "login"}</button>
            <p className="form-footer">&copy; Shreyas Co.</p>
          </form>
        </main>
      </div>
    </>
  )
}

export default Login
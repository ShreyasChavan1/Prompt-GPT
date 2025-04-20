// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC5C-VsBFZq6d8XYuYiWy1V_nG0oFkQmgY",
  authDomain: "bhai-f58f8.firebaseapp.com",
  projectId: "bhai-f58f8",
  storageBucket: "bhai-f58f8.appspot.com",
  messagingSenderId: "571237439264",
  appId: "1:571237439264:web:715a64d302d7d45aa62945"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
// export const storage = getStorage(app);
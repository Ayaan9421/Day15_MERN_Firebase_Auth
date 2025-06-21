import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: "AIzaSyDBDQjyYjwyaUtmxnH2PxBfDhZWoMqf37Y",
//   authDomain: "day15-mern-firebase-auth.firebaseapp.com",
//   projectId: "day15-mern-firebase-auth",
//   storageBucket: "day15-mern-firebase-auth.firebasestorage.app",
//   messagingSenderId: "303455330933",
//   appId: "1:303455330933:web:5aac2b77345313b8c98e3c",
//   measurementId: "G-WBS957J40M"
// };

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
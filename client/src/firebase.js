// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-website-1a4fd.firebaseapp.com",
  projectId: "real-estate-website-1a4fd",
  storageBucket: "real-estate-website-1a4fd.appspot.com",
  messagingSenderId: "705269261432",
  appId: "1:705269261432:web:46f118f2625ce4cc8bb98d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
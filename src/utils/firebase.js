// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCWflPRAjX9SvQ04q9tdEkiZlgptzwA29Q",
  authDomain: "netflixgpt-cdc1a.firebaseapp.com",
  projectId: "netflixgpt-cdc1a",
  storageBucket: "netflixgpt-cdc1a.firebasestorage.app",
  messagingSenderId: "514332697818",
  appId: "1:514332697818:web:ffdfe466795575a63371e3",
  measurementId: "G-0KH4WK6QS0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();

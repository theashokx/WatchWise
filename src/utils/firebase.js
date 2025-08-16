// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyArgMqHV3FZ9NpB0prDOIAHxDn0mXeYFf8",
  authDomain: "watchwise-ee58a.firebaseapp.com",
  projectId: "watchwise-ee58a",
  storageBucket: "watchwise-ee58a.firebasestorage.app",
  messagingSenderId: "928909730794",
  appId: "1:928909730794:web:1cc8e34d195633d5b14893",
  measurementId: "G-305W045DP1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();

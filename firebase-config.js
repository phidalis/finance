// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB3ooHNo1JGOAFoKDPWEBzDlAeHXIvpcBY",
  authDomain: "nyota-fund-ke.firebaseapp.com",
  projectId: "nyota-fund-ke",
  storageBucket: "nyota-fund-ke.firebasestorage.app",
  messagingSenderId: "29903733968",
  appId: "1:29903733968:web:8f75b375d30cf6059dcad5",
  measurementId: "G-4CWCLL0PYW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = firebase.firestore();
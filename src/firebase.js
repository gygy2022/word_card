// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCyoZODzsozp3m55oA2PwLctznTPnvLtXk",
  authDomain: "word-card-acc27.firebaseapp.com",
  projectId: "word-card-acc27",
  storageBucket: "word-card-acc27.appspot.com",
  messagingSenderId: "315019759455",
  appId: "1:315019759455:web:709efe143bb246119bf0ea",
  measurementId: "G-WETE6JYR75"
};
initializeApp(firebaseConfig);
// Initialize Firebase
// const app = initializeApp(firebaseConfig);


export const db = getFirestore();
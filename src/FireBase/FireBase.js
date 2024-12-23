// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import { getFirestore } from "firebase/firestore";
import {getStorage} from 'firebase/storage'
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyCYdyw0RtoONUHKJ4zxaYScrFHUceBJFgE",
    authDomain: "insider-4efaa.firebaseapp.com",
    projectId: "insider-4efaa",
    storageBucket: "insider-4efaa.appspot.com",
    messagingSenderId: "228918648775",
    appId: "1:228918648775:web:772efab4b57eeee8bb43e2",
    measurementId: "G-3D648EBL2D"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app)
const firestore = getFirestore(app)
const storage = getStorage(app)
const analytics = getAnalytics(app);

export {app, auth, firestore, storage, analytics }
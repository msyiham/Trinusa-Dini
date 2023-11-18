// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import {getStorage} from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA6AcWqd288XJhkud-hqTTwIe4i18v4DnM",
    authDomain: "trinusa-dini.firebaseapp.com",
    projectId: "trinusa-dini",
    storageBucket: "trinusa-dini.appspot.com",
    messagingSenderId: "556238405026",
    appId: "1:556238405026:web:e63165c99624cbc16946fb",
    measurementId: "G-B0GTYQSBN0"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIRESTORE_DB = getFirestore(FIREBASE_APP);
export const FIREBASE_STORAGE = getStorage(FIREBASE_APP);
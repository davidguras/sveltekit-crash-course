// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCOfO-Ma7eJm7QqeobNFLlcC6C5eHmyOUc',
  authDomain: 'my-app-353e9.firebaseapp.com',
  projectId: 'my-app-353e9',
  storageBucket: 'my-app-353e9.appspot.com',
  messagingSenderId: '957244108138',
  appId: '1:957244108138:web:a5acf69bb2ee445cdf8913',
  measurementId: 'G-SW3BY9F4B1'
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export const auth = getAuth();
export const storage = getStorage();

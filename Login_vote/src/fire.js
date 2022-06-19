import firebase from 'firebase/compat/app';
import {getFirestore } from "@firebase/firestore";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDs7jvC6RyWFImxB6saS65iE-WCH2CyNX8",
  authDomain: "login-election.firebaseapp.com",
  projectId: "login-election",
  storageBucket: "login-election.appspot.com",
  messagingSenderId: "547214192859",
  appId: "1:547214192859:web:9e936f0ffae2a161aa9cfe"
};

const fire = firebase.initializeApp(firebaseConfig);

export const db = getFirestore(fire);

export default fire;
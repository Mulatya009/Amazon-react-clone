import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBwiyv0fDZvYYdgI0KlXrOtX9O64iL1OFo",
  authDomain: "clone-fa328.firebaseapp.com",
  databaseURL: "https://clone-fa328.firebaseio.com",
  projectId: "clone-fa328",
  storageBucket: "clone-fa328.appspot.com",
  messagingSenderId: "1037433316248",
  appId: "1:1037433316248:web:48d9b613f62a3937c741ed",
  measurementId: "G-CELHVV1E2Z",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };

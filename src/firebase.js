import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDtbG0EyeyA6mXcg7yOMk9gsTkcypTPgcI",
  authDomain: "ig-reels-b2a90.firebaseapp.com",
  databaseURL: "https://ig-reels-b2a90.firebaseio.com",
  projectId: "ig-reels-b2a90",
  storageBucket: "ig-reels-b2a90.appspot.com",
  messagingSenderId: "947487010541",
  appId: "1:947487010541:web:194c7f9819e3167997a6e4",
  measurementId: "G-3W0751PRBG",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;

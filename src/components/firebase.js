import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAIcXhkgZUkTJop87LbFPcTjm1nM6LX0Kg",
  authDomain: "clone-8a53f.firebaseapp.com",
  databaseURL: "https://clone-8a53f.firebaseio.com",
  projectId: "clone-8a53f",
  storageBucket: "clone-8a53f.appspot.com",
  messagingSenderId: "892793877285",
  appId: "1:892793877285:web:fc3c2241b62c34c96ba0cc",
  measurementId: "G-3T6BZQ8ENF"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };

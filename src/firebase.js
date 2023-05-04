import firebase from "firebase";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDg8ZBwirUvbkeVPDLxlIaBybCB5QynmYE",
    authDomain: "hakimshop-aa3c3.firebaseapp.com",
    projectId: "hakimshop-aa3c3",
    storageBucket: "hakimshop-aa3c3.appspot.com",
    messagingSenderId: "642055276961",
    appId: "1:642055276961:web:11547cce1a393b8ea663e0",
    measurementId: "G-460SPD1JE1"
  };


  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  
  const auth = firebase.auth();
  
  export { db, auth };
  
  




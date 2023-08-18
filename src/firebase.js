import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCEtJzhoxTk1PZxLSEXKrOaCnBaXuINzt4",
    authDomain: "movie-browser-3afb3.firebaseapp.com",
    projectId: "movie-browser-3afb3",
    storageBucket: "movie-browser-3afb3.appspot.com",
    messagingSenderId: "922987290016",
    appId: "1:922987290016:web:3c505a01e87f37f11c98c5"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  
  export { auth };
  export default db;
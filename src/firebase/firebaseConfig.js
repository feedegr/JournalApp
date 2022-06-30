// Import the functions you need from the SDKs you need

import firebase from 'firebase/compat/app';
import "firebase/compat/auth";
import "firebase/compat/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDAc6lhXq5yIg4t-x9SJo2tjSBkrMvlem8",
  authDomain: "react-journalapp-12eb3.firebaseapp.com",
  projectId: "react-journalapp-12eb3",
  storageBucket: "react-journalapp-12eb3.appspot.com",
  messagingSenderId: "1017151156453",
  appId: "1:1017151156453:web:77871b38404ac2d2c8240c"
};

firebase.initializeApp(firebaseConfig);



const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();


export { db, googleAuthProvider, firebase };
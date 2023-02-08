// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAs_Ztzs7RJyYE9ha84ox276jbmDfNulvQ",
  authDomain: "learnershub-e7cac.firebaseapp.com",
  projectId: "learnershub-e7cac",
  storageBucket: "learnershub-e7cac.appspot.com",
  messagingSenderId: "87917254909",
  appId: "1:87917254909:web:3b269369bec9b0de954694",
  measurementId: "G-HBT767931Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {app,auth}
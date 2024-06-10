// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAbAjVGmIw4UBxFLxYZOL7V1Cgu3qqV1dY",
    authDomain: "react-todo-9a3b9.firebaseapp.com",
    projectId: "react-todo-9a3b9",
    storageBucket: "react-todo-9a3b9.appspot.com",
    messagingSenderId: "91954181277",
    appId: "1:91954181277:web:4736b9103cedbe3cd51074",
    measurementId: "G-6WE6JGWEZ9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAv-R8CIhNKu3YVFlyAbaadbmRzKnnMNfU",
    authDomain: "resume-builder-60c57.firebaseapp.com",
    projectId: "resume-builder-60c57",
    storageBucket: "resume-builder-60c57.appspot.com",
    messagingSenderId: "657514408240",
    appId: "1:657514408240:web:1b1df41c42fe67a96680f5",
    measurementId: "G-NQXBVPRG7F"
};


const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();


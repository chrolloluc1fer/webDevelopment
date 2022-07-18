// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBv3WgTmEwLuC15luf8oXpa90cq5_F-u9U",
    authDomain: "class-demo-620a8.firebaseapp.com",
    projectId: "class-demo-620a8",
    storageBucket: "class-demo-620a8.appspot.com",
    messagingSenderId: "775223827643",
    appId: "1:775223827643:web:889e8e5f6bd8a6bebc9d9e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export let auth = getAuth(app);
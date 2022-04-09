// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAb4oFwF8HK2rpRiaQQRWRgT63FEv01P9g",
    authDomain: "ema-john-simple-b567d.firebaseapp.com",
    projectId: "ema-john-simple-b567d",
    storageBucket: "ema-john-simple-b567d.appspot.com",
    messagingSenderId: "885099418087",
    appId: "1:885099418087:web:8b350878357cb18210ad42"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
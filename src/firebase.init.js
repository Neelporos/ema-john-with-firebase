// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAT9SU24215tLD5tuosa7sCfUMwzuEl45E",
    authDomain: "ema-john-simple-d089b.firebaseapp.com",
    projectId: "ema-john-simple-d089b",
    storageBucket: "ema-john-simple-d089b.appspot.com",
    messagingSenderId: "759728969334",
    appId: "1:759728969334:web:73859e95c7a15e01d4b157"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
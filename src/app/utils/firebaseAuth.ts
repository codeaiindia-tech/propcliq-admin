// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC7mq95vHx6DO4ARJMhaMM-ym2PROkIlOQ",
    authDomain: "otp-verification-aee01.firebaseapp.com",
    projectId: "otp-verification-aee01",
    storageBucket: "otp-verification-aee01.firebasestorage.app",
    messagingSenderId: "808491587019",
    appId: "1:808491587019:web:cf9a4f0ba4347a04dc924e",
    measurementId: "G-K4M814VSQT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app)
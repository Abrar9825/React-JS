// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCqWa9CO9F-iywasMaV6ZmiKpPjLSmMBEg",
    authDomain: "for-test-e0c91.firebaseapp.com",
    projectId: "for-test-e0c91",
    storageBucket: "for-test-e0c91.appspot.com",
    messagingSenderId: "847267948870",
    appId: "1:847267948870:web:91dbf499d54dbb00ce9d47",
    measurementId: "G-SMSLM4LFKZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth; 
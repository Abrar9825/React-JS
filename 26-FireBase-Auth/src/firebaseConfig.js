import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAOS8M6nHInYnl1nPoaE0E8ounnSz6CRAQ",
    authDomain: "first-auth-project-a249a.firebaseapp.com",
    projectId: "first-auth-project-a249a",
    storageBucket: "first-auth-project-a249a.appspot.com",
    messagingSenderId: "561534679421",
    appId: "1:561534679421:web:77ed6f93d4aee22316f414",
    measurementId: "G-48HC78W9NN"
}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)

export default auth;

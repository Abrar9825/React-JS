import { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import auth from '../firebaseConfig';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext(null);


export default function AuthState({ children }) {

    const [registerFormData, setRegisterFormData] = useState({
        name: '',
        email: '',
        password: '',
    });
    const [loginFormData, setLoginFormData] = useState({
        email: '',
        password: '',
    });

    const [user, setuser] = useState(null)
    const [loading, setloading] = useState(true)

    const navigate = useNavigate()

    function registerWithFirebase(event) {
        setloading(true)
        const { email, password } = registerFormData
        return createUserWithEmailAndPassword(auth, email, password)

    }

    function loginWithFirebase(event) {
        setloading(true)

        const { email, password } = loginFormData
        return signInWithEmailAndPassword(auth, email, password)

    }
    function handleLogout() {
        return signOut(auth)
    }
    useEffect(() => {
        const checkAuthState = onAuthStateChanged(auth, (currentUser) => {
            setuser(currentUser)
            setloading(false)
        })
        return () => {
            checkAuthState()
        }
    }, [])

    useEffect(() => {
        if (user) navigate('/profile')
    }, [user])

    if(loading) return <h1>Loading Plese Wait !</h1>

    return (
        <AuthContext.Provider value={{
            registerFormData,
            setRegisterFormData,
            registerWithFirebase,
            loading,
            user,
            loginFormData,
            setLoginFormData,
            loginWithFirebase,
            handleLogout,
            setloading
        }}>
            {children}
        </AuthContext.Provider>
    );
}

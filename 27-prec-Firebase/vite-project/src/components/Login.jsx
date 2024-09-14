import { signInWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import auth from '../firebaseConfig'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    const handleLoginSubmit = async (e) => {
        e.preventDefault();
        setLoading(true)
        setError('')
        try {
            await signInWithEmailAndPassword(auth, email, password)
            setEmail('')
            setPassword('')
            setError('')
            alert('Login successful!');
            navigate('/profile')

        } catch (error) {
            setError(err.message);
        }
        finally {
            setLoading(false)
        }   

    }

    return (
        <div>
            {loading && <h1>Loading, Please Wait!</h1>}
            <form action="" onSubmit={handleLoginSubmit}>
                <input
                    type="email"
                    value={email}
                    placeholder='Enter Your Email'
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    value={password}
                    placeholder='Enter Your password'
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type='submit'>Login </button>
            </form>
        </div>
    )
}

export default Login
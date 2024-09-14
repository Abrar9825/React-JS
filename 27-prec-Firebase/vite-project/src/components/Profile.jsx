import { signOut } from 'firebase/auth'
import React from 'react'
import { useNavigate } from 'react-router-dom';
import auth from '../firebaseConfig';


function profile() {
    const navigate = useNavigate()
    const handleLogout = async (e) => {
        try {
            await signOut(auth)
            navigate('/register')
        } catch (error) {
            console.error('Sign out error:', error);
        }
    }

    return (
        <div><h1>this Is Profile</h1>
            <button onClick={handleLogout}>Logout</button>
        </div>

    )
}

export default profile
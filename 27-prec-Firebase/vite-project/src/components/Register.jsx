import React, { useState } from 'react';
import auth from '../firebaseConfig'; // Default import
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate()

    const handleRegisterSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            setName('');
            setEmail('');
            setPassword('');
            alert('Registration successful!');
            navigate('/login')
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            {loading && <h1>Loading, Please Wait!</h1>}
            <form onSubmit={handleRegisterSubmit}>
                <input
                    type="text"
                    value={name}
                    placeholder='Enter Your Name'
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="email"
                    value={email}
                    placeholder='Enter Your Email'
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    value={password}
                    placeholder='Enter Your Password'
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type='submit' disabled={loading}>Register</button>
                {error && <p>{error}</p>}
            </form>
        </div>
    );
};

export default Register;

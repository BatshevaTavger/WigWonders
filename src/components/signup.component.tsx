import React, { useState } from 'react';
import { register } from '../api/login.api';
import { useNavigate } from 'react-router-dom';

export const SignUp = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        try {
            const data = await register(name, email, password);
            localStorage.setItem('user-name', name);
            navigate('/');            
            console.log('Registration successful', data);
        } catch (error) {
            console.error('Registration failed', error);
        }
    };

    return (
        <div>
            <h4>Enter new user Details</h4>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="name" name="name" value={name} onChange={(e) => setName(e.target.value)} /> <br />
                <input type="text" placeholder="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} /> <br />
                <input type="password" placeholder="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} /> <br />
                <button type="submit">Save</button>
            </form>
        </div>
    );
};

export default SignUp;

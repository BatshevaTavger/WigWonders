import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../api/login.api';

export const SignIn = () => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        try {
            const data = await login(name, password);

            console.log('Login successful', data);
            navigate('/'); 
        } catch (error) {
            console.error('Login failed', error);
            alert('Login failed: ' + error); 
        }
    };

    return (
        <div>
            <h1>SignIn</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="name" name="name" value={name} onChange={(e) => setName(e.target.value)} /> <br />
                <input type="password" placeholder="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} /> <br />
                <button type="submit">Connect</button>
            </form>
        </div>
    );
};

export default SignIn;

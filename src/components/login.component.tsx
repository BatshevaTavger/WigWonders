import React, { useState } from 'react';

export const SignIn = () => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e : any) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:8001/Login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name, password })
            });
            const data = await response.json();
            if (response.ok) {
                // שמירת הטוקן ב-localStorage
                localStorage.setItem('auth-token', data.token);
                console.log('Login successful', data);
            } else {
                console.error('Login failed', data);
            }
        } catch (error) {
            console.error('Error during login', error);
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

export const SignUp = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e : any) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:8001/Login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name, email, password })
            });
            const data = await response.json();
            if (response.ok) {
                console.log('Registration successful', data);
            } else {
                console.error('Registration failed', data);
            }
        } catch (error) {
            console.error('Error during registration', error);
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

import React from 'react';
import { Link } from 'react-router-dom';
import { logout } from '../api/login.api';

const Home = () => {
    let userName = localStorage.getItem('user-name');
    const logoutFunc = () =>{
        logout();
        alert('logout successful'); 
        localStorage.clear();
        userName = null;
    }


    return (
        <div>
            <h1>ברוכים הבאים לאתר שלנו</h1>
            <p>אנחנו מתמחים בפאות איכותיות ומגוון שירותים נלווים.</p>
            <div>
                <button><Link to={'/sign-up'}>To register</Link></button>
                <button><Link to={'/sign-in'}>To connect</Link></button> 
                {userName ? <button onClick={logoutFunc}><Link to={'/'}>To logout</Link></button> : <h1></h1>}
                {userName ? <h1>ברוך הבא, {userName}!</h1> : <h1></h1>}
                {userName ? <h1>השירותים שלנו <button><Link to={'/services'}>our services</Link></button></h1> : <h1></h1>}
            </div>
        </div>
    );
};

export default Home;

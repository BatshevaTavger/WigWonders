import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getServices } from '../api/services.api';

export const Services = () => {
    const navigate = useNavigate();
    const data = getServices()
    // alert(data)
    console.log(data)
    return (
        <div>
            <h1>our services</h1>
        <ul>
            <li></li>
        </ul>
        </div>
    );
};

export default Services;

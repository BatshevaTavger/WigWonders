import axios from 'axios';

const API_URL = 'http://localhost:8001';

const getServices = async () => {
    try {
        const response = await axios.get(`${API_URL}/Service`);
        return response.data;
    } catch (error) {
        console.error('Error get service:', error);
        throw error;
    }
};

export { getServices };


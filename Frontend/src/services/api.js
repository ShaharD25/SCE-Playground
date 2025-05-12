// frontend/src/services/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://sce-gateway.onrender.com', // כתובת ה־Gateway בענן
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json'
  }
});

export default api;


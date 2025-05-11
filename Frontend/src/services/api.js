// frontend/src/services/api.js
import axios from 'axios';

const api = axios.create({
  //baseURL: import.meta.env.VITE_GATEWAY_URL,
  baseURL: 'https://sce-gateway.onrender.com',
  withCredentials: true,
});

export default api;

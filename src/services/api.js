import axios from 'axios';

const api = axios.create({
  baseURL: `https://gateway.marvel.com/v1/public`,
});

api.interceptors.request.use((error) => {
  Promise.reject(error);
});

export default api;

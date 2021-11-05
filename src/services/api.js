import axios from 'axios';

const api = axios.create({
  baseURL: `https://superheroapi.com/api/access-token`,
});

api.interceptors.request.use((error) => {
  Promise.reject(error);
});

export default api;

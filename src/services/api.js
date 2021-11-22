import axios from 'axios';

const AcessToken = '3912102678893375';

const api = axios.create({
  baseURL: `https://superheroapi.com/api/${AcessToken}`,
});

api.interceptors.request.use((error) => {
  Promise.reject(error);
});

export default api;

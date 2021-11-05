import axios from 'axios';

const api = axios.create({
  baseURL: 'https://app.setconstrucaovirtual.com.br/api/',
});

api.interceptors.request.use((error) => {
  Promise.reject(error);
});

export default api;

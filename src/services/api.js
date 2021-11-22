import axios from 'axios';

const timestamp = new Date().getTime();
const AcessToken = '7675892e018b4cd58114f8bcc9f4ee08';
const hash = '422251c37eaef1fecc0f30c4227b0d65';

console.log('timestamp', timestamp);

const api = axios.create({
  baseURL: `https://gateway.marvel.com:443/v1/public/characters?apikey=${AcessToken}/`,
});

api.interceptors.request.use((error) => {
  Promise.reject(error);
});

export default api;

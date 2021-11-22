import axios from 'axios';

const api = axios.create({
  baseURL: `https://gateway.marvel.com/v1/public`,
  params: {
    apikey: '7675892e018b4cd58114f8bcc9f4ee08',
    hash: '360c0534c98a99247ad8f2f7cf0239d3',
    ts: '1637599932022',
  },
});

api.interceptors.request.use((error) => {
  Promise.reject(error);
});

export default api;

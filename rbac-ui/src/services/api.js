import axios from 'axios';

const api = axios.create({
  baseURL: 'https://mock-api-server.com', // Mock URL for now
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;

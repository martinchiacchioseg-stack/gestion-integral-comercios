import axios from 'axios';

const api = axios.create({
  baseURL: '/api'
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('comercio_token') || localStorage.getItem('amoremio_token') || localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      if (!window.location.pathname.includes('/login') && window.location.pathname !== '/') {
        localStorage.removeItem('comercio_token');
        localStorage.removeItem('comercio_user');
        localStorage.removeItem('amoremio_token');
        localStorage.removeItem('amoremio_user');
        window.location.href = '/login';
      }
    }
    return Promise.reject(error);
  }
);

export default api;

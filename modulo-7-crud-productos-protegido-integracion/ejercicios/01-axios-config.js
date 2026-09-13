import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000'
});

// Interceptor de Solicitud para adjuntar Token Bearer
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Interceptor de Respuesta para capturar errores de autorización (401, 403)
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && (error.response.status === 401 || error.response.status === 403)) {
      console.warn('Acceso denegado o token expirado');
    }
    return Promise.reject(error);
  }
);

export default api;

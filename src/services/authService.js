// src/services/authService.js
import api from './api';

const authService = {
  login: async (credentials) => {
    // credentials = { email, password }
    const response = await api.post('/auth/login/', credentials);
    return response.data;
  },

  register: async (userData) => {
    const response = await api.post('/auth/register/', userData);
    return response.data;
  },

  getProfile: async () => {
    const response = await api.get('/auth/profile/');
    return response.data;
  },
  
  updateProfile: async (data) => {
    const response = await api.patch('/auth/profile/', data);
    return response.data;
  }
};

export default authService;

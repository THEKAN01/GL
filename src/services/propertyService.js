// src/services/propertyService.js
import api from './api';

const propertyService = {
  // Récupérer tous les biens (avec filtres optionnels)
  getAll: async (filters = {}) => {
    const params = new URLSearchParams(filters).toString();
    return api.get(`/properties/?${params}`);
  },

  // Détails d'un bien spécifique
  getById: async (id) => {
    return api.get(`/properties/${id}/`);
  },

  // Création d'un bien (Gestion des fichiers : images + titre foncier)
  create: async (propertyData) => {
    const formData = new FormData();
    
    // On boucle sur l'objet pour remplir le FormData automatiquement
    Object.keys(propertyData).forEach(key => {
      formData.append(key, propertyData[key]);
    });

    return api.post('/properties/', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  },

  // Récupérer les biens de l'utilisateur connecté (Dashboard)
  getMyProperties: async () => {
    return api.get('/properties/my-listings/');
  }
};

export default propertyService;

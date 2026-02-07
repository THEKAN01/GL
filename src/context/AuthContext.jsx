// src/context/AuthContext.jsx
import { createContext, useState, useContext, useEffect } from 'react';
import api from '../services/api';

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [loading, setLoading] = useState(true);

  // Vérifier si un utilisateur est déjà connecté au chargement de l'appli
  useEffect(() => {
    const loadUser = async () => {
      if (token) {
        try {
          // On demande au back Django les infos du profil via le token
          const { data } = await api.get('/auth/user-profile/'); 
          setUser(data);
        } catch (error) {
          console.error("Session expirée ou invalide");
          logout();
        }
      }
      setLoading(false);
    };
    loadUser();
  }, [token]);

  // Fonction de connexion
  const login = async (credentials) => {
    try {
      // Appel à Django REST (SimpleJWT)
      const { data } = await api.post('/auth/login/', credentials);
      localStorage.setItem('token', data.access);
      setToken(data.access);
      setUser(data.user); // On suppose que le back renvoie aussi les infos user
      return { success: true };
    } catch (error) {
      return { 
        success: false, 
        message: error.response?.data?.detail || "Erreur de connexion" 
      };
    }
  };

  // Fonction de déconnexion
  const logout = () => {
    localStorage.removeItem('token');
    setToken(null);
    setUser(null);
  };

  // Rôles utilisateurs (Utile pour l'affichage conditionnel)
  const isOwner = user?.role === 'owner';
  const isAdmin = user?.role === 'admin';

  return (
    <AuthContext.Provider value={{ user, token, login, logout, loading, isOwner, isAdmin }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook personnalisé pour utiliser le contexte facilement
export const useAuth = () => useContext(AuthContext);

// src/context/UIContext.jsx
import { createContext, useState, useContext } from 'react';

const UIContext = createContext({});

export const UIProvider = ({ children }) => {
  const [notification, setNotification] = useState(null);

  const showToast = (message, type = 'info') => {
    setNotification({ message, type });
    // Auto-fermeture après 4 secondes
    setTimeout(() => setNotification(null), 4000);
  };

  return (
    <UIContext.Provider value={{ showToast }}>
      {children}
      {/* Composant de notification visuel */}
      {notification && (
        <div className={`fixed bottom-5 right-5 p-4 rounded-lg shadow-2xl z-[999] text-white animate-bounce
          ${notification.type === 'error' ? 'bg-red-600' : 'bg-emerald-600'}`}>
          {notification.message}
        </div>
      )}
    </UIContext.Provider>
  );
};

export const useUI = () => useContext(UIContext);

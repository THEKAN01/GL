import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { UIProvider } from './context/UIContext';
import AppRoutes from './routes/AppRoutes';

function App() {
  return (
    // UIProvider gère les notifications/toasts (erreurs connexion lente)
    <UIProvider>
      {/* AuthProvider gère la session JWT avec Django */}
      <AuthProvider>
        <Router>
          <AppRoutes />
        </Router>
      </AuthProvider>
    </UIProvider>
  );
}

export default App;

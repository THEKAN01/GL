// src/routes/AppRoutes.jsx
import { Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Properties from '../pages/Properties';
import PropertyDetail from '../pages/PropertyDetail';
import Dashboard from '../pages/Dashboard';
import AddProperty from '../pages/AddProperty';
import { useAuth } from '../context/AuthContext';
import Spinner from '../components/common/Spinner';

// Composant de protection des routes (Route Guard)
const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) return <Spinner fullPage />;
  return user ? children : <Navigate to="/login" />;
};

export default function AppRoutes() {
  return (
    <Routes>
      {/* Routes avec Navbar et Footer */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/properties" element={<Properties />} />
        <Route path="/property/:id" element={<PropertyDetail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Routes Protégées (nécessitent d'être connecté) */}
        <Route 
          path="/dashboard" 
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          } 
        />
        <Route 
          path="/publier" 
          element={
            <PrivateRoute>
              <AddProperty />
            </PrivateRoute>
          } 
        />
      </Route>

      {/* Page 404 (Optionnel) */}
      <Route path="*" element={<div className="p-20 text-center text-2xl font-bold">404 - Page Introuvable</div>} />
    </Routes>
  );
}

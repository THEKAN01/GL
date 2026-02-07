// src/components/layout/Navbar.jsx
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import Button from '../common/Button';

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100 px-4 md:px-8 py-3">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <span className="text-2xl text-emerald-600 font-bold tracking-tight">Immo<span className="text-slate-900">Vérif</span></span>
        </Link>

        {/* Liens Desktop */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          <Link to="/properties" className="hover:text-emerald-600 transition-colors">Acheter</Link>
          <Link to="/properties" className="hover:text-emerald-600 transition-colors">Louer</Link>
          <Link to="/contact" className="hover:text-emerald-600 transition-colors">Support</Link>
        </div>

        {/* Actions Auth */}
        <div className="flex items-center gap-4">
          {user ? (
            <div className="flex items-center gap-4">
              <Link to="/dashboard" className="text-sm font-semibold text-slate-700">Mon Compte</Link>
              <Button variant="outline" onClick={logout} className="py-1.5 px-4 text-xs">Déconnexion</Button>
            </div>
          ) : (
            <>
              <Link to="/login" className="text-sm font-semibold text-slate-700">Connexion</Link>
              <Link to="/publier">
                <Button variant="primary" className="py-2 px-5 text-sm">Publier une annonce</Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

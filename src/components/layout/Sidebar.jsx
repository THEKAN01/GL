// src/components/layout/Sidebar.jsx
import { NavLink } from 'react-router-dom';

export default function Sidebar() {
  const menuItems = [
    { label: 'Vue d\'ensemble', path: '/dashboard', icon: '📊' },
    { label: 'Mes Annonces', path: '/dashboard/properties', icon: '🏠' },
    { label: 'Ajouter un bien', path: '/publier', icon: '➕' },
    { label: 'Vérifications', path: '/dashboard/verification', icon: '🛡️' },
    { label: 'Mon Profil', path: '/dashboard/profile', icon: '👤' },
  ];

  return (
    <aside className="w-64 bg-white h-[calc(100vh-64px)] border-r border-slate-100 hidden md:block">
      <nav className="p-4 space-y-2">
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) => 
              `flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                isActive ? 'bg-emerald-50 text-emerald-600' : 'text-slate-600 hover:bg-slate-50'
              }`
            }
          >
            <span>{item.icon}</span>
            {item.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}

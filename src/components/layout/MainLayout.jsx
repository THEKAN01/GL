// src/components/layout/MainLayout.jsx
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

export default function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow">
        <Outlet /> {/* Les pages (Home, Login, etc.) s'afficheront ici */}
      </main>
      <Footer />
    </div>
  );
}

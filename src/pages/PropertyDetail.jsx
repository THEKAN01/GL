// src/pages/PropertyDetail.jsx
import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import propertyService from '../services/propertyService';
import PropertyGallery from '../components/property/PropertyGallery';
import Spinner from '../components/common/Spinner';
import Badge from '../components/common/Badge';
import Button from '../components/common/Button';

export default function PropertyDetail() {
  const { id } = useParams();
  const { data: p, loading } = useFetch(() => propertyService.getById(id), [id]);

  if (loading) return <Spinner fullPage />;
  if (!p) return <div className="text-center py-20">Bien non trouvé</div>;

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <PropertyGallery images={p.images} />
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
        {/* Infos principales */}
        <div className="lg:col-span-2">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h1 className="text-3xl font-bold text-slate-900">{p.title}</h1>
              <p className="text-slate-500 text-lg">📍 {p.neighborhood}, {p.city}</p>
            </div>
            <div className="text-right">
              <p className="text-3xl font-black text-emerald-600">{p.price.toLocaleString()} XAF</p>
              {p.is_verified && <Badge type="success">Certifié par l'Admin</Badge>}
            </div>
          </div>
          
          <div className="prose prose-slate max-w-none mt-8">
            <h3 className="text-xl font-bold">Description</h3>
            <p className="text-slate-600 leading-relaxed">{p.description}</p>
          </div>
        </div>

        {/* Sidebar de contact */}
        <div className="lg:col-span-1">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm sticky top-24">
            <h3 className="font-bold text-lg mb-4 text-slate-800">Contacter l'annonceur</h3>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-xl">👤</div>
              <div>
                <p className="font-bold text-slate-900">{p.owner_name}</p>
                <p className="text-xs text-slate-500">Membre depuis 2024</p>
              </div>
            </div>
            <div className="space-y-3">
              <Button variant="primary" className="w-full">📞 Appeler le {p.phone}</Button>
              <Button variant="outline" className="w-full">💬 WhatsApp</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

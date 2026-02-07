// src/components/property/PropertyCard.jsx
import { Link } from 'react-router-dom';
import Badge from '../common/Badge';

export default function PropertyCard({ property }) {
  const formattedPrice = new Intl.NumberFormat('fr-FR').format(property.price);

  return (
    <Link to={`/property/${property.id}`} className="group">
      <div className="bg-white rounded-2xl border border-slate-100 overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
        {/* Image Container */}
        <div className="relative h-56 overflow-hidden">
          <img 
            src={property.main_image} 
            alt={property.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
          />
          <div className="absolute top-3 left-3 flex flex-col gap-2">
            {property.is_verified && <Badge type="success">🛡️ Vérifié</Badge>}
            {property.is_urgent && <Badge type="danger">Urgent</Badge>}
          </div>
          <div className="absolute bottom-3 left-3">
            <span className="bg-white/90 backdrop-blur px-3 py-1 rounded-lg text-emerald-700 font-bold shadow-sm">
              {property.category} {/* Ex: Studio, Villa, Terrain */}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-4">
          <h3 className="text-slate-900 font-bold text-lg mb-1 truncate group-hover:text-emerald-600 transition-colors">
            {property.title}
          </h3>
          <p className="text-slate-500 text-sm flex items-center gap-1 mb-3">
            📍 {property.neighborhood}, {property.city}
          </p>
          
          <div className="flex items-center justify-between pt-3 border-t border-slate-50">
            <span className="text-emerald-600 font-extrabold text-xl">
              {formattedPrice} <span className="text-xs font-medium uppercase">XAF</span>
            </span>
            <div className="flex gap-3 text-slate-400 text-sm">
              <span title="Chambres">🛏️ {property.rooms}</span>
              <span title="Douches">🚿 {property.bathrooms}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

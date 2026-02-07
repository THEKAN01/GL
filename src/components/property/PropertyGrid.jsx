// src/components/property/PropertyGrid.jsx
import PropertyCard from './PropertyCard';
import Spinner from '../common/Spinner';

export default function PropertyGrid({ properties, loading }) {
  if (loading) return <Spinner />;

  if (properties.length === 0) {
    return (
      <div className="text-center py-20 bg-slate-50 rounded-3xl border-2 border-dashed border-slate-200">
        <p className="text-slate-400 text-lg">Aucun bien ne correspond à votre recherche.</p>
        <button className="mt-4 text-emerald-600 font-bold hover:underline">Réinitialiser les filtres</button>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {properties.map((item) => (
        <PropertyCard key={item.id} property={item} />
      ))}
    </div>
  );
}

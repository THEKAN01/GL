// src/pages/Home.jsx
import { useState } from 'react';
import useFetch from '../hooks/useFetch';
import propertyService from '../services/propertyService';
import PropertyGrid from '../components/property/PropertyGrid';
import PropertyFilters from '../components/property/PropertyFilters';

export default function Home() {
  const [filters, setFilters] = useState({});
  
  // On récupère les biens avec notre hook personnalisé
  const { data: properties, loading, error } = useFetch(
    () => propertyService.getAll(filters), 
    [filters]
  );

  return (
    <div className="animate-in fade-in duration-500">
      {/* Hero simple et efficace pour connexion lente */}
      <section className="bg-slate-900 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
            Trouvez un logement <span className="text-emerald-500">vérifié</span> au Cameroun.
          </h1>
          <p className="text-slate-400 text-lg mb-10">
            La plateforme qui élimine les arnaques grâce à la vérification systématique des titres fonciers.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 -mt-8">
        <PropertyFilters onFilterChange={setFilters} />
        
        <section className="py-12">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-slate-800">Annonces récentes</h2>
            <span className="text-slate-500 text-sm">{properties?.length || 0} biens trouvés</span>
          </div>
          
          {error && <div className="text-red-500 bg-red-50 p-4 rounded-xl text-center">{error}</div>}
          
          <PropertyGrid properties={properties || []} loading={loading} />
        </section>
      </div>
    </div>
  );
}

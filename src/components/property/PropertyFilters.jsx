// src/components/property/PropertyFilters.jsx
import Input from '../common/Input';
import Button from '../common/Button';

export default function PropertyFilters({ onFilterChange }) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 mb-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-semibold text-slate-700">Ville</label>
          <select className="w-full px-4 py-2.5 rounded-lg border border-slate-200 outline-none focus:border-emerald-500">
            <option>Toutes les villes</option>
            <option>Douala</option>
            <option>Yaoundé</option>
            <option>Kribi</option>
          </select>
        </div>

        <Input label="Prix Max (XAF)" type="number" placeholder="Ex: 150 000" />
        
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-semibold text-slate-700">Type de bien</label>
          <select className="w-full px-4 py-2.5 rounded-lg border border-slate-200 outline-none focus:border-emerald-500">
            <option>Appartement</option>
            <option>Studio</option>
            <option>Chambre</option>
            <option>Terrain</option>
          </select>
        </div>

        <Button variant="primary">Appliquer les filtres</Button>
      </div>
    </div>
  );
}

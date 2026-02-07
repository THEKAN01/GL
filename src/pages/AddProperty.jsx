// src/pages/AddProperty.jsx
import { useState } from 'react';
import api from '../services/api';
import Button from '../components/common/Button';
import Input from '../components/common/Input';

export default function AddProperty() {
  const [files, setFiles] = useState({ main_image: null, title_deed: null });

  const handleUpload = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    // On ajoute les champs textes et les fichiers
    formData.append('title', e.target.title.value);
    formData.append('main_image', files.main_image);
    formData.append('title_deed_pdf', files.title_deed); // Le document pour vérification

    try {
      await api.post('/properties/', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      alert("Annonce soumise pour vérification !");
    } catch (err) {
      alert("Erreur lors de l'envoi");
    }
  };

  return (
    <div className="max-w-2xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-8">Publier une annonce</h1>
      <form onSubmit={handleUpload} className="space-y-6 bg-white p-8 rounded-2xl border">
        <Input label="Titre de l'annonce" name="title" placeholder="Ex: Studio moderne à Bastos" required />
        
        <div>
          <label className="block text-sm font-bold mb-2">Photo principale du bien</label>
          <input type="file" onChange={e => setFiles({...files, main_image: e.target.files[0]})} required />
        </div>

        <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-100">
          <label className="block text-sm font-bold text-emerald-800 mb-2">Justificatif de propriété (Titre Foncier)</label>
          <p className="text-xs text-emerald-600 mb-3 italic">Ce document reste confidentiel et sert uniquement à la vérification par nos administrateurs.</p>
          <input type="file" onChange={e => setFiles({...files, title_deed: e.target.files[0]})} required />
        </div>

        <Button variant="primary" className="w-full">Soumettre pour vérification</Button>
      </form>
    </div>
  );
}

// src/components/layout/Footer.jsx
export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-slate-800 pb-12">
        <div className="col-span-1 md:col-span-1">
          <span className="text-2xl text-emerald-500 font-bold">ImmoVérif</span>
          <p className="mt-4 text-sm leading-relaxed">
            La plateforme de référence pour l'accès au logement sécurisé au Cameroun. 
            Zéro arnaque, 100% vérifié.
          </p>
        </div>
        
        <div>
          <h4 className="text-white font-bold mb-4">Navigation</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-emerald-400">Toutes les annonces</a></li>
            <li><a href="#" className="hover:text-emerald-400">Devenir propriétaire</a></li>
            <li><a href="#" className="hover:text-emerald-400">Guide de sécurité</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-4">Contact</h4>
          <ul className="space-y-2 text-sm">
            <li>📍 Yaoundé, Bastos</li>
            <li>📞 +237 6XX XX XX XX</li>
            <li>💬 WhatsApp : +237 6XX XX XX XX</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-4">Légal</h4>
          <ul className="space-y-2 text-sm">
            <li>Conditions d'utilisation</li>
            <li>Politique de confidentialité</li>
            <li>Frais de service (3-5%)</li>
          </ul>
        </div>
      </div>
      <div className="mt-8 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} ImmoVérif Cameroun. Tous droits réservés.
      </div>
    </footer>
  );
}

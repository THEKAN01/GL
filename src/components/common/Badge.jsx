// src/components/common/Badge.jsx
export default function Badge({ children, type = 'info' }) {
  const styles = {
    success: 'bg-emerald-100 text-emerald-700 border-emerald-200', // Pour "Vérifié"
    warning: 'bg-amber-100 text-amber-700 border-amber-200',      // Pour "En attente"
    danger: 'bg-red-100 text-red-700 border-red-200',            // Pour "Urgent"
    info: 'bg-blue-100 text-blue-700 border-blue-200'
  };

  return (
    <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase border ${styles[type]}`}>
      {children}
    </span>
  );
}

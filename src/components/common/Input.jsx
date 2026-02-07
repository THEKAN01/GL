// src/components/common/Input.jsx
export default function Input({ label, error, ...props }) {
  return (
    <div className="w-full flex flex-col gap-1.5">
      {label && <label className="text-sm font-semibold text-slate-700">{label}</label>}
      <input 
        className={`w-full px-4 py-2.5 rounded-lg border bg-white transition-all outline-none focus:ring-2 
          ${error ? 'border-red-500 focus:ring-red-200' : 'border-slate-200 focus:border-emerald-500 focus:ring-emerald-100'}`}
        {...props}
      />
      {error && <span className="text-xs text-red-500 font-medium">{error}</span>}
    </div>
  );
}

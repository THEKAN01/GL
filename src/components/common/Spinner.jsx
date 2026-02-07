// src/components/common/Spinner.jsx
export default function Spinner({ fullPage = false }) {
  const content = (
    <div className="flex flex-col items-center gap-2">
      <div className="w-10 h-10 border-4 border-emerald-100 border-t-emerald-600 rounded-full animate-spin"></div>
      <p className="text-xs text-slate-500 font-medium">Chargement...</p>
    </div>
  );

  if (fullPage) {
    return <div className="fixed inset-0 bg-white/80 backdrop-blur-sm flex items-center justify-center z-[100]">{content}</div>;
  }

  return <div className="p-8 flex items-center justify-center">{content}</div>;
}

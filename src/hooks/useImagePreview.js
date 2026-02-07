// src/hooks/useImagePreview.js
import { useState, useEffect } from 'react';

export default function useImagePreview(file) {
  const [preview, setPreview] = useState(null);

  useEffect(() => {
    if (!file) {
      setPreview(null);
      return;
    }

    const objectUrl = URL.createObjectURL(file);
    setPreview(objectUrl);

    // Nettoyage de la mémoire quand le composant est détruit
    return () => URL.revokeObjectURL(objectUrl);
  }, [file]);

  return preview;
}

// src/utils/validators.js

export const validateFile = (file, options = { maxSizeMB: 5, allowedTypes: ['image/jpeg', 'image/png', 'application/pdf'] }) => {
  if (!file) return "Aucun fichier sélectionné.";

  // Vérification de la taille (conversion MB en Octets)
  const maxSizeInBytes = options.maxSizeMB * 1024 * 1024;
  if (file.size > maxSizeInBytes) {
    return `Le fichier est trop lourd (max ${options.maxSizeMB} MB).`;
  }

  // Vérification du type
  if (!options.allowedTypes.includes(file.type)) {
    return "Format de fichier non supporté (JPG, PNG ou PDF uniquement).";
  }

  return null; // Pas d'erreur
};

export const validatePhone = (phone) => {
  // Regex pour les numéros camerounais (6xx xxx xxx)
  const re = /^(6)(2|5|6|7|8|9)[0-9]{7}$/;
  return re.test(phone);
};

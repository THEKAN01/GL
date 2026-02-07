// src/utils/formatters.js

/**
 * Formate un nombre en Francs CFA (XAF)
 * Exemple: 500000 => 500 000 XAF
 */
export const formatPrice = (amount) => {
  return new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency: 'XAF',
    minimumFractionDigits: 0,
  }).format(amount).replace('FCFA', 'XAF');
};

/**
 * Formate une date pour l'affichage des annonces
 * Exemple: "2024-10-25" => "25 oct. 2024"
 */
export const formatDate = (dateString) => {
  if (!dateString) return "";
  const options = { day: 'numeric', month: 'short', year: 'numeric' };
  return new Date(dateString).toLocaleDateString('fr-FR', options);
};

/**
 * Tronque un texte trop long (pour les descriptions en grid)
 */
export const truncateText = (text, maxLength = 100) => {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength) + "...";
};

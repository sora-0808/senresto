// Configuration centralisée des images
// Modifiez facilement les URLs des images ici

export const IMAGES = {
  // Images Hero et sections principales
  hero: {
    background: "/public/image/la-terrasse.jpg",
    restaurant: "https://images.pexels.com/photos/1633525/pexels-photo-1633525.jpeg?auto=compress&cs=tinysrgb&w=800"
  },

  // Images de plats par catégorie
  plats: {
    ceebujen: "/public/image/riz blanc.jpg",
    thieboudienne: "/public/image/plat-senegalais.png",
    yassa: "/public/image/Recette-de-Yassa-au-poulet-800x530.jpg",
    mafe: "/public/image/poulet-mafe-senegalais-sauce-arachide.jpg",
    domoda: "/public/image/domoda.jpg",
    caldou: "/public/image/caldou.jpg"
  },

  // Images entrées (Ndékki)
  entrees: {
    pastels: "/public/image/pastels.png",
    fataya: "/public/image/plat2.jpg",
    nem: "/public/image/nem2.jpg"
  },

  // Images desserts
  desserts: {
    thiakry: "/public/image/thiakiry.jpg",
    sombi: "/public/image/sombi.webp",
    ngalakh: "/public/image/NGALAKH.jpg"
  },

  // Images boissons
  boissons: {
    bissap: "/public/image/Bissap-2-of-3.jpg",
    gingembre: "/public/image/gingembre.jpg",
    bouye: "/public/image/baobab.webp"
  },

  // Images des chefs
  chefs: {
    amadou: "/public/image/chef-4625935_1280.jpg",
    fatou: "/public/image/femme-travaillant-comme-chef-professionnel (2).jpg",
    ousmane: "/public/image/istockphoto-886640128-612x612.jpg"
  },

  // Images galerie restaurant
  galerie: {
    interieur1: "/public/image/bg-item3-min.jpg",
    plat1: "/public/image/c10.jpg",
    epices: "/public/image/routi.jpg",
    ambiance: "/public/image/sauche.jpg"
  }
};

// Fonction utilitaire pour obtenir une image
export const getImage = (category: keyof typeof IMAGES, name: string): string => {
  const categoryImages = IMAGES[category] as Record<string, string>;
  return categoryImages[name] || IMAGES.hero.background;
};
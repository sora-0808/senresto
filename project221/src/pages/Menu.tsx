import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IMAGES } from '../data/images';

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  category: string;
}

const Menu: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const menuItems: MenuItem[] = [
    // Ndékki (Entrées)
    {
      id: 1,
      name: "Pastels",
      description: "Beignets farcis au poisson et aux légumes, croustillants à souhait",
      price: "1 000 FCFA",
      image: IMAGES.entrees.pastels,
      category: "ndekki"
    },
    {
      id: 2,
      name: "Fataya",
      description: "Chaussons fourrés à la viande hachée et aux épices traditionnelles",
      price: "1 500 FCFA",
      image: IMAGES.entrees.fataya,
      category: "ndekki"
    },
    {
      id: 3,
      name: "Nem Sénégalais",
      description: "Rouleaux de printemps à la sauce sénégalaise et aux légumes frais",
      price: "2 000 FCFA",
      image: IMAGES.entrees.nem,
      category: "ndekki"
    },
    
    // Plats Principaux
    {
      id: 4,
      name: "Ceebu Jën",
      description: "Le plat national : riz au poisson avec légumes et sauce tomate",
      price: "2 000 FCFA",
      image: IMAGES.plats.ceebujen,
      category: "plats"
    },
    {
      id: 5,
      name: "Thieboudienne Rouge",
      description: "Riz rouge aux poissons, légumes et sauce tomate épicée",
      price: "2 000 FCFA",
      image: IMAGES.plats.thieboudienne,
      category: "plats"
    },
    {
      id: 6,
      name: "Yassa Poulet",
      description: "Poulet mariné aux oignons et citron avec riz parfumé",
      price: "3 000 FCFA",
      image: IMAGES.plats.yassa,
      category: "plats"
    },
    {
      id: 7,
      name: "Mafé",
      description: "Ragoût de viande à la pâte d'arachide et légumes",
      price: "2 500 FCFA",
      image: IMAGES.plats.mafe,
      category: "plats"
    },
    {
      id: 8,
      name: "Domoda",
      description: "Plat traditionnel à base de pâte d'arachide et de viande",
      price: "1 000 FCFA",
      image: IMAGES.plats.domoda,
      category: "plats"
    },
    {
      id: 9,
      name: "Caldou",
      description: "Poisson blanc en sauce aux légumes et épices",
      price: "2 500 FCFA",
      image: IMAGES.plats.caldou,
      category: "plats"
    },

    // Desserts
    {
      id: 10,
      name: "Thiakry",
      description: "Dessert traditionnel au couscous, lait et vanille",
      price: "2 000 FCFA",
      image: IMAGES.desserts.thiakry,
      category: "desserts"
    },
    {
      id: 11,
      name: "Sombi",
      description: "Riz au lait parfumé à la vanille et aux épices",
      price: "2 500 FCFA",
      image: IMAGES.desserts.sombi,
      category: "desserts"
    },
    {
      id: 12,
      name: "Ngalakh",
      description: "Dessert festif aux arachides et pâte de mil",
      price: "1 500 FCFA",
      image: IMAGES.desserts.ngalakh,
      category: "desserts"
    },

    // Boissons
    {
      id: 13,
      name: "Bissap",
      description: "Boisson traditionnelle à l'hibiscus, rafraîchissante",
      price: "2 000 FCFA",
      image: IMAGES.boissons.bissap,
      category: "boissons"
    },
    {
      id: 14,
      name: "Gingembre",
      description: "Jus de gingembre frais aux épices",
      price: "1 000 FCFA",
      image: IMAGES.boissons.gingembre,
      category: "boissons"
    },
    {
      id: 15,
      name: "Bouye",
      description: "Jus de baobab crémeux et nutritif",
      price: "2 000 FCFA",
      image: IMAGES.boissons.bouye,
      category: "boissons"
    }
  ];

  const categories = [
    { id: 'all', name: 'Tous les plats' },
    { id: 'ndekki', name: 'Ndékki (Entrées)' },
    { id: 'plats', name: 'Plats Principaux' },
    { id: 'desserts', name: 'Desserts' },
    { id: 'boissons', name: 'Boissons' }
  ];

  const filteredItems = selectedCategory === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-red-700 mb-4">Notre Menu</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Découvrez notre sélection de plats traditionnels sénégalais, 
            préparés avec amour selon les recettes ancestrales
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all ${
                selectedCategory === category.id
                  ? 'bg-red-600 text-white shadow-lg'
                  : 'bg-white text-red-600 hover:bg-red-50 shadow-md'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Menu Items Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map(item => (
            <div key={item.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-red-700">{item.name}</h3>
                  <span className="text-2xl font-bold text-green-600">{item.price}</span>
                </div>
                <p className="text-gray-600 mb-4 leading-relaxed">{item.description}</p>
                <div className="flex gap-3">
                  <Link
                    to="/commande"
                    className="flex-1 bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-md font-semibold transition-colors text-center"
                  >
                    Commander
                  </Link>
                  <Link
                    to="/reservation"
                    className="flex-1 border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white py-2 px-4 rounded-md font-semibold transition-colors text-center"
                  >
                    Réserver
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-red-700 mb-4">
              Envie de découvrir nos saveurs ?
            </h2>
            <p className="text-gray-600 mb-6">
              Venez déguster nos plats dans notre restaurant chaleureux 
              ou commandez pour une livraison à domicile
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/reservation"
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-bold transition-colors"
              >
                Réserver une table
              </Link>
              <Link
                to="/commande"
                className="border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white px-8 py-3 rounded-lg font-bold transition-colors"
              >
                Commander en ligne
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Clock, MapPin } from 'lucide-react';
import { IMAGES } from '../data/images';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen bg-gradient-to-r from-red-600 to-orange-600 text-white">
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${IMAGES.hero.background})`,
          }}
        >
          <div className="absolute inset-0 bg-red-600 bg-opacity-60"></div>
        </div>
        
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Bienvenue chez
              <span className="text-yellow-300 block">KaayNoss</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 leading-relaxed">
              Découvrez l'authenticité de la cuisine sénégalaise dans un cadre chaleureux et convivial. 
              Nos plats traditionnels vous transportent directement au cœur de Dakar.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/menu"
                className="bg-yellow-500 hover:bg-yellow-600 text-red-800 px-8 py-4 rounded-lg font-bold text-lg transition-colors inline-block text-center"
              >
                Découvrir notre menu
              </Link>
              <Link
                to="/reservation"
                className="border-2 border-yellow-300 hover:bg-yellow-300 hover:text-red-800 px-8 py-4 rounded-lg font-bold text-lg transition-colors inline-block text-center"
              >
                Réserver une table
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-red-700 mb-6">Notre Histoire</h2>
              <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                KaayNoss, qui signifie "vient manger" en wolof, est né de la passion de partager 
                l'authenticité de la cuisine sénégalaise. Depuis notre ouverture, nous nous 
                efforçons de recréer les saveurs traditionnelles du Sénégal avec des ingrédients 
                frais et des recettes transmises de génération en génération.
              </p>
              <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                Chaque plat raconte une histoire, chaque épice révèle un secret. Venez vivre 
                une expérience culinaire unique qui éveillera tous vos sens.
              </p>
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-2">
                  <Star className="text-yellow-500" size={20} />
                  <span className="text-gray-700">4.8/5 avis clients</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="text-green-600" size={20} />
                  <span className="text-gray-700">15 ans d'expérience</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src={IMAGES.galerie.interieur1}
                alt="Restaurant intérieur"
                className="rounded-lg shadow-lg"
              />
              <img
                src={IMAGES.galerie.plat1}
                alt="Plat traditionnel"
                className="rounded-lg shadow-lg"
              />
              <img
                src={IMAGES.galerie.epices}
                alt="Épices africaines"
                className="rounded-lg shadow-lg"
              />
              <img
                src={IMAGES.galerie.ambiance}
                alt="Ambiance restaurant"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Specialties Section */}
      <section className="py-16 bg-gradient-to-r from-amber-50 to-orange-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-red-700 mb-12">Nos Spécialités</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Ceebu Jën",
                description: "Le plat national sénégalais : riz au poisson avec légumes et saveurs traditionnelles",
                image: IMAGES.plats.ceebujen,
                price: "2 000 FCFA"
              },
              {
                name: "Thieboudienne",
                description: "Riz rouge aux poissons et légumes, un classique de la cuisine sénégalaise",
                image: IMAGES.plats.thieboudienne,
                price: "2 000 FCFA"
              },
              {
                name: "Yassa Poulet",
                description: "Poulet mariné aux oignons et citron, accompagné de riz parfumé",
                image: IMAGES.plats.yassa,
                price: "3 500 FCFA"
              }
            ].map((dish, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-red-700 mb-2">{dish.name}</h3>
                  <p className="text-gray-600 mb-4">{dish.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-green-600">{dish.price}</span>
                    <Link
                      to="/commande"
                      className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md transition-colors"
                    >
                      Commander
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chefs Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-red-700 mb-12">Nos Chefs</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Chef Amadou Diallo",
                role: "Chef Exécutif",
                description: "30 ans d'expérience dans la cuisine sénégalaise traditionnelle",
                image: IMAGES.chefs.amadou
              },
              {
                name: "Chef Fatou Sow",
                role: "Spécialiste des Sauces",
                description: "Experte en sauces traditionnelles et épices africaines",
                image: IMAGES.chefs.fatou
              },
              {
                name: "Chef Ousmane Ba",
                role: "Pâtissier",
                description: "Créateur de desserts fusion alliant tradition et modernité",
                image: IMAGES.chefs.ousmane
              }
            ].map((chef, index) => (
              <div key={index} className="text-center">
                <img
                  src={chef.image}
                  alt={chef.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover shadow-lg"
                />
                <h3 className="text-xl font-bold text-red-700 mb-2">{chef.name}</h3>
                <p className="text-yellow-600 font-semibold mb-2">{chef.role}</p>
                <p className="text-gray-600">{chef.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-orange-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Prêt à vivre l'expérience KaayNoss ?</h2>
          <p className="text-xl mb-8">
            Réservez votre table dès maintenant et laissez-vous transporter par les saveurs du Sénégal
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/reservation"
              className="bg-yellow-500 hover:bg-yellow-600 text-red-800 px-8 py-4 rounded-lg font-bold text-lg transition-colors inline-block"
            >
              Réserver maintenant
            </Link>
            <Link
              to="/contact"
              className="border-2 border-yellow-300 hover:bg-yellow-300 hover:text-red-800 px-8 py-4 rounded-lg font-bold text-lg transition-colors inline-block"
            >
              Nous contacter
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-yellow-300">KaayNoss</h3>
              <p className="text-gray-300">
                Votre restaurant sénégalais authentique au cœur de la ville.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Horaires</h4>
              <div className="space-y-2 text-gray-300">
                <p>Lun - Jeu : 12h - 22h</p>
                <p>Ven - Sam : 12h - 02h</p>
                <p>Dimanche : 12h - 00h</p>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-gray-300">
                <div className="flex items-center space-x-2">
                  <MapPin size={16} />
                  <span>Avenue Léopold Sédar Senghor, Dakar</span>
                </div>
                <p>📞 +221 33 123 45 67</p>
                <p>✉️ contact@kaaynoss.sn</p>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Suivez-nous</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-300 hover:text-yellow-300 transition-colors">Facebook</a>
                <a href="#" className="text-gray-300 hover:text-yellow-300 transition-colors">Instagram</a>
                <a href="#" className="text-gray-300 hover:text-yellow-300 transition-colors">Twitter</a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 KaayNoss. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
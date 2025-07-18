import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { IMAGES } from '../data/images';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Message envoyé:', formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 3000);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-red-700 mb-4">Message Envoyé !</h2>
              <p className="text-gray-600 mb-4">
                Merci {formData.name} ! Nous avons bien reçu votre message et vous répondrons dans les plus brefs délais.
              </p>
              <p className="text-sm text-gray-500">
                Vous recevrez une réponse à l'adresse {formData.email}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-red-700 mb-4">Contactez-nous</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Une question, une suggestion ou envie de nous faire part de votre expérience ? 
            Nous sommes à votre écoute !
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Informations de contact */}
            <div className="space-y-8">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold text-red-700 mb-6">Nos coordonnées</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-red-100 p-3 rounded-lg">
                      <MapPin className="text-red-600" size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">Adresse</h3>
                      <p className="text-gray-600">
                        Avenue Léopold Sédar Senghor<br />
                        Dakar, Sénégal
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-red-100 p-3 rounded-lg">
                      <Phone className="text-red-600" size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">Téléphone</h3>
                      <p className="text-gray-600">+221 33 123 45 67</p>
                      <p className="text-sm text-gray-500">Réservations et informations</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-red-100 p-3 rounded-lg">
                      <Mail className="text-red-600" size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">Email</h3>
                      <p className="text-gray-600">contact@kaaynoss.fr</p>
                      <p className="text-sm text-gray-500">Nous répondons sous 24h</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-red-100 p-3 rounded-lg">
                      <Clock className="text-red-600" size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">Horaires</h3>
                      <div className="text-gray-600 space-y-1">
                        <p>Lundi - Jeudi : 12h00 - 22h00</p>
                        <p>Vendredi - Samedi : 12h00 - 23h00</p>
                        <p>Dimanche : 12h00 - 21h00</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section suivez-nous */}
              <div className="bg-gradient-to-br from-red-600 to-orange-600 text-white rounded-lg shadow-lg p-8">
                <h3 className="text-2xl font-bold mb-4">Suivez-nous</h3>
                <p className="mb-6">
                  Restez connectés pour découvrir nos dernières créations culinaires et nos événements spéciaux !
                </p>
                <div className="flex space-x-4">
                  <a href="#" className="bg-white bg-opacity-20 hover:bg-opacity-30 p-3 rounded-lg transition-colors">
                    <span className="font-semibold">Facebook</span>
                  </a>
                  <a href="#" className="bg-white bg-opacity-20 hover:bg-opacity-30 p-3 rounded-lg transition-colors">
                    <span className="font-semibold">Instagram</span>
                  </a>
                  <a href="#" className="bg-white bg-opacity-20 hover:bg-opacity-30 p-3 rounded-lg transition-colors">
                    <span className="font-semibold">Twitter</span>
                  </a>
                </div>
              </div>

              {/* Image du restaurant */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src={IMAGES.hero.restaurant}
                  alt="Restaurant KaayNoss"
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-red-700 mb-2">Venez nous rendre visite !</h3>
                  <p className="text-gray-600">
                    Notre équipe vous accueille dans un cadre chaleureux et authentique 
                    pour une expérience culinaire inoubliable.
                  </p>
                </div>
              </div>
            </div>

            {/* Formulaire de contact */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-red-700 mb-6">Envoyez-nous un message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      placeholder="Votre nom complet"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      placeholder="votre@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Sujet *
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  >
                    <option value="">Sélectionnez un sujet</option>
                    <option value="reservation">Réservation</option>
                    <option value="commande">Commande</option>
                    <option value="feedback">Avis et suggestions</option>
                    <option value="evenement">Événement privé</option>
                    <option value="autre">Autre</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="Votre message..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-6 rounded-lg transition-colors flex items-center justify-center space-x-2"
                >
                  <Send size={20} />
                  <span>Envoyer le message</span>
                </button>
              </form>

              <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <p className="text-sm text-yellow-800">
                  <strong>Note :</strong> Nous nous engageons à répondre à tous les messages dans les 24 heures. 
                  Pour les réservations urgentes, nous vous recommandons de nous appeler directement.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Section FAQ */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-red-700 mb-6 text-center">Questions Fréquentes</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">🍽️ Puis-je modifier ma réservation ?</h3>
                <p className="text-gray-600 mb-4">
                  Oui, vous pouvez modifier ou annuler votre réservation jusqu'à 2 heures avant l'heure prévue.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">🚗 Avez-vous un parking ?</h3>
                <p className="text-gray-600 mb-4">
                  Un parking est disponible devant le restaurant. Places gratuites pour nos clients.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">🥗 Avez-vous des options végétariennes ?</h3>
                <p className="text-gray-600 mb-4">
                  Oui, nous proposons plusieurs plats végétariens traditionnels sénégalais.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">🎉 Organisez-vous des événements privés ?</h3>
                <p className="text-gray-600 mb-4">
                  Oui, nous organisons des événements privés pour tous types d'occasions. Contactez-nous pour plus d'informations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
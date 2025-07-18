import React, { useState } from 'react';
import { Calendar, Clock, Users, Phone, Mail, User } from 'lucide-react';
import { IMAGES } from '../data/images';

const Reservation: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulation de l'envoi
    console.log('Données de réservation:', formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        guests: '',
        message: ''
      });
    }, 3000);
  };

  const timeSlots = [
    '12:00', '12:30', '13:00', '13:30', '14:00', '14:30',
    '19:00', '19:30', '20:00', '20:30', '21:00', '21:30'
  ];

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
              <h2 className="text-3xl font-bold text-red-700 mb-4">Réservation Confirmée !</h2>
              <p className="text-gray-600 mb-6">
                Merci {formData.name} ! Votre réservation a été enregistrée avec succès.
                Nous vous confirmerons par email dans les plus brefs délais.
              </p>
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                <h3 className="font-semibold text-red-700 mb-2">Récapitulatif de votre réservation :</h3>
                <div className="text-left space-y-2 text-gray-700">
                  <p><strong>Date :</strong> {formData.date}</p>
                  <p><strong>Heure :</strong> {formData.time}</p>
                  <p><strong>Nombre de convives :</strong> {formData.guests}</p>
                  <p><strong>Téléphone :</strong> {formData.phone}</p>
                </div>
              </div>
              <p className="text-sm text-gray-500">
                Un email de confirmation vous sera envoyé à {formData.email}
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
          <h1 className="text-5xl font-bold text-red-700 mb-4">Réservation</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Réservez votre table et préparez-vous à vivre une expérience culinaire inoubliable
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Formulaire de réservation */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-red-700 mb-6">Informations de réservation</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      <User className="inline mr-2" size={16} />
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
                      <Mail className="inline mr-2" size={16} />
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
                    <Phone className="inline mr-2" size={16} />
                    Téléphone *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="01 23 45 67 89"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      <Calendar className="inline mr-2" size={16} />
                      Date *
                    </label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      required
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      <Clock className="inline mr-2" size={16} />
                      Heure *
                    </label>
                    <select
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    >
                      <option value="">Sélectionnez l'heure</option>
                      {timeSlots.map(time => (
                        <option key={time} value={time}>{time}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    <Users className="inline mr-2" size={16} />
                    Nombre de convives *
                  </label>
                  <select
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  >
                    <option value="">Nombre de personnes</option>
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                      <option key={num} value={num}>
                        {num} personne{num > 1 ? 's' : ''}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Message (optionnel)
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="Demandes spéciales, allergies, occasion particulière..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-6 rounded-lg transition-colors"
                >
                  Confirmer la réservation
                </button>
              </form>
            </div>

            {/* Informations pratiques */}
            <div className="space-y-8">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-2xl font-bold text-red-700 mb-6">Informations pratiques</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Calendar className="text-red-600 mt-1" size={20} />
                    <div>
                      <h4 className="font-semibold text-gray-800">Horaires d'ouverture</h4>
                      <p className="text-gray-600">Lundi - Jeudi : 12h - 22h</p>
                      <p className="text-gray-600">Vendredi - Samedi : 12h - 23h</p>
                      <p className="text-gray-600">Dimanche : 12h - 21h</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Phone className="text-red-600 mt-1" size={20} />
                    <div>
                      <h4 className="font-semibold text-gray-800">Téléphone</h4>
                      <p className="text-gray-600">+221 33 123 45 67</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Mail className="text-red-600 mt-1" size={20} />
                    <div>
                      <h4 className="font-semibold text-gray-800">Email</h4>
                      <p className="text-gray-600">reservation@kaaynoss.fr</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-red-600 to-orange-600 text-white rounded-lg shadow-lg p-8">
                <h3 className="text-2xl font-bold mb-4">Pourquoi réserver ?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-2">
                    <span className="text-yellow-300">✓</span>
                    <span>Garantie d'avoir une table à l'heure souhaitée</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-yellow-300">✓</span>
                    <span>Service personnalisé selon vos demandes</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-yellow-300">✓</span>
                    <span>Possibilité d'organiser des événements spéciaux</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-yellow-300">✓</span>
                    <span>Recommandations personnalisées de nos chefs</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src={IMAGES.galerie.ambiance}
                  alt="Restaurant ambiance"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-red-700 mb-2">Ambiance chaleureuse</h3>
                  <p className="text-gray-600">
                    Profitez d'un cadre authentique et convivial pour vos repas en famille ou entre amis.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reservation;
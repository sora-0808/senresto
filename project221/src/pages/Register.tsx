import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, User, Eye, EyeOff } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Register: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (formData.password !== formData.confirmPassword) {
      setError('Les mots de passe ne correspondent pas');
      return;
    }

    if (formData.password.length < 6) {
      setError('Le mot de passe doit contenir au moins 6 caractères');
      return;
    }

    setIsLoading(true);

    try {
      const success = await register(formData.name, formData.email, formData.password);
      if (success) {
        navigate('/');
      } else {
        setError('Une erreur est survenue lors de l\'inscription');
      }
    } catch (err) {
      setError('Une erreur est survenue. Veuillez réessayer.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-red-700 mb-2">Inscription</h1>
              <p className="text-gray-600">
                Créez votre compte KaayNoss
              </p>
            </div>

            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  <User className="inline mr-2" size={16} />
                  Nom complet
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
                  Email
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

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  <Lock className="inline mr-2" size={16} />
                  Mot de passe
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent pr-12"
                    placeholder="Minimum 6 caractères"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  <Lock className="inline mr-2" size={16} />
                  Confirmer le mot de passe
                </label>
                <div className="relative">
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent pr-12"
                    placeholder="Répétez votre mot de passe"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  >
                    {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className={`w-full py-3 px-4 rounded-lg font-bold text-white transition-colors ${
                  isLoading 
                    ? 'bg-gray-400 cursor-not-allowed' 
                    : 'bg-red-600 hover:bg-red-700'
                }`}
              >
                {isLoading ? 'Inscription...' : 'S\'inscrire'}
              </button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-gray-600">
                Déjà un compte ?{' '}
                <Link to="/login" className="text-red-600 hover:text-red-700 font-semibold">
                  Connectez-vous
                </Link>
              </p>
            </div>

            <div className="mt-6 text-xs text-gray-500 text-center">
              En créant un compte, vous acceptez nos{' '}
              <a href="#" className="text-red-600 hover:text-red-700">
                Conditions d'utilisation
              </a>
              {' '}et notre{' '}
              <a href="#" className="text-red-600 hover:text-red-700">
                Politique de confidentialité
              </a>
            </div>
          </div>

          {/* Avantages de l'inscription */}
          <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold text-red-700 mb-4">Vos avantages</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start space-x-2">
                <span className="text-red-600 mt-1">✓</span>
                <span>Réservations plus rapides avec vos informations sauvegardées</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-red-600 mt-1">✓</span>
                <span>Historique de vos commandes et réservations</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-red-600 mt-1">✓</span>
                <span>Offres spéciales et promotions exclusives</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-red-600 mt-1">✓</span>
                <span>Notifications pour les événements spéciaux</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
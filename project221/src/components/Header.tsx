import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, User, LogOut } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logout, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gradient-to-r from-red-600 to-red-700 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold flex items-center space-x-2">
            <span className="text-yellow-300">🍽️</span>
            <span>KaayNoss</span>
          </Link>
          
          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="hover:text-yellow-300 transition-colors">
              Accueil
            </Link>
            <Link to="/menu" className="hover:text-yellow-300 transition-colors">
              Menu
            </Link>
            <Link to="/reservation" className="hover:text-yellow-300 transition-colors">
              Réservation
            </Link>
            <Link to="/commande" className="hover:text-yellow-300 transition-colors">
              Commande
            </Link>
            <Link to="/contact" className="hover:text-yellow-300 transition-colors">
              Contact
            </Link>
          </nav>

          {/* Auth Section */}
          <div className="hidden md:flex items-center space-x-4">
            {isAuthenticated ? (
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <User size={20} />
                  <span>Bonjour, {user?.name}</span>
                </div>
                <button
                  onClick={handleLogout}
                  className="flex items-center space-x-1 hover:text-yellow-300 transition-colors"
                >
                  <LogOut size={16} />
                  <span>Déconnexion</span>
                </button>
              </div>
            ) : (
              <div className="flex space-x-4">
                <Link 
                  to="/login" 
                  className="bg-yellow-500 hover:bg-yellow-600 text-red-800 px-4 py-2 rounded-md font-semibold transition-colors"
                >
                  Connexion
                </Link>
                <Link 
                  to="/register" 
                  className="border border-yellow-300 hover:bg-yellow-300 hover:text-red-800 px-4 py-2 rounded-md font-semibold transition-colors"
                >
                  Inscription
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-red-500">
            <nav className="flex flex-col space-y-2">
              <Link 
                to="/" 
                className="py-2 hover:text-yellow-300 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Accueil
              </Link>
              <Link 
                to="/menu" 
                className="py-2 hover:text-yellow-300 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Menu
              </Link>
              <Link 
                to="/reservation" 
                className="py-2 hover:text-yellow-300 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Réservation
              </Link>
              <Link 
                to="/commande" 
                className="py-2 hover:text-yellow-300 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Commande
              </Link>
              <Link 
                to="/contact" 
                className="py-2 hover:text-yellow-300 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              
              {isAuthenticated ? (
                <div className="pt-4 border-t border-red-500 mt-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <User size={16} />
                    <span>Bonjour, {user?.name}</span>
                  </div>
                  <button
                    onClick={handleLogout}
                    className="flex items-center space-x-1 hover:text-yellow-300 transition-colors"
                  >
                    <LogOut size={16} />
                    <span>Déconnexion</span>
                  </button>
                </div>
              ) : (
                <div className="pt-4 border-t border-red-500 mt-4 space-y-2">
                  <Link 
                    to="/login" 
                    className="block bg-yellow-500 hover:bg-yellow-600 text-red-800 px-4 py-2 rounded-md font-semibold transition-colors text-center"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Connexion
                  </Link>
                  <Link 
                    to="/register" 
                    className="block border border-yellow-300 hover:bg-yellow-300 hover:text-red-800 px-4 py-2 rounded-md font-semibold transition-colors text-center"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Inscription
                  </Link>
                </div>
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
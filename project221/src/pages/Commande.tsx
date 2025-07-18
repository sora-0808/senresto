import React, { useState } from 'react';
import { ShoppingCart, Plus, Minus, Trash2 } from 'lucide-react';
import { IMAGES } from '../data/images';

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

interface CartItem extends MenuItem {
  quantity: number;
}

const Commande: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [cart, setCart] = useState<CartItem[]>([]);
  const [showCart, setShowCart] = useState(false);
  const [orderForm, setOrderForm] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    message: ''
  });
  const [isOrderSubmitted, setIsOrderSubmitted] = useState(false);

  const menuItems: MenuItem[] = [
    {
      id: 1,
      name: "Pastels",
      description: "Beignets farcis au poisson et aux légumes",
      price: 4000,
      image: IMAGES.entrees.pastels,
      category: "ndekki"
    },
    {
      id: 2,
      name: "Ceebu Jën",
      description: "Riz au poisson avec légumes et sauce tomate",
      price: 9000,
      image: IMAGES.plats.ceebujen,
      category: "plats"
    },
    {
      id: 3,
      name: "Yassa Poulet",
      description: "Poulet mariné aux oignons et citron",
      price: 7500,
      image: IMAGES.plats.yassa,
      category: "plats"
    },
    {
      id: 4,
      name: "Thiakry",
      description: "Dessert traditionnel au couscous et lait",
      price: 3000,
      image: IMAGES.desserts.thiakry,
      category: "desserts"
    },
    {
      id: 5,
      name: "Bissap",
      description: "Boisson à l'hibiscus",
      price: 2000,
      image: IMAGES.boissons.bissap,
      category: "boissons"
    }
  ];

  const categories = [
    { id: 'all', name: 'Tous' },
    { id: 'ndekki', name: 'Entrées' },
    { id: 'plats', name: 'Plats' },
    { id: 'desserts', name: 'Desserts' },
    { id: 'boissons', name: 'Boissons' }
  ];

  const filteredItems = selectedCategory === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === selectedCategory);

  const addToCart = (item: MenuItem) => {
    const existingItem = cart.find(cartItem => cartItem.id === item.id);
    if (existingItem) {
      setCart(cart.map(cartItem => 
        cartItem.id === item.id 
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      ));
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  const removeFromCart = (id: number) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const updateQuantity = (id: number, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(id);
      return;
    }
    setCart(cart.map(item => 
      item.id === id ? { ...item, quantity } : item
    ));
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const handleOrderSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Commande:', { orderForm, cart, total: getTotalPrice() });
    setIsOrderSubmitted(true);
    
    // Reset after 3 seconds
    setTimeout(() => {
      setIsOrderSubmitted(false);
      setCart([]);
      setOrderForm({
        name: '',
        email: '',
        phone: '',
        address: '',
        message: ''
      });
      setShowCart(false);
    }, 3000);
  };

  if (isOrderSubmitted) {
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
              <h2 className="text-3xl font-bold text-red-700 mb-4">Commande Confirmée !</h2>
              <p className="text-gray-600 mb-4">
                Merci {orderForm.name} ! Votre commande a été enregistrée avec succès.
              </p>
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <h3 className="font-semibold text-red-700 mb-2">Total : {getTotalPrice().toLocaleString()} FCFA</h3>
                <p className="text-sm text-gray-600">
                  Vous recevrez un email de confirmation avec les détails de livraison.
                </p>
              </div>
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
          <h1 className="text-5xl font-bold text-red-700 mb-4">Commander en ligne</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Savourez nos plats traditionnels chez vous. Commandez maintenant et profitez de la livraison rapide !
          </p>
        </div>

        {/* Panier flottant */}
        <div className="fixed top-24 right-4 z-40">
          <button
            onClick={() => setShowCart(!showCart)}
            className="bg-red-600 hover:bg-red-700 text-white p-3 rounded-full shadow-lg transition-colors"
          >
            <ShoppingCart size={24} />
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-yellow-500 text-red-800 text-sm font-bold rounded-full w-6 h-6 flex items-center justify-center">
                {cart.reduce((total, item) => total + item.quantity, 0)}
              </span>
            )}
          </button>
        </div>

        {/* Filtres de catégorie */}
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

        {/* Grille des articles */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
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
                  <span className="text-2xl font-bold text-green-600">{item.price.toLocaleString()} FCFA</span>
                </div>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <button
                  onClick={() => addToCart(item)}
                  className="w-full bg-red-600 hover:bg-red-700 text-white py-3 px-4 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2"
                >
                  <Plus size={18} />
                  <span>Ajouter au panier</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Panier modal */}
        {showCart && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg shadow-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6 border-b">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-bold text-red-700">Votre Panier</h2>
                  <button
                    onClick={() => setShowCart(false)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="p-6">
                {cart.length === 0 ? (
                  <p className="text-gray-500 text-center py-8">Votre panier est vide</p>
                ) : (
                  <>
                    <div className="space-y-4 mb-6">
                      {cart.map(item => (
                        <div key={item.id} className="flex items-center justify-between border-b pb-4">
                          <div className="flex items-center space-x-4">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="w-16 h-16 object-cover rounded-lg"
                            />
                            <div>
                              <h3 className="font-semibold text-red-700">{item.name}</h3>
                              <p className="text-gray-600">{item.price.toLocaleString()} FCFA</p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="bg-gray-200 hover:bg-gray-300 p-1 rounded"
                            >
                              <Minus size={16} />
                            </button>
                            <span className="w-8 text-center">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="bg-gray-200 hover:bg-gray-300 p-1 rounded"
                            >
                              <Plus size={16} />
                            </button>
                            <button
                              onClick={() => removeFromCart(item.id)}
                              className="text-red-600 hover:text-red-700 p-1"
                            >
                              <Trash2 size={16} />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="border-t pt-4">
                      <div className="flex justify-between items-center mb-6">
                        <span className="text-xl font-bold">Total :</span>
                        <span className="text-2xl font-bold text-green-600">{getTotalPrice().toLocaleString()} FCFA</span>
                      </div>

                      <form onSubmit={handleOrderSubmit} className="space-y-4">
                        <div className="grid md:grid-cols-2 gap-4">
                          <input
                            type="text"
                            placeholder="Nom complet"
                            value={orderForm.name}
                            onChange={(e) => setOrderForm({...orderForm, name: e.target.value})}
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                          />
                          <input
                            type="email"
                            placeholder="Email"
                            value={orderForm.email}
                            onChange={(e) => setOrderForm({...orderForm, email: e.target.value})}
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                          />
                        </div>
                        <input
                          type="tel"
                          placeholder="Téléphone"
                          value={orderForm.phone}
                          onChange={(e) => setOrderForm({...orderForm, phone: e.target.value})}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                        />
                        <textarea
                          placeholder="Adresse de livraison"
                          value={orderForm.address}
                          onChange={(e) => setOrderForm({...orderForm, address: e.target.value})}
                          required
                          rows={3}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                        />
                        <textarea
                          placeholder="Message (optionnel)"
                          value={orderForm.message}
                          onChange={(e) => setOrderForm({...orderForm, message: e.target.value})}
                          rows={2}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                        />
                        <button
                          type="submit"
                          className="w-full bg-red-600 hover:bg-red-700 text-white py-3 px-6 rounded-lg font-bold transition-colors"
                        >
                          Confirmer la commande - {getTotalPrice().toLocaleString()} FCFA
                        </button>
                      </form>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Commande;
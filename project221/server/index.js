require('dotenv').config();
const express = require('express');
const cors = require('cors');
const sequelize = require('./db');
const MenuItem = require('./models/MenuItem');

const app = express();
app.use(cors());
app.use(express.json());

// Route : récupérer tous les plats
app.get('/api/menu', async (_req, res) => {
  try {
    const items = await MenuItem.findAll();
    res.json(items);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Route : ajouter des données de test (à appeler une seule fois)
app.post('/api/seed', async (_req, res) => {
  try {
    await sequelize.sync({ force: true }); // recrée la table
    await MenuItem.bulkCreate([
      { category: 'plats', name: 'Ceebu Jën', description: 'Riz au poisson', price: 3500, image: 'https://i.imgur.com/ceebu.jpg' },
      { category: 'boissons', name: 'Bissap', description: 'Jus d’hibiscus', price: 1000, image: 'https://i.imgur.com/bissap.jpg' },
      { category: 'desserts', name: 'Thiakry', description: 'Dessert à base de mil', price: 800, image: 'https://i.imgur.com/thiakry.jpg' }
    ]);
    res.json({ message: '✅ Données ajoutées' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Lancer le serveur
const PORT = process.env.PORT || 5000;
sequelize.authenticate()
  .then(() => {
    console.log('✅ MySQL connecté');
    app.listen(PORT, () => console.log(`🚀 Serveur sur le port ${PORT}`));
  })
  .catch(err => console.error('❌ Erreur connexion :', err));
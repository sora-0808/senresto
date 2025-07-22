const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const MenuItem = sequelize.define('MenuItem', {
  category: {
    type: DataTypes.STRING,
    allowNull: false
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  image: {
    type: DataTypes.STRING
  }
}, {
  tableName: 'menu_items',
  timestamps: false
});

module.exports = MenuItem;
const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/dbconnection');

sequelize.options.logging = false;

const Cards = sequelize.define('Cards', {
  card_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  card_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  card_description: {
    type: DataTypes.STRING,
  },
  card_description1: {
    type: DataTypes.STRING,
  },
  image: {
    type: DataTypes.STRING,
  },
});

// Sync the model with the database
(async () => {
  try {
    await Cards.sync({ alter: true });
    console.log('Card table updated!');
  } catch (error) {
    console.error('Error syncing Card table:', error);
  }
})();

module.exports = Cards;
const { DataTypes, Sequelize } = require('sequelize');
const { conn } = require('../db.js')
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.

module.exports = (sequelize) => {
  // defino el modelo
   sequelize.define('recipe', {
    
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    resumen: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    score: {
      type: DataTypes.INTEGER
    },
    level: {
      type: DataTypes.INTEGER
    },
    step: {
      type: DataTypes.TEXT
    }
  });
};



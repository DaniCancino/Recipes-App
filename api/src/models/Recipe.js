const { DataTypes, Sequelize } = require('sequelize');
const { sequelize } = require('../db.js')
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
    puntuacion: {
      type: DataTypes.INTEGER
    },
    nivel: {
      type: DataTypes.INTEGER
    },
    pasos: {
      type: DataTypes.TEXT
    }
  });
};



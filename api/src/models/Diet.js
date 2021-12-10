const {DataTypes} = require('sequelize');


module.exports = (sequelize) =>{
    sequelize.define('diet',{
        diet: {
            type: DataTypes.STRING
        }
    })
}
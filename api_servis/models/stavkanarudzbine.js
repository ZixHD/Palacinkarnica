'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class StavkaNarudzbine extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Narudzbina }) {
      // define association here
    }
  }
  StavkaNarudzbine.init({
    narudzbina_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    palacinka_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    komada: DataTypes.INTEGER,
    jedinicna_cena: {
      type: DataTypes.INTEGER,
      allowNull: false
    }

  }, {
    sequelize,
    modelName: 'StavkaNarudzbine',
  });
  return StavkaNarudzbine;
};
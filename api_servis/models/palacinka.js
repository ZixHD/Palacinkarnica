'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Palacinka extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Kategorija, Sastojak, StavkaNarudzbine }) {
   
      this.belongsTo(Kategorija, { foreignKey: "kategorija_id", as: "kategorija", onDelete: 'CASCADE' });
      this.hasMany(StavkaNarudzbine, { foreignKey: "palacinka_id", as: "stavke" });
      this.belongsToMany(Sastojak, { foreignKey: "palacinka_id", otherKey: 'sastojak_id', as: "sastojci", through: "PalacinkaSastojak" });
    }
  }

 
  Palacinka.init({
    naziv: {
      type: DataTypes.STRING(120),
      unique: true,
      allowNull: false
    },
    opis: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    cena: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    kategorija_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'Palacinka',
  });
  
  return Palacinka;
};
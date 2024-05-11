'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Narudzbina extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Palacinka, StavkaNarudzbine, Users}) {
      // define association here
      this.hasMany(StavkaNarudzbine, { foreignKey: "narudzbina_id", as: "stavke" })
      this.belongsTo(Users, { foreignKey: 'user_id' });
     
    }
  }
  Narudzbina.init({
    vreme_narucivanja: {
      type: DataTypes.DATE,
      allowNull: false
    },
    zakazano_vreme: {
       type: DataTypes.DATE,
       allowNull: false
    },
    status: DataTypes.STRING,
    adresa: {
      type: DataTypes.STRING,
      allowNull: false
    },
    telefon: {
      type: DataTypes.STRING,
      allowNull: false
    },
    ime_prezime: {
      type: DataTypes.STRING,
      allowNull: false
    },
     user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'Narudzbina',
  });
  return Narudzbina;
};
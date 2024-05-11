'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PalacinkaSastojak extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Palacinka, Sastojak}) {
      this.belongsTo(Palacinka, { foreignKey: 'palacinka_id' });
      this.belongsTo(Sastojak, { foreignKey: 'sastojak_id' });
    }
  }
  PalacinkaSastojak.init({

    palacinka_id: {
       type: DataTypes.INTEGER,
      allowNull: false
    },
    sastojak_id: {
       type: DataTypes.INTEGER,
      allowNull: false
    }
    
  }, {
    sequelize,
    modelName: 'PalacinkaSastojak',
  });
  return PalacinkaSastojak;
};
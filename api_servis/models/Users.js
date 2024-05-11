'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
      
    
    static associate({Narudzbina}) {
      // Definicija veze između korisnika i narudžbina
     this.hasMany(Narudzbina, { foreignKey: 'user_id', as: 'narudzbine' });
    }
    
  }
  Users.init({
     username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    admin: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: {
          msg: "Nije email"
        }
      }
    },
  }, {
    sequelize,
    modelName: 'Users',
  });
  return Users;
};
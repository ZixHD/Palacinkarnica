'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Narudzbinas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      vreme_narucivanja: {
        type: Sequelize.DATE,
        allowNull: false
      },
      zakazano_vreme: {
        type: Sequelize.DATE,
        allowNull: false
      },
      status: {
        type: Sequelize.STRING
      },
      adresa: {
        type: Sequelize.STRING,
        allowNull: false
      },
      telefon: {
         type: Sequelize.STRING,
        allowNull: false
      },
        ime_prezime: {
          type: Sequelize.STRING,
          allowNull: false,
      },
        user_id: { 
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Users', 
          key: 'id' 
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Narudzbinas');
  }
};
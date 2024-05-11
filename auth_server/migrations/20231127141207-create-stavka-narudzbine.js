'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('StavkaNarudzbines', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
       palacinka_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Palacinkas',
          key: 'id', 
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
       },

      narudzbina_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Narudzbinas',
          key: 'id', 
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
     },
      komada: {
        type: Sequelize.INTEGER
      },
      jedinicna_cena: {
        type: Sequelize.INTEGER,
        allowNull:false
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
    await queryInterface.dropTable('StavkaNarudzbines');
  }
};
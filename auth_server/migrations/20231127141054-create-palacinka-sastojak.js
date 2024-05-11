'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('PalacinkaSastojaks', {
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
        onDelete: 'CASCADE'
      },
      sastojak_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Sastojaks',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('PalacinkaSastojaks');
  }
};
'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Palacinkas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      naziv: {
        type: Sequelize.STRING
      },
      opis: {
        type: Sequelize.STRING
      },
      cena: {
        type: Sequelize.INTEGER
      },
       kategorija_id: {
         type: Sequelize.INTEGER,
         
      },
      palacinka_id: {
         type:Sequelize.INTEGER
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
    await queryInterface.dropTable('Palacinkas');
  }
};


'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Palacinkas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      naziv: {
        type: Sequelize.STRING(255),
      },
      opis: {
        type: Sequelize.STRING(255),
      },
      cena: {
        type: Sequelize.INTEGER,
      },
      kategorija_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Kategorijas',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        
      },
      // palacinka_id: {
      //   type: Sequelize.INTEGER,
      //   allowNull: false,
      //   references: {
      //     model: 'Palacinkas', // Replace with the actual name of the referenced table
      //     key: 'id',
      //     onDelete: 'CASCADE',
      //   },
      // },
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
    return queryInterface.dropTable('Palacinkas');
  }
};
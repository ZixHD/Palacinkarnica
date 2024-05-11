'use strict';

//const kategorija = require('../models/kategorija');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Palacinkas',
      [
        //DODAJ kategorija_id
        { id: "1", naziv: "Tiramisu", opis: "Palacinka sa kafom", cena: 380, kategorija_id: 1},
        { id: "2", naziv: "Pistaci", opis: "Palacinka sa kremom od pistaca", cena: 450, kategorija_id: 1 },
        { id: "3", naziv: "Marmelada", opis: "Palacinka sa marmeladom", cena: 480, kategorija_id: 1 }
        

         
      ]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete('Palacinkas', null, {});
  }
};

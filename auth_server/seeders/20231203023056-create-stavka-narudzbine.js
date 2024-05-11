'use strict';

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
    
    await queryInterface.bulkInsert('StavkaNarudzbines',
      [
        { id: 1, palacinka_id: 1, narudzbina_id: 1, komada: 2, jedinicna_cena: 300},
        { id: 2, palacinka_id: 2, narudzbina_id: 1, komada: 2, jedinicna_cena: 400},
        { id: 3, palacinka_id: 1, narudzbina_id: 2, komada: 1, jedinicna_cena: 280 },
        { id: 4, palacinka_id: 3, narudzbina_id: 2, komada: 1, jedinicna_cena: 480 }
      ]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

     await queryInterface.bulkDelete('StavkaNarudzbines', null, {});
  }
};

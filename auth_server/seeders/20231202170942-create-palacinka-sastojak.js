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
    
      await queryInterface.bulkInsert('PalacinkaSastojaks',
      [
        { id: 1, palacinka_id: 1, sastojak_id: 1 },
        { id: 2, palacinka_id: 2, sastojak_id: 1 },
        { id: 3, palacinka_id: 2, sastojak_id: 2 },
        { id: 4, palacinka_id: 2, sastojak_id: 3 }
      ]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

     await queryInterface.bulkDelete('PalacinkaSastojaks', null, {});
  }
};

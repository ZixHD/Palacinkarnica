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
     await queryInterface.bulkInsert('Sastojaks',
      [
        { id: 1, naziv: "Sunka" },
        { id: 2, naziv: "Kackavalj" },
        { id: 3, naziv: "Kecap" },
        { id: 4, naziv: "Masline" },
        { id: 5, naziv: "Susam" }
        
      ]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */


    await queryInterface.bulkDelete('Sastojaks', null, {});
  }
};

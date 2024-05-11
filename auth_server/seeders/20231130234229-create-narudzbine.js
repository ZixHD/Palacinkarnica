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
     await queryInterface.bulkInsert('Narudzbinas',
      [
        {
          id: 1, vreme_narucivanja: "2023-12-01T12:30:00.000Z", zakazano_vreme: "2023-12-01T14:00:00.000Z",
          status: "Nova", adresa: "Stevana Supljikca, 145", telefon: "+3811112211", ime_prezime: "Sava Savic", user_id: 1,
        },

        {
          id: 2, vreme_narucivanja: "2023-11-22T12:30:00.000Z", zakazano_vreme: "2023-11-22T14:00:00.000Z",
          status: "Prihvacena",adresa: "Mose Pijade, 112", telefon: "+3833333333", ime_prezime: "Pera Peric", user_id: 1,
        }
        

     
        
      ]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

     await queryInterface.bulkDelete('Narudzbinas', null, {});
  }
};

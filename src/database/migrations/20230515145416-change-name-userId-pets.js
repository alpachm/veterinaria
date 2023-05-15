'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   
    await queryInterface.renameColumn('Pets', 'userId', 'user_id');
     
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.renameColumn('Pets', 'user_id', 'userId');
  }
};

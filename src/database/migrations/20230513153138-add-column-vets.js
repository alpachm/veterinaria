'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.addColumn('Vets', "email", { 
        type: Sequelize.STRING,
        allowNull: false
      });

      await queryInterface.addColumn('Vets', "password", { 
        type: Sequelize.STRING,
        allowNull: false
      });
     
  },

  async down (queryInterface, Sequelize) {
      await queryInterface.removeColumn('Vets', "email");
      await queryInterface.removeColumn('Vets', "password");
     
  }
};

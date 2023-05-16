'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
      await queryInterface.changeColumn('Appointments', "pet_id", { 
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Pets",
          key: "id"
        },
        onDelete: "SET NULL",
        onUpdate: "CASCADE"
      });
     
  },

  async down (queryInterface, Sequelize) {
      await queryInterface.changeColumn('Appointments', "pet_id", { 
        type: Sequelize.INTEGER,
        allowNull: false,
      });;
  
  }
};

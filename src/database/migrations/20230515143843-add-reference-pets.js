'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.changeColumn('Pets', "userId", { 
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Users",
          key: "id"
         },
         onDelete: "SET NULL",
         onUpdate: "CASCADE"
      });
    
  },

  async down (queryInterface, Sequelize) {
      await queryInterface.changeColumn('Pets', "userId", { 
        type: Sequelize.INTEGER,
        allowNull: false,
      });;
     
  }
};

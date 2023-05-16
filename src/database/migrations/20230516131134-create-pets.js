'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Pets', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
  
      name: {
        type: Sequelize.STRING(20),
        allowNull: false,
      },
  
      birthdate: {
        type: Sequelize.DATE,
        allowNull: false,
      },
  
      genre: {
        type: Sequelize.ENUM('male', 'female'),
        defaultValue: 'male',
        allowNull: false,
      },
  
      specie: {
        type: Sequelize.STRING(40),
        allowNull: false,
      },
  
      race: {
        type: Sequelize.STRING(20),
        allowNull: false,
      },
  
      weight: {
        type: Sequelize.STRING(10),
        allowNull: false,
      },
  
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Users",
          key: "id"
        },
        onDelete: "SET NULL",
        onUpdate: "CASCADE"
      },
  
      petImgUrl: {
        type: Sequelize.STRING,
        allowNull: false,
      },
  
      status: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true,
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
    await queryInterface.dropTable('Pets');
  }
};
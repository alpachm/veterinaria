'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Exams', {
      id: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      exam: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      date: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      result: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      clinic_history_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      status: {
        type: Sequelize.ENUM('pending', 'completed'),
        allowNull: false,
        defaultValue: 'pending',
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Exams');
  },
};

// const { DataTypes } = require('sequelize');
// const { db } = require('../database/config');
// const ClinicHistory = require('./ClinicHistory');
// const Exam = db.define('exam', {
//   id: {
//     primaryKey: true,
//     allowNull: false,
//     autoIncrement: true,
//     type: DataTypes.INTEGER,
//   },
//   description: {
//     type: DataTypes.STRING,
//     allowNull: false,
//     validate: {
//       notNull: true,
//       notEmpty: true,
//     },
//   },
//   date: {
//     type: DataTypes.DATE,
//     allowNull: false,
//     validate: {
//       notNull: true,
//     },
//   },
//   result: {
//     type: DataTypes.STRING,
//     allowNull: false,
//     validate: {
//       notNull: true,
//       notEmpty: true,
//     },
//     status: {
//       type: DataTypes.ENUM('cancelled'),
//       allowNull: false,
//       defaultValue: 'cancelled',
//     },
//   },
// });
// // Exam.belongsTo(ClinicHistory);
// module.exports = Exam;

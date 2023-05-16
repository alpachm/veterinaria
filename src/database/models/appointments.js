'use strict';
const { Model, INTEGER } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Appointments extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Appointments.belongsTo(models.Pets,  {foreignKey: 'pet_id'})
      //Appointments.belongsTo(models.Vets,  {foreignKey: 'vet_id'})


    }
  }
  Appointments.init(
    {
      id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      reason: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      pet_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      vet_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'Appointments',
    }
  );
  return Appointments;
};

'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Clinic_history extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      //Clinic_histsory.hasMany(models.Pets,  {foreingkey: 'petId'});
    }
  }
  Clinic_history.init(
    {
      id: {
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
      },

      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },

      date: {
        type: DataTypes.DATE,
        allowNull: false,
      },

      petId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },

      vetId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },

      status: {
        type: DataTypes.ENUM('active', 'disabled'),
        defaultValue: 'active',
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'Clinic_history',
    }
  );
  return Clinic_history;
};

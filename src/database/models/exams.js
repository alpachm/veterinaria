'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Exams extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Exams.belongsTo(models.Clinic_history,  {foreignKey: 'clinic_history_id'})
      Exams.hasMany(models.Exams_images,  {foreignKey: 'examsId'})

    }
  }
  Exams.init(
    {
      id: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      exam: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      result: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      clinic_history_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      status: {
        type: DataTypes.ENUM('pending', 'completed'),
        allowNull: false,
        defaultValue: 'pending',
      },
    },
    {
      sequelize,
      modelName: 'Exams',
    }
  );
  return Exams;
};

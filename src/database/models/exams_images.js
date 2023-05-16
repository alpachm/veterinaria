'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Exams_images extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Exams_images.belongsTo(models.Exams,  {foreignKey: 'examsId'})

    }
  }
  Exams_images.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },

      title: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },

      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },

      url: {
        type: DataTypes.STRING(220),
        allowNull: false,
      },

      examsId: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },

      status: {
        type: DataTypes.ENUM('active', 'disabled'),
        defaultValue: 'active',
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: 'Exams_images',
    }
  );
  return Exams_images;
};

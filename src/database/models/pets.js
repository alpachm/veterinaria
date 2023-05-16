'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pets extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Pets.belongsTo(models.Users, {foreignKey: "user_id"})
      Pets.hasMany(models.Appointments,  {foreignKey: 'pet_id'})


    }
  }
  Pets.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },

    name: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },

    birthdate: {
      type: DataTypes.DATE,
      allowNull: false,
    },

    genre: {
      type: DataTypes.ENUM('male', 'female'),
      defaultValue: 'male',
      allowNull: false,
    },

    specie: {
      type: DataTypes.STRING(40),
      allowNull: false,
    },

    race: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },

    weight: {
      type: DataTypes.STRING(10),
      allowNull: false,
    },

    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    petImgUrl: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
  }, {
    sequelize,
    modelName: 'Pets',
  });
  return Pets;
};
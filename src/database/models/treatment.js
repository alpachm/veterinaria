'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Treatment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Treatment.belongsTo(models.Clinic_history,  {foreignKey: 'clinic_history_id'})

    }
  }
  Treatment.init(
    {
      id: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      init_date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      end_date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      clinic_history_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      status: {
        type: DataTypes.ENUM('active', 'disabled'),
        allowNull: false,
        defaultValue: 'active',
      },
    },
    {
      sequelize,
      modelName: 'Treatment',
    }
  );
  return Treatment;
};

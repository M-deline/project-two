const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Ingt extends Model {}

Ingt.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    drink_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'drink',
        key: 'id',
        unique: false
      }
    }


  },
  {

    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'ingt',
  }
);

module.exports = Ingt;

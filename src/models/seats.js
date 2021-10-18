'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Seats extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({vehicle}) {
      // define association here
      this.belongsTo(vehicle,{foreignKey : "vehicle_id"})
    }
  };
  Seats.init({
    name: DataTypes.STRING,
    vehicle_id: DataTypes.INTEGER,
    status: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Seats',
  });
  return Seats;
};
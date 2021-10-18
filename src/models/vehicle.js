'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class vehicle extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({passengerCarCompanies, Seats}) {
      // define association here
      this.belongsTo(passengerCarCompanies, {foreignKey : "passengerCarCompanies_id"});
      this.hasMany(Seats, {foreignKey : "vehicle_id"});
    }
  };
  vehicle.init({
    name: {
      type : DataTypes.STRING,
      allowNull : false
    },
    seaOfControl: {
      type : DataTypes.STRING,
      allowNull : false
    },
    passengerCarCompanies_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'vehicle',
  });
  return vehicle;
};
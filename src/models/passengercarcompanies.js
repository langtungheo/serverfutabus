'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class passengerCarCompanies extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Trips, vehicle, Tickets}) {
      // define association here
      this.belongsTo(Trips, {foreignKey : "trip_id"})
      this.hasMany(vehicle, {foreignKey : "passengerCarCompanies_id"})
      this.hasMany(Tickets, {foreignKey : "companies_id"})
    }
  };
  passengerCarCompanies.init({
    name: {
      type : DataTypes.STRING,
      allowNull : false
    },
    image: {
      type : DataTypes.STRING,
    },
    address: {
      type : DataTypes.STRING,
      allowNull : false
    },
    phoneNumber: {
      type : DataTypes.STRING,
      allowNull : false
    },
    description: {
      type : DataTypes.STRING,
      allowNull : false
    },
    trip_id: {
      type : DataTypes.INTEGER,
    }
  }, {
    sequelize,
    modelName: 'passengerCarCompanies',
  });
  return passengerCarCompanies;
};
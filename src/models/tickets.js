'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tickets extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Users, Trips,passengerCarCompanies}) {
      // define association here
      this.belongsTo(Users, {foreignKey : "user_id"})
      this.belongsTo(Trips, {foreignKey : "trip_id"})
      this.belongsTo(passengerCarCompanies, {foreignKey : "companies_id"})
    }
  };
  Tickets.init({
    trip_id: {
      type :DataTypes.INTEGER,
      allowNull : false
    },
    user_id: {
      type :DataTypes.INTEGER,
      allowNull : false
    },
    companies_id : {
      type :DataTypes.INTEGER,
      allowNull : false
    },
  }, {
    sequelize,
    modelName: 'Tickets',
  });
  return Tickets;
};
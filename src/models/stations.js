'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Stations extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Trips}) {
      // define association here
      this.hasMany(Trips, {foreignKey : "fromStation",as : "from"});
      this.hasMany(Trips, {foreignKey : "toStation",as : "to"});
    }
  };
  Stations.init({
    name: {
      type : DataTypes.STRING,
      allowNull : false,
      unique : true,
      validate : {
        isLength : (name) => {
          if(name.length < 5){
            return new Error("name of station > 5 char !")
          }
        }
      }
    },
    address: {
      type : DataTypes.STRING,
      allowNull : false
    },
    province: {
      type : DataTypes.STRING,
      allowNull : false
    }
  }, {
    sequelize,
    modelName: 'Stations',
  });
  return Stations;
};
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Tickets}) {
      // define association here
      this.hasMany(Tickets, {foreignKey : "user_id"})
    }
  };
  Users.init({
    name: {
      type : DataTypes.STRING,
      allowNull : false,
      validate : {
        notEmpty : true
      }
    },
    password: {
      type : DataTypes.STRING,
      allowNull : false,
    },
    email: {
      type : DataTypes.STRING,
      allowNull : false,
      unique : true,
      validate : {
        isEmail : true
      }
    },
    numberPhone: {
      type : DataTypes.STRING,
      allowNull : false,
      validate : {
        isNumeric : true,
        len : [10,10]
      }
    },
    avatar : {
      type : DataTypes.STRING,
      defaultValue : "https://picsum.photos/250/250"
    },
    type : {
      type : DataTypes.STRING,
      defaultValue : "client"
    },
  }, {
    sequelize,
    modelName: 'Users',
  });
  return Users;
};
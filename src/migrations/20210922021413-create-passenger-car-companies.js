'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('passengerCarCompanies', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull : false,
      },
      image: {
        type: Sequelize.STRING
      },
      address: {
        type: Sequelize.STRING,
        allowNull : false,
      },
      phoneNumber: {
        type: Sequelize.STRING,
        allowNull : false,
      },
      description: {
        type: Sequelize.STRING,
        allowNull : false,
      },
      trip_id: {
        type: Sequelize.INTEGER,
        references : {
          model : "Trips",
          key : "id"
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('passengerCarCompanies');
  }
};
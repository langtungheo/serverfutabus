'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Tickets', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      trip_id: {
        type: Sequelize.INTEGER,
        allowNull : false,
        allowNull : false,
        references : {
          model : "Trips",
          key : "id"
        }
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull : false,
        references : {
          model : "Users",
          key : "id"
        }
      },
      companies_id : {
        type: Sequelize.INTEGER,
        allowNull : false,
        references : {
          model : "passengerCarCompanies",
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
    await queryInterface.dropTable('Tickets');
  }
};
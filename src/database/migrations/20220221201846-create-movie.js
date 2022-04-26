'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Movies', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      directorId: {
        type: Sequelize.INTEGER,
        references : {
          model : {
            tableName : 'Directors'
          },
          key : 'id'
        }
      },
      price : {
        type : Sequelize.INTEGER
      },
      year: {
        type: Sequelize.INTEGER
      },
      image: {
        type: Sequelize.STRING
      },
      trailer: {
        type: Sequelize.STRING
      },
      length: {
        type: Sequelize.INTEGER
      },
      sinopsis: {
        type: Sequelize.TEXT
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
    await queryInterface.dropTable('Movies');
  }
};
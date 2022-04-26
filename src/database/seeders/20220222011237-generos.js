'use strict';

const generos = require('../generos.json');
const genres = generos.map(genero => {
  return {
    name: genero.name,
    createdAt: new Date(),
    updatedAt: new Date()
  }
})

module.exports = {
  up: async (queryInterface, Sequelize) => {
   
      await queryInterface.bulkInsert('Genres',genres, {});
  
  },

  down: async (queryInterface, Sequelize) => {
   
     await queryInterface.bulkDelete('Genres', null, {});
     
  }
};

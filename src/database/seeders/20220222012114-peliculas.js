'use strict';

const peliculas = require('../peliculas.json');

const getRandom = () => Math.floor(Math.random() * (5 - 1 + 1)) + 1;


const movies = peliculas.map(pelicula => {
  return {
    title: pelicula.name,
    year : pelicula.age,
    image : pelicula.image,
    trailer: pelicula.trailer,
    length : pelicula.duration,
    price : pelicula.price,
    sinopsis : pelicula.description,
    directorId : getRandom(),
    createdAt: new Date(),
    updatedAt: new Date()
  }
})

module.exports = {
  up: async (queryInterface, Sequelize) => {
   
      await queryInterface.bulkInsert('Movies',movies, {});
  
  },

  down: async (queryInterface, Sequelize) => {
   
     await queryInterface.bulkDelete('Movies', null, {});
     
  }
};

'use strict';

const directores = [
  {
    name : 'Steven',
    lastname : 'Spielberg'
  },
  {
    name : 'Juan',
    lastname : 'Pérez'
  },
  {
    name : 'Stan',
    lastname : 'Lee'
  },
  {
    name : 'Francis Ford',
    lastname : 'Copolla'
  },
  {
    name : 'Osvaldo',
    lastname : 'Granados'
  },
  
]
const directors = directores.map(director => {
  return {
    name : director.name,
    lastname : director.lastname,
    createdAt: new Date(),
    updatedAt: new Date()
  }
})


module.exports = {
  up: async (queryInterface, Sequelize) => {
   
      await queryInterface.bulkInsert('Directors',directors, {});
  
  },

  down: async (queryInterface, Sequelize) => {
   
     await queryInterface.bulkDelete('Directors', null, {});
     
  }
};

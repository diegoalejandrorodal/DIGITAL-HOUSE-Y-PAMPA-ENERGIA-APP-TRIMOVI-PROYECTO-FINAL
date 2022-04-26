'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Genre extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Genre.belongsToMany(models.Movie,{
        as : 'movies',
        otherKey : 'movieId',
        foreignKey : 'genreId',
        through : 'movie_has_genres'
      })
    }
  };
  Genre.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Genre',
    tableName: 'genres'
  });
  return Genre;
};
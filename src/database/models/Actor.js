'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Actor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Actor.belongsToMany(models.Movie,{
        as : 'actors',
        otherKey : 'movieId',
        foreignKey : 'actorId',
        through : 'actor_has_movies'
      })
    }
  };
  Actor.init({
    name: DataTypes.STRING,
    lastname: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Actor',
    tableName: 'actors'
  });
  return Actor;
};
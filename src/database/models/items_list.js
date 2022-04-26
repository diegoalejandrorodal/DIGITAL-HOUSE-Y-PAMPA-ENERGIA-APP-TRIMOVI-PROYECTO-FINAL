'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Items_List extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Items_List.init({
    Shop_CartId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Items_List',
    tableName: 'items_list'
  });
  return Items_List;
};
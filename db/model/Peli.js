const { Sequelize } = require(".");

module.exports = (sequelize, dataTypes) => {

    const alias = "Peli";

    const cols = {
        'id': {
            type:dataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },

        'title': {
            type: dataTypes.STRING(45),
            allowNull: false,
        },

        'director_id': {
            type: dataTypes.INTEGER.UNSIGNED,
            allowNull: false,
        },

        'year': {
            type: dataTypes.INTEGER.UNSIGNED,
            allowNulll: false, 
        },

        'image': {
            type: dataTypes.STRING(80),
            allowNull: true,
        },

        'trailer': {
            type: dataTypes.STRING(80),
            allowNull: true,
        },

        'length': {
            type: dataTypes.INTEGER.UNSIGNED,
            allowNull: false,
        },

        'sinopsis': {
            type: dataTypes.TEXT,
            allowNull: false,
        },

        'price': {
            type: dataTypes.INTEGER.UNSIGNED,
            allowNull: false,
        }
    }

    const config = {
        tableName: "movie",
        timestamps: false,
    }

    const Peli = sequelize.define(alias, cols, config);

    return Peli;
}
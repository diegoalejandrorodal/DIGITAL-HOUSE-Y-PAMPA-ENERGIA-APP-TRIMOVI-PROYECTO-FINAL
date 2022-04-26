
module.exports = (sequelize, dataTypes) => {
    let alias = 'Director';
    let cols = {
        id: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        
        name: {
            type: dataTypes.STRING(20),
            allowNull: false
        },
        lasname: {
            type: dataTypes.STRING(15),
            allowNull: false
        }
        
    };
       let config = {
        tableName: "Director",
        timestamps: false,
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
    const Director = sequelize.define(alias, cols, config);

    //relaciones con el modelo Movie

    Director.associate = function(models) {
        Director.hasMany(models.Movie, {
            as: "director",
            foreignKey: "movie_id",
            timestamps: false
        })
    }

    return Director;
};

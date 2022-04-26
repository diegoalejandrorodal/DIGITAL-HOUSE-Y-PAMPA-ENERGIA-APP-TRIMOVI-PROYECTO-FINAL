

module.exports = (sequelize, dataTypes) => {
    let alias = 'Genre';
    let cols = {
        id: {
            type: dataTypes.INTEGER(11).UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        
        category_name: {
            type: dataTypes.STRING(50),
            allowNull: false
        },
        
    };
       let config = {
        tableName: "genre",
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
    const Genre = sequelize.define(alias, cols, config);

    //relaciones 

    Genre.associate = function(models) {
        Genre.belongsToMany(models.Movie, {
            as: "movies",
            through: "movie",
            foreignKey: "movie_id"
        })
    }

    return Genre;
};
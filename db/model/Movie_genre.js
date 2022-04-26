module.exports = (sequelize, dataTypes) => {
    let alias = 'genresMovie';
    let cols = {
        id: {
            type: dataTypes.INTEGER(11).UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        
        genre_id: {
            type: dataTypes.INTEGER(11).UNSIGNED,
            allowNull: false
        },
        movie_id: {
            type: dataTypes.INTEGER(11).UNSIGNED,
            allowNull: false
        },
        
    };
       let config = {
        tableName: "movie_has_genre",
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
    const GenresMovie = sequelize.define(alias, cols, config);

    return GenresMovie;
}
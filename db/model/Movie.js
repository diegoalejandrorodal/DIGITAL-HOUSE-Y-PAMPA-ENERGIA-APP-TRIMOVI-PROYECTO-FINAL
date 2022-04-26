module.exports = (sequelize, dataTypes) => {//se empieza con module.exports para exportar el modelo
    let alias = 'Movie'; 
    let cols = {//se crean las columnas
        id: {
            type: dataTypes.INTEGER(11).UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
       
        title: {
            type: dataTypes.STRING(500),
            allowNull: false
        },
        director_id: {
            type: dataTypes.INTEGER(50).UNSIGNED,
            allowNull: false
        },

        year: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        image: {
            type: dataTypes.STRING(50),
            allowNull: false
        },
        trailer: {
            type: dataTypes.STRING(52),
            allowNull: false,
        },
        length: {
            type: dataTypes.INTEGER(50).UNSIGNED,
            allowNull: false
        },
        sinopsis: {
            type: dataTypes.TEXT,
            allowNull: false
        },
        price: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            allowNull: false
        },
    };
    
    let config = {
        tableName: "movie",
        // timestamps: true,
        timestamps: false,
        // createdAt: 'created_at',
        // updatedAt: 'updated_at',
        // deletedAt: false
    }
    const Movie = sequelize.define(alias,cols,config);

    //Aquí debes realizar lo necesario para crear las relaciones con los otros modelos (Genre - Actor)

    Movie.associate = function(models) {

        Movie.belongsTo(models.Director,{
            as: "director",
            foreignKey:"director_id",
        }) 

        Movie.belongsToMany(models.Genre, {
            as: "genres", /* le pertenece a uno o más generos */
            through: "movie_has_genre",
            foreignKey: "movie_id",
            otherKey: "genre_id", 
        })

        Movie.belongsToMany(models.Actor, { 
            as: "actors",
            through: "actor_has_movie", /* tabla pivot */
            foreignKey: "movie_id",
            otherKey: "actor_id", /* es la otra llave */
            timestamps: false /* si queremos que se guarde el timestamps tenemos que configurar el createdAt y el updatedAt */
        })

    }

    return Movie;
};
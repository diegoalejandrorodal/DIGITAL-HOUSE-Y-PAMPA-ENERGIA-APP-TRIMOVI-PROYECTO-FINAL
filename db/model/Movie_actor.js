module.exports = (sequelize, dataTypes) => {
    let alias = 'ActorsMovie';
    let cols = {
        id: {
            type: dataTypes.INTEGER(11).UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        
        actor_id: {
            type: dataTypes.INTEGER(11).UNSIGNED,
            allowNull: false
        },
        movie_id: {
            type: dataTypes.INTEGER(11).UNSIGNED,
            allowNull: false
        },
        
    };
       let config = {
        tableName: "actor_has_movie",
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
    const ActorsMovie = sequelize.define(alias, cols, config);

    return ActorsMovie;
};
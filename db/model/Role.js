
module.exports = (sequelize, dataTypes) => {
    let alias = 'Role';
    let cols = {
        id: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
    
        name: {
            type: dataTypes.STRING(70),
            alowNull: false,
      },
      
    };
       let config = {
        tableName: "role",
        timestamps: false,
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
    const Role = sequelize.define(alias, cols, config);

    //relaciones con el modelo Movie

    Role.associate = function(models) {
        Role.hasMany(models.User, {
            as: "users",
            foreignKey: "role_id"
        })
    }

    return Role;
};

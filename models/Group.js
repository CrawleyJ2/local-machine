const { Model, DataTypes } = require('sequelize');
const sequelize = require ('../config/connection');

class Group extends Model {}

Group.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        group_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        // user_id: {
        //     type: DataTypes.INTEGER,
        //     allowNull: false,
        //     references: {
        //         model: 'user',
        //         key: 'id'
        //     }
        // },
        // group_location: {
        //     type: DataTypes.STRING,
        //     allowNull: false,
        //     references: {
        //         model: 'user',
        //         key: 'location'
        //     }
        // }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'group'
    }
);

module.exports = Group;
const { Model, DataTypes } = require('sequelize');
const sequelize = require ('../config/connection');

class Location extends Model {}

Location.init (
    {
        id: {
            type: DataTypes.INTEGER,
        }
    },
    {
        location_name: {
            type: DataTypes.STRING,
            allownull: false,
            unique: true
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'comment'
    }
);

module.exports = Location;
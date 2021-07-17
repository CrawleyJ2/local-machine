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
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'comment'
    }
);

module.exports = Location;
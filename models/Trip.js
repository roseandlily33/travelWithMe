const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Trip extends Model {};

Trip.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        }, 
        trip_budget: {
            type: DataTypes.DECIMAL,
            allowNull: true,
        },
        traveller_amount: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 1,
        },
        traveller_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'traveller',
                key: 'id'
            }
        },
        location_id: {
            type: DataTypes.INTEGER,
            references:{
                model: 'location',
                key: 'id',
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        modelName: 'trip',
        underscored: true,
    }
)

module.exports = Trip;
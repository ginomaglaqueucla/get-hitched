const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class GuestList extends Model {}

GuestList.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
              model: 'user',
              key: 'id'
            }
        },
        rsvp: {
            type: DataTypes.BOOLEAN,
            allowNull: true
        },
        food_choice: {
            type: DataTypes.STRING,
            allowNull: true
        },
        plus_one: {
            type: DataTypes.BOOLEAN,
            allowNull: true
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'guestlist'
    }
);

module.exports = GuestList;
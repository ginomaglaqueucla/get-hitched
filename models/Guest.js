const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Guest extends Model {}

Guest.init(
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
        wedding_id: {
            type: DataTypes.INTEGER,
            references: {
              model: 'wedding',
              key: 'id'
            }
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'guest'
    }
);

module.exports = Guest;
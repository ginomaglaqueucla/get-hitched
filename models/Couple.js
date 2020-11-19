const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Couple extends Model {}

console.log('couple');
Couple.init(
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
        partner1_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        partner2_name: {
            type: DataTypes.STRING,
            allowNull:false
        },
        wedding_id: {
            type: DataTypes.INTEGER,
            references: {
              model: 'wedding',
              key: 'id'
            }
        },
        is_couple: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'couple'
    }

);

module.exports = Couple;
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Couple extends Model {}

Couple.init(
    {
        // id: {

        // },
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
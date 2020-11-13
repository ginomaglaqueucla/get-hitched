const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Couple extends Model {}
console.log('couple');
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
        //hooks for passwords will go here
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'couple'
    }

);

module.exports = Couple;
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Wedding extends Model {}


Wedding.init(
  {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    wedding_date: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [5]
        }
    },
    wedding_location: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
            len: [5]
        }
    },
    wedding_hashtag: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true, //this will make it unique in the database and keep it from being used twice, needs to be pre queries and have error 
        validate: {
            len: [5]
        }
    },
    wedding_details: {
        type: DataTypes.TEXT,
        allowNull: true
    }
  },
  {
      sequelize,
      freezeTableName: true,
      underscored: true,
      modelName: 'wedding'
  }
);

module.exports = Wedding;

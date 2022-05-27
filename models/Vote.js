const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Vote extends Model {}


Vote.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primary: true,
      autoIncrement: true
    },
    user_id: { // 4638
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'user',
        key: 'id'
      }
    },
    post_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'post',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    timestamps: false, 
    freezeTableName: true,
    underscore: true,
    modelName: 'vote'
  }
);

module.exports = Vote;
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create Post model
class Post extends Model {}

// create fields/columns for post model
Post.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    title: { // name of the post
      type: DataTypes.STRING,
      allowNull: false
    },
    post_url: { // validates that there's a valid url link
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isURL: true
      }
    },
    user_id: { // creates an association w/ who made the post
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id'
      }
    }
  },
  {
    // configure metadata 
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'post'
  }
);

module.exports = Post;
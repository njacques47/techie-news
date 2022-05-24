const User = require('./User');
const Post = require('./Post');

// create associations
User.hasMany(Post, { // saying that a user can make many posts
  foreignKey: 'user_id'
});

Post.belongsTo(User, { // a single post can only have one author
  foreignKey: 'user_id',
});

module.exports = { User, Post };
// module 13.3.5
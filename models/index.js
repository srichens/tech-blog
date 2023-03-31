const User = require('./User');
const Blogpost = require('./Blogpost');
const Comment = require('./Comment');

Comment.belongsTo(User, {
  foreignKey: 'user_id',
});

Comment.belongsTo(Blogpost, {
  foreignKey: 'blogpost_id',
  onDelete: 'CASCADE',
});

User.hasMany(Comment, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
  
});

User.hasMany(Blogpost, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

Blogpost.hasMany(Comment, {
  foreignKey: 'blogpost_id',
  onDelete: 'CASCADE',  
});

Blogpost.belongsTo(User, {
  foreignKey: 'user_id'
});


module.exports = { User, Blogpost, Comment, };

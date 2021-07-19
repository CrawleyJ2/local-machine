const User = require ('./User');
const Post = require ('./Post');
const Group = require ('./Group');
const Comment = require ('./Comment');
const Location = require ('./Location');

// Model relationships

// User belongs to one location
User.belongsTo(Location, {
    foreignKey: 'location_id',
})
// Location can have many users
Location.hasMany(User, {

})
// Location can have many groups
Location.hasMany(Group, {

})
// User has many posts
User.hasMany(Post, {
    foreignKey: 'user_id'
});
// Posts belongs to User
Post.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});
// User belongs to post through comments
User.belongsToMany(Post, {
    through: Comment,
    foreignKey: 'user_id'
})
// User belongs to group(s)
User.belongsToMany(Group, {
    
})
// User has many Comments
User.hasMany(Comment, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});
// Post has many Comments
Post.hasMany(Comment, {
    foreignKey: 'post_id'
  });
// Group has many posts
Group.hasMany(Post, {

})
module.exports = { User, Post, Group, Comment, Location };
const User = require ('./User');
const Post = require ('./Post');
const Group = require ('./Group');
const Comment = require ('./Comment');

// Model associations

// User has many groups

// User belongs to many groups

// User has many posts
User.hasMany(Post, {
    foreignKey: 'user_id'
});
// User belongs to many post through comments
User.belongsToMany(Post, {
    through: Comment,
    as: 'commented_posts',
    foreignKey: 'user_id'
});
// User has many comments
User.hasMany(Comment, {
    foreignKey: 'user_id'
});
// Group belongs to user
Group.belongsTo(User, {
    foreignKey: 'user_id'
});
// Group has many posts

// Group has many comments

// Post belongs to user 
Post.belongsTo(User, {
    foreignKey: 'user_id'
});
// Post has many comments
Post.hasMany(Comment, {
    foreignKey: 'post_id'
});
// Post belong to many user through comments
Post.belongsToMany(User, {
    through: Comment,
    as: 'commented_posts',
    foreignKey: 'post_id'
});
// Comment belongs to user 
Comment.belongsTo(User, {
    foreignKey: 'user_id'
});
// Comment belongs to post
Comment.belongsTo(Post, {
    foreignKey: 'post_id'
});
// Comment belongs to group 


module.exports = { User, Post, Group, Comment };
const User = require ('./User');
const Post = require ('./Post');
const Group = require ('./Group');
const Comment = require ('./Comment');
const Location = require ('./Location');

// Model relationships

// User belongs to one location

// Location can have many users

// Location can have many groups

// User has many posts

// Posts belongs to User

// User belongs to post through comments

// User belongs to group(s)

// User has many Comments

// Post has many Comments

// Group has many posts

module.exports = { User, Post, Group, Comment, Location };
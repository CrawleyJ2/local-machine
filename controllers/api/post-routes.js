const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Post, User, Comment, Group } = require('../../models');
//const withAuth = require('../../utils/auth');

// get all posts
router.get('/', (req, res) => {
    Post.findAll({
    attributes: ['id', 'title', 'content', 'created_at'],
    include: [
        {
            model: User,
            attributes: ['username']
        }
    ],
    })
    .then((dbPostData) => res.json(dbPostData))
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});

// get a single post
router.get("/:id", (req, res) => {
    Post.findOne({
    where: {
        id: req.params.id,
    },
    attributes: ["id", "title", "username", "group_id"],
    include: [
        {
            model: User,
            attributes: ["username"]
        }
    ]
    })

    .then((dbPostData) => {
        if (!dbPostData) {
        res.status(404).json({ message: "No post found with this id" });
        return;
        }
        res.json(dbPostData);
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});

// create a Post
router.post("/", (req, res) => {
    Post.create({
    title: req.body.title,
    content: req.body.content,
    user_id: req.body.user_id,
    group_id: req.body.group_id
    })
    .then((dbPostData) => res.json(dbPostData))
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});


// update post
router.put("/:id", (req, res) => {
    Post.update(
    {
        title: req.body.title,
        content: req.body.content,
    },
    {
        where: {
        id: req.params.id,
        },
    }
    )
    .then((dbPostData) => {
        if (!dbPostData) {
        res.status(404).json({ message: "No post found with this id" });
        return;
        }
        res.json(dbPostData);
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});

// delete post
router.delete("/:id", (req, res) => {
    Post.destroy({
    where: {
        id: req.params.id,
    },
    })
    .then((dbPostData) => {
        if (!dbPostData) {
        res.status(404).json({ message: "No post found with this id" });
        return;
        }
        res.json(dbPostData);
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;

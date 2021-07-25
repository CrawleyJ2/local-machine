const { Post, User, Comment } = require('../models');

const router = require('express').Router();

router.get('/', (req, res) => {
  console.log(req.session);
  res.render('login');
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('login');
});

router.get('/dashboard/account-settings', (req, res) => {
  res.render('account-settings');
});

router.get('/post/:id', (req, res) => {
  Post.findOne({
    where: {
      id: req.params.id
    },
    attributes: [
    'id',
    'title',
    'content',
    'created_at' 
    ],
    include: [
      {
        model: Comment,
        attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
        include: {
          model: User,
          attributes: ['username']
        }
      },
      {
        model: User,
        attributes: ['username']
      }
    ]
  })
  .then(dbPostData => {
    if (!dbPostData) {
      res.status(404).json({ message: 'No post with this ID found'});
      return;
    }
    const post = dbPostData.get({ plain: true });
    res.render('single-post', { post });
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});
module.exports = router;
const router = require('express').Router();
const { Comment } = require('../../models');
const  = require();
router.get('/', (req, res) => {
    Comment.findAll({})
        .then(=> res.json())
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
});

router.get('/:id', (req, res) =>
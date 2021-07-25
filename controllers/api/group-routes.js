const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Group, User, Comment } = require('../../models');

router.get('/', (req, res) => {
    Group.findAll({
        attributes: [
            'id',
            'group_name',
        ],
        // include: [
        //     {
        //         model: Comment,
        //         attributes: ['id', 'comment_text', 'post_id', 'user_id'],
        //         include: {
        //             model: User,
        //             attributes: ['username']
        //         }
        //     },
        //     {
        //         model: User,
        //         attributes: ['username']
        //     }
        // ]
    })
    .then(dbGroupData => res.json(dbGroupData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
    Group.findOne({
        where: {
            id: req.params.id
        }
    })
    .then(dbGroupData => {
        if (!dbGroupData) {
            res.status(404).json({ message: 'No group found by this id'});
            return;
        }
        res.json(dbGroupData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.post('/', (req,res) => {
    Group.create({
        group_name: req.body.group_name,
        user_id: req.session.user_id
    })
    .then(dbGroupData => res.json(dbGroupData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.put('/:id', (req, res) =>{
    Group.update(
        {
            group_name: req.body.group_name
        },
        {
            where: {
                id: req.params.id
            }
        }
    )
    .then(dbGroupData => {
        if (!dbGroupData) {
            res.status(404).json({ message: 'No group found with this ID' });
            return;
        }
        res.json(dbGroupData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.delete('/:id', (req, res) => {
    console.log('id', req.params.id);
    Group.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(dbGroupData => {
        if (!dbGroupData) {
            res.status(404).json({ message: 'No group found with this ID' });
            return;
        }
        res.json(dbGroupData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;
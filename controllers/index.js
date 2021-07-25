const router = require('express').Router();

const apiRoutes = require('./api/');
const postRoutes = require('./api/post-routes');
const homeRoutes = require('./home-routes.js');
const dashboardRoutes = require('./dashboard-routes.js');

router.use('/', homeRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/api', apiRoutes);
router.use('/', postRoutes);

module.exports = router;
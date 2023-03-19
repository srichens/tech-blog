const router = require('express').Router();
const userRoutes = require('./userRoutes');
const commentRoutes = require('./commentRoutes');
const updateRoutes = require('./updateRoutes');

router.use('/users', userRoutes);
router.use('/comments', commentRoutes);
router.use('/updates', updateRoutes);

module.exports = router;

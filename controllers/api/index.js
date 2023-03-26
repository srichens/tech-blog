const router = require('express').Router();
const userRoutes = require('./userRoutes');
const blogpostRoutes = require('./blogpostRoutes');
// const updateRoutes = require('./updateRoutes');


router.use('/users', userRoutes);
router.use('/blogposts', blogpostRoutes);
// router.use('/updates', updateRoutes);


module.exports = router;

const router = require('express').Router();
const drinkRoutes = require('./drinkRoutes');
const userRoutes = require('./userRoutes');

router.use('/drink', drinkRoutes);
router.use('/users', userRoutes);

module.exports = router;
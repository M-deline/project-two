const router = require('express').Router();
const drinkRoutes = require('./drinkRoutes');
const userRoutes = require('./userRoutes');
const ingtRoutes = require('./ingtRoutes');

router.use('/drink', drinkRoutes);
router.use('/users', userRoutes);
router.use('/ingt', ingtRoutes);

module.exports = router;
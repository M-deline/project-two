const router = require('express').Router();
const drinkRoutes = require('./drinkRoutes');
const userRoutes = require('./userRoutes');

router.use('/drink', drinkRoutes);
router.use('/login', userRoutes);

module.exports = router;
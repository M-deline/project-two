const router = require('express').Router();
const drinkRoutes = require('./drinkRoutes');

router.use('/drink', drinkRoutes);

module.exports = router;
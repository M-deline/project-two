const router = require('express').Router();
const { Drink } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/saveddrinks', withAuth, async (req, res) => {
  try {
    const newDrink = await Drink.create(req.body);
    console.log(newDrink);
    res.status(200).json(newDrink);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
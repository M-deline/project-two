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

router.delete('/saveddrinks', async (req, res) => {
  try {
    const drinkData = await Drink.destroy({
      where: {
        id: req.params.id,
     
      },
    });

    if (!drinkData) {
      res.status(404).json({ message: 'No drinkfound with this id!' });
      return;
    }

    res.status(200).json(drinkData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
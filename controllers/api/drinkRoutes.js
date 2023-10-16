const router = require('express').Router();
const { Drink, Ingt } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/saveddrinks', withAuth, async (req, res) => {
  try {
    const newDrink = await Drink.create(req.body);
    res.status(200).json(newDrink);

    console.log('drink check')


  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/', async (req, res) => {
  try {
    const newIngt = await Ingt.create(req.body);
    res.status(200).json(newIngt);

    console.log('ingred check')

  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/saveddrinks/:id', async (req, res) => {
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
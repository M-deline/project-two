const router = require('express').Router();
const { Drink } = require('../models');


router.get('/', async (req, res) => {
  try {


    res.render('homepage');
  } catch (error) {
    console.error(error);
  }
});

router.get('/login', async (req, res) => {
  try {


    res.render('login');
  } catch (error) {
    console.error(error);
  }
});

const url = 'https://the-cocktail-db.p.rapidapi.com/random.php';
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '57a746aabcmsh658867c83d6065ap1700c3jsn4f3fcf862c0f',
    'X-RapidAPI-Host': 'the-cocktail-db.p.rapidapi.com'
  }
};

router.get('/drink', async (req, res) => {
  try {
    const response = await fetch(url, options);
    const result = await response.json();
    const objs = [{name: result.drinks[0].strDrink, steps: result.drinks[0].strInstructions}];



    res.render('drink', { objs });
  } catch (error) {
    console.error(error);
  }
});

router.get('/saveddrinks', async (req, res) => {
  try {
    // Get all drinks, sorted by name
    const drinkData = await Drink.findAll({
   
    });

    // Serialize user data so templates can read it
    const drinks = drinkData.map((drink) => drink.get({ plain: true }));

    // Pass serialized data into Handlebars.js template
    res.render('saveddrinks', { drinks });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
const router = require('express').Router();
const { Drink } = require('../models');


router.get('/', async (req, res) => {
  try {


    res.render('homepage');
  } catch (error) {
    console.error(error);
  }
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/saveddrinks');
    return;
  }

  res.render('login');
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
    const measurements = [result.drinks[0].strMeasure1, result.drinks[0].strMeasure2, result.drinks[0].strMeasure3, result.drinks[0].strMeasure4, result.drinks[0].strMeasure5, result.drinks[0].strMeasure6,result.drinks[0].strMeasure7,result.drinks[0].strMeasure8, result.drinks[0].strMeasure9, result.drinks[0].strMeasure10, result.drinks[0].strMeasure11, result.drinks[0].strMeasure12, result.drinks[0].strMeasure13, result.drinks[0].strMeasure14, result.drinks[0].strMeasure15];
    
    const ingedients = [result.drinks[0].strIngredient1, result.drinks[0].strIngredient2, result.drinks[0].strIngredient3, result.drinks[0].strIngredient4, result.drinks[0].strIngredient5, result.drinks[0].strIngredient6, result.drinks[0].strIngredient7, result.drinks[0].strIngredient8, result.drinks[0].strIngredient9, result.drinks[0].strIngredient10, result.drinks[0].strIngredient11, result.drinks[0].strIngredient12, result.drinks[0].strIngredient13, result.drinks[0].strIngredient14, result.drinks[0].strIngredient15]

    measIng = [];

    for (let i=0; i< measurements.length; i++) {
      if (measurements[i] !== null) {
        measIng.push( [measurements[i], ingedients[i]].join(""))
      }
    }

    const objs = [{name: result.drinks[0].strDrink, steps: result.drinks[0].strInstructions, ing: measIng, image: result.drinks[0].strDrinkThumb}];



    res.render('drink', { objs });
  } catch (error) {
    console.error(error);
  }
});

router.get('/saveddrinks', async (req, res) => {

  if (req.session.logged_in) {

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
  } else {
    res.redirect('/login');
    return;
  }

});

router.get('/saveddrinks/:id', async (req, res) => {
  try {
    const drinkData = await Drink.findByPk(req.params.id);
 

    const drink = drinkData.get({ plain: true });
    
    const ingArray = drink.ingredient.split(",");

    

    res.render('recipe', {
      ...drink,
      ingArray
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
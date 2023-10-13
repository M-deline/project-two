const router = require('express').Router();
const { Ingt } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/saveddrinks/:id', withAuth, async (req, res) => {
    try {

        const newIngredient = await Ingt.create(req.body);
        res.status(200).json(newIngredient);
        
  
    } catch (err) {
      res.status(400).json(err);
    }
  });


module.exports = router;
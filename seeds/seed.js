const sequelize = require('../config/connection');
const { Drink } = require('../models');

const drinkData = require('./drinkData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  for (const drink of drinkData) {

    await Drink.create({
      ...drink,
    });
  }

  process.exit(0);
};

seedDatabase();

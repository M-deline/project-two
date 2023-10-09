const sequelize = require('../config/connection');
const { User, Drink } = require('../models');

const userData = require('./userData.json');
const drinkData = require('./drinkData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const drink of drinkData) {

    await Drink.create({
      ...drink,
    });
  }

  process.exit(0);
};

seedDatabase();

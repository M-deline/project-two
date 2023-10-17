const User = require('./User');
const Drink = require('./Drink');

User.hasMany(Drink, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
  });
  
  Drink.belongsTo(User, {
    foreignKey: 'user_id'
  });

module.exports = { User, Drink};

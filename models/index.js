const User = require('./User');
const Drink = require('./Drink');
const Ingt = require('./Ingt');

Ingt.belongsTo(Drink, {
    foreignKey: 'drink_id',
});

Drink.hasMany(Ingt, {
    foreignKey: 'drink_id',
    onDelete: 'CASCADE',
});

module.exports = { User, Drink, Ingt};

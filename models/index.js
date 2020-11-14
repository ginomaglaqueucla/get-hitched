const Couple = require('./Couple');
const User = require('./User');
const Wedding = require('./Wedding');
const GuestList = require('./GuestList');

User.hasMany(Couple, {
    foreignKey: 'user_id'
});
  
Couple.belongsTo(User, {
    foreignKey: 'user_id'
});

User.belongsToMany(Wedding, {
    through: GuestList,
    foreignKey: 'user_id'
});
  
Wedding.belongsToMany(User, {
    through: GuestList,
    foreignKey: 'user_id'
});

Wedding.hasMany(Couple, {
    foreignKey: 'wedding_id'
});
  
Couple.belongsTo(Wedding, {
    foreignKey: 'wedding_id'
});

module.exports = {
    Couple,
    User,
    Wedding,
    GuestList
};
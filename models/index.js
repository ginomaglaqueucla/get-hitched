const Couple = require('./Couple');
const Guest = require('./Guest');
const User = require('./User');
const Wedding = require('./Wedding');
const GuestList = require('./GuestList');


User.hasMany(Guest, {
    foreignKey: 'user_id'
  });
  
Guest.belongsTo(User, {
    foreignKey: 'user_id'
});

User.hasMany(Couple, {
    foreignKey: 'user_id'
  });
  
Couple.belongsTo(User, {
    foreignKey: 'user_id'
});

Guest.hasMany(Guest, {
    foreignKey: 'user_id'
});
  
Guest.belongsTo(User, {
    foreignKey: 'user_id'
});

GuestList.hasMany(Wedding, {
    foreignKey: 'guest_list_id'
});
  
Wedding.belongsTo(GuestList, {
    foreignKey: 'guest_list_id'
});

Wedding.hasMany(Couple, {
    foreignKey: 'wedding_id'
});
  
Couple.belongsTo(Wedding, {
    foreignKey: 'wedding_id'
});

module.exports = {
    Couple,
    Guest,
    User,
    Wedding,
    GuestList
};
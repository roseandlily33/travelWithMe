const Location = require('../models/Location');
const Trip = require('../models/Trip');
const Traveller = require('../models/Traveller');

Traveller.belongsToMany(Location, {

  through: {
    model: Trip,
    unique: false
  },
  as: 'planned_trips'
});

Location.belongsToMany(Traveller, {
  through: {
    model: Trip,
    unique: false
  },
  as: 'location_travellers'
});

module.exports = { Traveller, Location, Trip };

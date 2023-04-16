const sequelize = require('../config/connection');
const { Traveller, Location, Trip } = require('../models');

const travellerSeedData = require('./travellersData.json');
const locationSeedData = require('./locationData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const travellers = await Traveller.bulkCreate(travellerSeedData);
  const locations = await Location.bulkCreate(locationSeedData);

  for (let i = 0; i < 10; i++) {
    const { id: randomTravellerId } = travellers[
      Math.floor(Math.random() * travellers.length)
    ];
    const { id: randomLocationId } = locations[
      Math.floor(Math.random() * locations.length)
    ];
    await Trip.create({
      trip_budget: (Math.random() * 10000 + 1000).toFixed(2),
      traveller_amount: Math.floor(Math.random() * 10) + 1,
      traveller_id: randomTravellerId,
      location_id: randomLocationId,
    }).catch((err) => {
      console.log(err);
    });
  }
  process.exit(0);
};

seedDatabase();

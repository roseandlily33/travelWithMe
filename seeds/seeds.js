const sequelize = require('../config/connection');
const { Traveller, Trip, Location } = require('../models');

const travellerData = require('./travellersData.json');
const locationData = require('./locationData.json');

const seedDatabase = async() => {
    try{
    await sequelize.sync({force: true});
    const travellers = await Traveller.bulkCreate(travellerData);
    const locations = await Location.bulkCreate(locationData);

    for(let i = 0; i < 10; i++){
        const {id: travellerId} = travellers [
            Math.floor(Math.random() * travellers.length)
        ];
        const {id: locationId} = locations[
            Math.floor(Math.random() * locations.length)
        ];
        await Trip.create({
            trip_budget: Math.random() * 10000 + 100,
            traveller_amount: Math.floor(Math.random()*8)+1,
            traveller_id: travellerId,
            location_id: locationId,
        })
        
    }} catch(err){
        console.log(err);
    }
    process.exit(0);
}
seedDatabase();
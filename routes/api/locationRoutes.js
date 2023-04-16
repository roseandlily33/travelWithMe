const router = require('express').Router();
const { create } = require('lodash');
const {Location, Traveller, Trip} = require('../../models');

router.get('/', async (req, res) => {
    try{
        const allLocations = await Location.findAll();
        res.status(200).json(allLocations);
    } catch(err){
        res.status(500).json(err)
    }
});

router.get('/:id', async (req, res) => {
    try{
        const singleTrip = await Location.findByPk(req.params.id);
        if(!singleTrip){
            res.status(404).json({message: "No trip found"});
        }
        res.status(200).json(singleTrip);
    } catch(err) {
        res.status(500).json(err);
    }
})

router.post('/', async (req,res) => {
    try{
        const createLocation = await Location.create(req.body);
        res.status(200).json(createLocation);

    } catch(err){
        res.status(500).json(err);
    }
})

router.delete('/:id', async (req, res) => {
    try{
        const delLocation = await Location.destroy({
            where: {
                id: req.params.id
            }
        })
        res.status(200).json(delLocation);

    } catch(err){
        res.status(500).json(err);
    }
})

module.exports = router;
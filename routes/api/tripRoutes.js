const router = require('express').Router();
const {Location, Trip, Traveller } = require('../../models');

router.get('/', async(req, res) => {
    try{
        const allTrips = await Trip.findAll();
        res.status(200).json(allTrips);
    } catch(err){
        res.status(500).json(500);
    }
})
router.get('/:id', async (req, res) => {
    try{
        const certainTrip = await Trip.findByPk(req.params.id);
        if(!certainTrip){
            res.status(404).json({message: 'Trip not found'});
        }
        res.status(200).json(certainTrip);

    } catch(err){
        res.status(500).json(err)
    }
})

router.post('/', async(req, res) => {
    try{
        const postTrip = await Trip.create(req.body);
        res.status(200).json(postTrip);

    } catch(err){
        res.status(500).json(err);
    }
})

router.delete('/:id', async (req, res) => {
    try{
        const delTrip = await Trip.destroy({
            where: {
                id: req.params.id
            }
        })
        if(!delTrip){
            res.status(404).json({message: 'Trip not found'});
        }
        res.status(200).json(delTrip);

    } catch(err){
        res.status(500).json(err);
    }
})

module.exports = router;
const router = require('express').Router();
const {Traveller, Trip, Location } = require('../../models');

router.get('/', async (req, res) => {
    try{
        const allTravellers = await Traveller.findAll();
        res.status(200).json(allTravellers);
    } catch(err){
        res.status(500).json(err)
    }
})

router.get('/:id', async(req,res) => {
    try{
        const myTrip = await Traveller.findByPk(req.params.id);
        res.status(200).json(myTrip);

    } catch(err) {
        res.status(500).json(err)
    }
})

router.post('/', async (req, res) => {
    try{
        const newTraveller = await Traveller.create(req.body);
        res.status(200).json(newTraveller);

    } catch(err) {
        res.status(500).json(err)
    }
})

router.delete('/:id', async(req,res) => {
    try{
        const delTraveller = await Traveller.destroy({
            where: {
                id: req.params.id
            }
        })
        if(!delTraveller){
            res.status(404).json({message: 'Traveller not found'});
        }
        res.status(200).json(delTraveller)

    } catch(err){
        res.status(500).json(err);
    }
})

module.exports = router;
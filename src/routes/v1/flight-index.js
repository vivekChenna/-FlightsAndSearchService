const express = require('express');

const router = express.Router();


const {FlightController} = require('../../controllers/index');

const {FlightMiddleware} = require('../../middlewares/index');



router.post('/flights',FlightMiddleware.validateCreateFlight,FlightController.create);

router.get('/flights',FlightController.getAll);


module.exports = router;
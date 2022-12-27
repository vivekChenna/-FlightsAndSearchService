const express = require('express');

const router = express.Router();

const AirportController = require('../../controllers/airport-controller');


router.post('/airports',AirportController.create);


module.exports = router;

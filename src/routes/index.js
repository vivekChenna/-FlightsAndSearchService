const express = require('express');

const router = express.Router();

const v1apiRoutes = require('./v1/city-index');
const v1Airport = require('./v1/airport-index');

const v1Flights = require('./v1/flight-index');

router.use('/v1',v1apiRoutes);

router.use('/v1',v1Airport);

router.use('/v1',v1Flights);

module.exports = router;


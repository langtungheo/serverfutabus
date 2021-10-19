const express = require('express');
const { getAllTrips, getTripsPopular, createTrip, updateTrip, getDetailTrip, deleteTrip } = require('../controllers/trips.controller');
const { authentice } = require('../middleware/ath/authentice');
const { authorize } = require('../middleware/ath/authorize');
const { checkIdMiddleware } = require('../middleware/checkid/checkid.middleware');
const {Trips} = require('../models');
const { arrAdmin } = require('../utils/globalconstant');
const tripRouter = express.Router();

tripRouter.get("/gettrippopular", getTripsPopular);
tripRouter.delete("/:id", authentice, authorize(arrAdmin), checkIdMiddleware(Trips, "trip"), deleteTrip)
tripRouter.put("/:id", authentice, checkIdMiddleware(Trips, "Trip"),updateTrip);
tripRouter.get("/:id", checkIdMiddleware(Trips, "trip"),getDetailTrip);
tripRouter.get("/", getAllTrips);
tripRouter.post("/", authentice,createTrip);

module.exports = {
    tripRouter
}
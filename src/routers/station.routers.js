const express = require('express');
const { createStation, getAllStation, getDetailStation,updateStation ,deleteStation} = require('../controllers/station.controllers');
const { authentice } = require('../middleware/ath/authentice');
const { authorize } = require('../middleware/ath/authorize');
const { checkIdMiddleware } = require('../middleware/checkid/checkid.middleware');
const { arrAdmin } = require('../utils/globalconstant');
const {Stations} = require('../models')

const stationRouter = express.Router();

stationRouter.post("/", authentice, authorize(arrAdmin), createStation);
stationRouter.get("/", getAllStation);
stationRouter.get("/:id", getDetailStation)
stationRouter.put("/:id", checkIdMiddleware(Stations, "station"), updateStation)
stationRouter.delete("/:id", authentice, authorize(arrAdmin), checkIdMiddleware(Stations, "station"), deleteStation)



module.exports = {
    stationRouter
}
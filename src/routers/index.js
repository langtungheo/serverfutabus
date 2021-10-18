const express = require('express');
const { homeRouter } = require('./home.router');
const { passengerCompaniesRouter } = require('./passengercompanies.router');
const {stationRouter} = require("./station.routers");
const { tripRouter } = require('./trips.router');
const { userRouter } = require('./user.routers');
const router = express.Router();

router.use("/stations", stationRouter);
router.use("/users", userRouter);
router.use("/trips", tripRouter)
router.use("/companies", passengerCompaniesRouter)
router.use("/", homeRouter)

module.exports = {
    router,
}

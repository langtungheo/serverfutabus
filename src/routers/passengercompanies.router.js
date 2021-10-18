const express = require('express');
const { authentice } = require('../middleware/ath/authentice');
const { authorize } = require('../middleware/ath/authorize');
const { getAllCompanies, createCarCompanies } = require('../controllers/passengercompanies.controller');
const { arrAdmin } = require('../utils/globalconstant');
const passengerCompaniesRouter = express.Router();

passengerCompaniesRouter.get("/", getAllCompanies)
passengerCompaniesRouter.post("/",authentice, authorize(arrAdmin),createCarCompanies)

module.exports = {
    passengerCompaniesRouter
}
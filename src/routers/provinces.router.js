const express = require('express')
const { getProvincesPopular } = require('../controllers/provinces.controller')
const provinceRouter = express.Router()

provinceRouter.get("/", getProvincesPopular)

module.exports = {
    provinceRouter
}
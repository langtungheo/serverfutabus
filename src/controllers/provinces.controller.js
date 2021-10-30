const provincesPopular = require('../data/provincepopular.json')

const getProvincesPopular = (req, res) => {
    res.status(200).send(provincesPopular)
}

module.exports = {
    getProvincesPopular
}
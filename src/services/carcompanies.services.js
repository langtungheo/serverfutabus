const {passengerCarCompanies} = require('../models')

const createCompaniesByUser = async (data) => {
    try {
        const companies = await passengerCarCompanies.create(data);
        if(companies){
            return companies
        }
        else{
            return false
        }
    } catch (error) {
        return error
    }
}

module.exports = {
    createCompaniesByUser
}
const { createCompaniesByUser } = require("../services/carcompanies.services");

const getAllCompanies = async (req, res) => {
    res.send("get All Companies")
}

const createCarCompanies = async (req, res) => {
    const data  = req.body;
    const companies = await createCompaniesByUser(data);
    if(companies){
        res.status(201).send("create companies successfully !")
    }
    else{
        res.status(500).send("fail !")
    }
}

module.exports = {
    getAllCompanies,
    createCarCompanies
}
const { Trips, Stations } = require("../models")

const createTripByUser = async (data) => {
    try {
        const trip = Trips.create(data);
        if (trip) {
            return trip
        }
        else {
            return false
        }
    } catch (error) {
        return error
    }
}

const getAllTripsSv = async () => {
    try {
        const trips = await Trips.findAll({
            include : [
                {
                    model : Stations,
                    as : "from"
                },
                {
                    model : Stations,
                    as : "to"
                }
            ]
        })
        if(trips){
            return trips
        }
        else{
            return false
        }
    } catch (error) {
        return error
    }
}

const updateTripByUser = async (data, id) => {
    try {
        const tripUpdate = await Trips.update(data, {
            where : {
                id :id
            }
        })
        if(tripUpdate){
            return true
        }
        else{
            return false
        }
    } catch (error) {
        return error
    }
}

const deleteTripByUser = async (id) => {
    try {
        const result = await Trips.destroy({
            where :{
                id : id
            }
        })
        if(result){
            return true
        }
        else{
            return false
        }
    } catch (error) {
        return error
    }
}

const getDetailTripByClient = async (id) => {
    try {
        const trip = await Trips.findOne({
            where : {
                id : id
            },
            include : [
                {
                    model : Stations,
                    as : "from"
                },
                {
                    model : Stations,
                    as : "to"
                }
            ]
        })
        return trip;        
    } catch (error) {
        return error
    }
}

module.exports = {
    createTripByUser,
    getAllTripsSv,
    updateTripByUser,
    deleteTripByUser,
    getDetailTripByClient
}
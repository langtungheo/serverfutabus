const { createTripByUser, getAllTripsSv, updateTripByUser, getDetailTripByClient, deleteTripByUser } = require("../services/trip.sevices");
const schedules = require('../data/scheduleRoute.json')
const {removeVietnameseTones} = require("../utils/removeVietnamesTones")

const getAllTrips =  (req, res) => {
    const {schedule, toschedule} = req.query
    if(schedule || schedule == ''){
        const data = schedules.filter(item => removeVietnameseTones(item.OriginName).includes(removeVietnameseTones(schedule)) && item.TotalSchedule > 0)
        res.send(data)
    }
    else if(toschedule || toschedule === ''){
        const data = schedules.filter(item => removeVietnameseTones(item.DestName).includes(removeVietnameseTones(toschedule)) && item.TotalSchedule > 0)
        res.send(data)
    }
}



const createTrip = async (req, res) => {
    const data = req.body;
    const trip = await createTripByUser(data);
    if(trip){
        res.status(201).send(trip);
    }
    else{
        res.status(500).send("create a Trip fail !")
    }
}

const updateTrip = async (req, res) => {
    const {id} = req.params;
    const data = req.body;
    const result = await updateTripByUser(data, id)
    if(result){
        res.status(200).send(`update trip id : ${id}`)
    }
    else{
        res.status(500).send("update fail !")
    }
}

const getDetailTrip = async (req, res) => {
    const {id} = req.params;
    const trip = await getDetailTripByClient(id);
    if(trip){
        res.status(200).send(trip)
    }
    else{
        res.status(404).send("Not Found !")
    }
}

const deleteTrip = async (req, res) => {
    const {id} = req.params;
    const result = await deleteTripByUser(id);
    if(result){
        res.send(`delete trip id : ${id} !`)
    }
    else{
        res.status(500).send("delete fail !")
    }
}

module.exports = {
    getAllTrips,
    createTrip,
    updateTrip,
    getDetailTrip,
    deleteTrip
}
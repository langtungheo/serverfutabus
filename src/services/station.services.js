const {Stations} = require("../models");

const createSta = async (data) => {
    try {
        const station = await Stations.create(data);
        if(station){
            return station;
        }        
        else {
            return false;
        }
    } catch (error) {
        return error
    }
}

const getAllSta =  async () => {
    try {
        const stations = await Stations.findAll();
        if(stations){
            return stations
        }
        else{
            return false;
        }
    } catch (error) {
        return error
    }
}

const getDetailSta = async (id) => {
    try {
        const station = await Stations.findOne({
            where : {
                id : id
            }
        })    
        if(station) {
            return station
        }    
        else{
            return false;
        }
    } catch (error) {
        return error
    }
}

const updateSta = async (data, id) => {
    try {
        const index = await getDetailSta(id);
        if(index){
            const stationUpdate = await Stations.update(data, {
                where: {
                    id: id
                }
            })
            if (stationUpdate) {
                return stationUpdate
            }
            else {
                return false;
            }
        }
        else{
            return false;
        }
        
    } catch (error) {
        return error
    }
}

const deleteSta = async (id) => {
    try {
        const index = await getDetailSta(id);
        if(index){
            await Stations.destroy({
                where : {
                    id :id
                }
            })
            return true;
        }
    } catch (error) {
        return error
    }
}

module.exports = {
    createSta,
    getAllSta,
    getDetailSta,
    updateSta,
    deleteSta
}
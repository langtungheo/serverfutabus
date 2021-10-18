const { createSta, getAllSta, getDetailSta, updateSta, deleteSta } = require("../services/station.services");

const createStation = async (req, res) => {
    const data = req.body;
    const result = await createSta(data);
    if(result){
        res.status(201).send(result);
    }
    else{
        res.send(500).send("create station fail !");
    }
}

const getAllStation = async (req, res) => {
    const result = await getAllSta();
    if(result){
        res.status(200).send(result);
    }
    else{
        res.status(500).send("Not Found !");
    }
}

const getDetailStation = async (req, res) => {
    const {id} = req.params;
    const station = await getDetailSta(id);
    if(station){
        res.status(200).send(station);
    }
    else{
        res.status(404).send("Not Found !");
    }
}

const updateStation = async (req, res) => {
    const {id} = req.params;
    const data = req.body;
    const result = await updateSta(data, id);
    if(result){
        res.status(200).send("update thanh cong !");
    }
    else{
        res.status(500).send("update fail !");
    }
}

const deleteStation = async (req, res) => {
    const {id} = req.params;
    const result = await deleteSta(id);
    if(result){
        res.status(200).send(`delete successfully id : ${id}`);
    }
    else{
        res.status(404).send("Not Found !")
    }
}


module.exports = { 
    createStation,
    getAllStation,
    updateStation,
    getDetailStation,
    deleteStation
}
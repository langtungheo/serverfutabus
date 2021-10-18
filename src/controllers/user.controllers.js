const { hashPass, comparePass } = require("../middleware/globalmiddleware/hashpass");
const { createUs, login, uploadAvatarByUser, getAllUsr, getDetailUsr, updateUsr, createTicketByUser, getAllTicketsByUser } = require("../services/user.services");
const jwt = require("jsonwebtoken");
const { PRIVATE_KEY, BASE_URL } = require("../utils/globalconstant");

const createUser = async (req, res) => {
    const data = req.body;
    data.password = hashPass(data.password);
    const result = await createUs(data);
    if (result) {
        res.status(201).send(result);
    }
    else {
        res.status(500).send("Create User Fail !")
    }
}

const userLogin = async (req, res) => {
    const { email, password } = req.body;
    if (email) {
        const result = await login(email);
        if (result) {
            const status = await comparePass(password, result.password);
            if (status) {
                const token = await jwt.sign({ id: result.id, email: result.email, type: result.type }, PRIVATE_KEY, { expiresIn: 60 * 60 })
                res.send({
                    message: "Login successfully !",
                    token: token
                })
            }
            else {
                res.status(403).send("password is not correct !");
            }
        }
        else {
            res.status(404).send("user does not exist !")
        }
    }
    else{
        res.send("email is not emty !")
    }

}

const uploadUserAvatar = async (req, res) => {
    const {file, user} = req;
    const urlAvatar = `${BASE_URL}${file.path}`
    const result = await uploadAvatarByUser(user.id, urlAvatar);
    if(result){
        res.status(200).send(result)
    }
    else{
        res.status(500).send("upload avatar fail !")
    }
}

const getAllUser = async (req, res) => {
    const users = await getAllUsr()
    if(users){
        res.status(200).send(users);
    }
    else{
        res.status(404).send("Not Found !")
    }
}

const getDetailUser = async (req, res) => {
    const {id} = req.params;
    const user = await getDetailUsr(id);
    if(user){
        res.send(user)
    }
    else{
        res.status(404).send("User not Found !")
    }
}

const updateUser = async (req, res) => {
    const data = req.body;
    const {id} = req.params;
    const result = await updateUsr(id, data)
    if(result){
        res.status(201).send(result)
    }
    else{
        res.send(404).send("Not Found !")
    }
}

const createTicket = async (req, res) => {
    const data = req.body;
    const {user} = req;
    data.user_id = user.id;
    const ticket = await createTicketByUser(data);
    if(ticket){
        res.status(201).send(ticket)
    }
    else{
        res.status(500).send("create ticket fail !")
    }
}

const getAllticket = async (req, res) => {
    const {user} = req;
    const tickets = await getAllTicketsByUser(user.id)
    res.send(tickets)                                                                                                                                
}

module.exports = {
    createUser,
    userLogin,
    uploadUserAvatar,
    getAllUser,
    getDetailUser,
    updateUser,
    createTicket,
    getAllticket


}
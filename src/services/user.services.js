const { Users, Tickets, sequelize } = require("../models")

const createUs = async (data) => {
    try {
        const user = await Users.create(data)
        if (user) {
            return user
        }
        else {
            return false;
        }
    } catch (error) {
        return error
    }
}

const login = async (email) => {
    try {
        const user = await Users.findOne({
            where: {
                email: email
            }
        })
        if (user) {
            return user;
        }
        else {
            return false;
        }
    } catch (error) {
        return error
    }
}

const uploadAvatarByUser = async (id, urlAvatar) => {
    try {
        const result = await Users.update({ avatar: urlAvatar }, {
            where: {
                id: id
            }
        })
        if (result) {
            return result;
        }
        else {
            return false;
        }
    } catch (error) {
        return error
    }
}

const getAllUsr = async () => {
    try {
        const users = await Users.findAll();
        if (users) {
            return users
        }
        else {
            return false;
        }
    } catch (error) {
        return error
    }
}

const getDetailUsr = async (id) => {
    try {
        const user = await Users.findOne({
            where: {
                id: id
            }
        })
        if (user) {
            return user;
        }
        else {
            return false;
        }
    } catch (error) {
        return error
    }
}

const updateUsr = async (id, data) => {
    try {
        const index = getDetailUsr(id);
        if (index) {
            const result = await Users.update(data, {
                where: {
                    id: id
                }
            })
            if (result) {
                return result;
            }
            else {
                return false;
            }
        }
        else {
            return false;
        }

    } catch (error) {
        return error
    }
}

const createTicketByUser = async (data) => {
    try {
        const ticket = await Tickets.create(data);
        if (ticket) {
            return ticket;
        }
        else {
            return false;
        }
    } catch (error) {
        return error
    }
}

const getAllTicketsByUser = async (userId) => {
    try {
        const [tickets] = await sequelize.query(`
        select Users.name as user, fromSta.name as fromSt, toSta.name as toSt, Tickets.createdAt as dateBuy from Users
        inner join Tickets on Users.id = Tickets.user_id
        inner join Trips on Trips.id = Tickets.trip_id
        inner join Stations as fromSta on fromSta.id = Trips.fromStation
        inner join Stations as toSta on toSta.id = Trips.toStation
        where Tickets.user_id = ${userId} ;`)
        
        if(tickets){
            return tickets
        }
        else{
            return false;
        }
    } catch (error) {
        return error
    }
}

module.exports = {
    createUs,
    login,
    uploadAvatarByUser,
    getAllUsr,
    getDetailUsr,
    updateUsr,
    createTicketByUser,
    getAllTicketsByUser

}
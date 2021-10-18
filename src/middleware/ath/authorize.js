

const authorize = (arrType) => {
    return (req, res, next) => {
        const {user} = req;
        const index = arrType.findIndex(type => type === user.type);
        if(index !== -1){
            return next()
        }
        else{
            res.status(403).send("Ban khong du quyen truy cap !")
        }
    }
}

module.exports = {
    authorize
}
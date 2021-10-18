const {PRIVATE_KEY} = require("../../utils/globalconstant")
const jwt = require("jsonwebtoken");


const authentice = (req, res, next) => {
    const token = req.header("token");
    if(token){
        const decode = jwt.verify(token, PRIVATE_KEY);
        req.user = decode;
        return next();
    }
    else{
        res.status(403).send("Ban khong du quyen truy cap !")
    }
}


module.exports = {
    authentice
}
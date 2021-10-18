const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);


const hashPass = (pass) => {
    const password = bcrypt.hashSync(pass, salt);
    return password;
}

const comparePass = (passIn, passDb) => {
    const status = bcrypt.compareSync(passIn, passDb);
    return status;
}

module.exports = {
    hashPass,
    comparePass
}
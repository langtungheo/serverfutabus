const express = require('express');
const path = require('path');
const http = require('http');
const {router} = require('./routers');
const port = process.env.PORT || 8000
const app = express();
const pathPublish = path.join(__dirname, "../publish");

var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    next();
}

app.use(express.json())
app.use(allowCrossDomain)
app.use("/publish",express.static(pathPublish));
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "./views"));
app.use(router);


const server = http.createServer(app);

server.listen(port, () => {
    console.log(`server running on http://localhost:${port}`)
})



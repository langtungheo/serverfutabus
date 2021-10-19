const express = require('express');
const path = require('path');
const http = require('http');
const cors = require('cors')
const {router} = require('./routers');
const socketio = require('socket.io');
const { Stream } = require('stream');
const port = process.env.PORT || 8000;
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

const message = "hello client !";
let count = 1;
const server = http.createServer(app);
const io = socketio(server);
io.on("connection", (stream) => {
    console.log("some one connected");
    //xu ly su kien client gui len sever

    stream.on("plus count", ()=>{
        count++;
        io.emit("send count", count)
    })
    
    // xu li su kien server gui ve

    io.emit("send message to client", message)

    // client disconect
    stream.on("disconnect", () => {
        console.log("client disconnect !")
    })
})

server.listen(port, () => {
    console.log(`server running on http://localhost:${port}`)
})



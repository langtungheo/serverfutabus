const express = require('express');
const path = require('path');
const http = require('http');
const {router} = require('./routers');
const socketio = require('socket.io');
const { Stream } = require('stream');
const port = 8000;
const app = express();
const pathPublish = path.join(__dirname, "../publish");

app.use(express.json())
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



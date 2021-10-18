const fs = require('fs');

let stations = fs.readFileSync("./stations.json", {encoding : "utf-8", flag : "r"})

stations = JSON.parse(stations)
stations.map((sta, index)=>{
    console.log(sta)
})
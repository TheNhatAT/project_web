//const {start} = require("./server");

const bodyParser = require("body-parser")
const express = require("express");
const app = express();

//start();
const home = require("./controller/home")

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
const port =  5000;

app.get("/user/home", home.getAllBoarding_rooms)
app.get("/user/home/page", home.pageFragment)
app.get("/user/home/address", home.findByAddress)
app.get("/user/home/roommate", home.findRoommate)
app.get("/user/home/filter", home.filter)

app.listen(port, ()=>{
    console.log(`running on port ${port}`)
}) 
 

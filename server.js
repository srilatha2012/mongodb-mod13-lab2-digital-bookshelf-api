//DEPENDENCIES

//Import dotenv libaray and load .env file
require("dotenv").config();

const dns = require("dns");
dns.setServers(["8.8.8.8", "8.8.4.4"]);

//Import dependencies
const express = require("express");
const connectDB = require("./db/connection");
const { json } = require("stream/consumers");

//create express application
const app = express();

//load PORT number from .env file
const PORT = process.env.PORT || 3000

//MIDDLEWARE
app.use(express.urlencoded({extended : true}));

//ROUTES
app.get("/test" , (req, res) => {
    res.send('testing....');
})


//PORT
app.listen(PORT, () =>{
    console.log(`server listening on PORT ${PORT}`);
})
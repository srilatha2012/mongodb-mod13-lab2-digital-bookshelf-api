//DEPENDENCIES

//Import dotenv libaray and load .env file
require("dotenv").config();

const dns = require("dns");
dns.setServers(["8.8.8.8", "8.8.4.4"]);

//Import dependencies
const express = require("express");
//create express application
const app = express();
const connectDB = require("./db/connection");
const bookRouter = require("./routes/bookRoutes");


connectDB();
//load PORT number from .env file
const PORT = process.env.PORT || 3000

//MIDDLEWARE
//app.use(express.urlencoded({extended : true}));
app.use(express.json());
app.use("/api/books", bookRouter)

//ROUTES
app.get("/test" , (req, res) => {
    res.send('testing....');
})


//PORT
app.listen(PORT, () =>{
    console.log(`server listening on PORT ${PORT}`);
})
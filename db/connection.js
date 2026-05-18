
//import denpendencies
const mongoose = require("mongoose");

//Load Mongo uri to connect to the Mongo database 
const MONGO_URI = process.env.MONGO_URI;

function connectDB() {
    mongoose.connect(MONGO_URI);

    const db = mongoose.connection;

    db.on('error', (err) => console.log(err.message + ' is mongo not running'));
    db.on('connected', () => console.log('mongo connected'));
    db.on('disconnected', () => console.log('mongo disconnected'));

}

module.exports = connectDB;
//DEPENDENCIES

//Import dotenv libaray and load .env file
require("dotenv").config();

const dns = require("dns");
dns.setServers(["8.8.8.8", "8.8.4.4"]);

//Import dependencies
const express = require("express");
const connectDB = require("./db/connection");

//create express application
const app = express();

//load PORT number from .env file
const PORT = process.env.PORT || 3000

//MIDDLEWARE

//ROUTES

//PORT
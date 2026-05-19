const express = require("express");

//create a new router object for movie routes
const bookRouter = express.Router();

const Book = require("../models/Book");

//POST
bookRouter.post("/", async (req, res) => {
    try {
        const newBook = await Book.create(req.body);
        res.status(201).json(newBook);

    } catch (error) {
        res.status(500).send(error);
    }
});

bookRouter.get("/", async (req, res) => {
    try {

    } catch (error) {
        res.status(500).send(error);
    }

});

bookRouter.get("/:id", async (req, res) => {
    try {

    } catch (error) {
        res.status(500).send(error);
    }
});

bookRouter.put("/:id", async (req, res) => {
    try {

    } catch (error) {
        res.status(500).send(error);
    }
});

bookRouter.delete("/:delete", async (req, res) => {
    try {

    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = bookRouter;


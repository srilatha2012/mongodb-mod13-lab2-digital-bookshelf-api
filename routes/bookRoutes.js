const express = require("express");

//create a new router object for book routes
const bookRouter = express.Router();

const Book = require("../models/Book");

//CREATE - POST /api/books
bookRouter.post("/", async (req, res) => {
    try {
        const newBook = await Book.create(req.body);
        res.status(201).json(newBook);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

//READ ALL - GET - /api/books
bookRouter.get("/", async (req, res) => {
    try {

        const allBooks = await Book.find();
        res.json(allBooks);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }

});

//READ ONE - GET /api/books/:id
bookRouter.get("/:id", async (req, res) => {
    try {
        const book = await Book.findById(req.params.id);
        res.json(book);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

//UPDATE -PUT - /api/books/:id
bookRouter.put("/:id", async (req, res) => {
    try {
        const updatedBook = await Book.findByIdAndUpdate(
            req.params.id,
            req.body,
            //show updated data and check validation rules
            { new: true, runValidators: true }
        );
        res.json(updatedBook);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

//DELETE -DELETE /api/books/:id
bookRouter.delete("/:id", async (req, res) => {
    try {
        const deletedBook = await Book.findByIdAndDelete(req.params.id);
        res.json(deletedBook);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = bookRouter;


const express = require('express');
const router = express.Router();
const booksController = require('../controllers/booksController');

router.get("/books", booksController.index);
router.post("/books/create", booksController.store);

module.exports = router;
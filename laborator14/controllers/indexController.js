const bookModel = require('../models/book');

exports.index = async (req, res, next) => {
    res.render('index', { title: 'Express' });
}

exports.contacte = async (req, res, next) => {
    res.render('contacte', { title: 'Contacte' });
}

exports.carti = async (req, res, next) => {
    try {
        const books = await bookModel.getBooks();
        res.render('carti', { title: 'Carti', books: books });
    } catch (error) {
        console.error(error);
        res.status(500).send("Error fetching books");
    }
}
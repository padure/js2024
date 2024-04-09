const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
const cors = require('cors');

const app = express();
const PORT = 3000;
const URL_BOOKS = 'books.json';

//Middleware
app.use(bodyParser.json());
app.use(cors());

//Routes
//Afisarea cartilor
app.get('/books', (req, res) => {
    fs.readFile(URL_BOOKS, "utf8", (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).send("A aparut o eroare");
            return;
        }
        const books = JSON.parse(data);
        res.json(books);
    });
});
//Adaugarea unei carti
app.post("/books/create", (req, res) => {
    fs.readFile(URL_BOOKS, "utf8", (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).send("A aparut o eroare");
            return;
        }
        const books = JSON.parse(data);
        const newBook = req.body;
        newBook.id = uuidv4();
        books.push(newBook);
        fs.writeFile(URL_BOOKS, JSON.stringify(books, null, 2), err => {
            if (err) {
                console.error(err);
                res.status(500).send("A aparut o eroare");
                return;
            }
            res.send("Cartea a fost adaugata cu succes!");
        });
    });
});
//Afiseaza cartea dupa ID
app.get("/book/:id", (req, res) => {
    const id = req.params.id;
    fs.readFile(URL_BOOKS, "utf8", (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).send("A aparut o eroare");
            return;
        }
        const books = JSON.parse(data);
        const book = books.filter(book => {
            return book.id == id;
        });
        res.json(book);
    });
});
//Sterge o carte
app.delete("/book/:id", (req, res) => {
    const id = req.params.id;
    fs.readFile(URL_BOOKS, "utf8", (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).send("A aparut o eroare");
            return;
        }
        const books = JSON.parse(data);
        const newBooksList = books.filter(book => {
            return book.id != id;
        });
        fs.writeFile(URL_BOOKS, JSON.stringify(newBooksList, null, 2), err => {
            if (err) {
                console.error(err);
                res.status(500).send("A aparut o eroare");
                return;
            }
            res.send("Cartea a fost stearsa cu succes!");
        });
    });
});
//Actualizare date carte
app.put("/book/:id", (req, res) => {
    const id = req.params.id;
    fs.readFile(URL_BOOKS, "utf8", (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).send("A aparut o eroare");
            return;
        }
        const books = JSON.parse(data);
        const book = books.filter(book => book.id == id);
        const oldBooks = books.filter(book => book.id != id);
        const myBook = book.pop();
        const newBook = {
            "id" : myBook.id,
            "nume" : req.body.nume,
            "autor" : req.body.autor,
            "pagini" : req.body.pagini,
            "an" : req.body.an
        }
        oldBooks.push(newBook);
        fs.writeFile(URL_BOOKS, JSON.stringify(oldBooks, null, 2), err => {
            if (err) {
                console.error(err);
                res.status(500).send("A aparut o eroare");
                return;
            }
            res.send("Cartea a fost actualizata cu succes!");
        });
    });
});
app.listen(PORT, () => {
    console.log(`Serverul ruleaza la adresa: http://localhost:${PORT}`);
});
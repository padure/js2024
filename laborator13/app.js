const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

const app = express();
const PORT = 3000;
const URL_BOOKS = 'books.json';

app.use(bodyParser.json());

//Routes
//Afisarea cartilor
app.get('/books', (req, res) => {
    fs.readFile(URL_BOOKS, "utf8", (err, data)=>{
        if(err){
            console.error(err);
            res.status(500).send("A aparut o eroare");
            return;
        }
        const books = JSON.parse(data);
        res.json(books);
    });
});
//Adaugarea unei carti
app.post("/books/create", (req, res)=>{
    fs.readFile(URL_BOOKS, "utf8", (err, data)=>{
        if(err){
            console.error(err);
            res.status(500).send("A aparut o eroare");
            return;
        }
        const books = JSON.parse(data);
        const newBook = req.body;
        newBook.id = uuidv4();
        books.push(newBook);
        fs.writeFile(URL_BOOKS, JSON.stringify(books, null, 2), err => {
            if(err){
                console.error(err);
                res.status(500).send("A aparut o eroare");
                return;
            }
            res.send("Cartea a fost adaugata cu succes!");
        });
    });
});

app.listen(PORT, () => {
    console.log(`Serverul ruleaza la adresa: http://localhost:${PORT}`);
});
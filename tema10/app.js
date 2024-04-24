const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const cors = require('cors');
const booksRouter = require('./routes/booksRouter');

const app = express();
const PORT = 3000;
const URL_BOOKS = 'books.json';

//Middleware
app.use(bodyParser.json());
app.use(cors());

//Routes
app.use('/', booksRouter);

app.listen(PORT, () => {
    console.log(`Serverul ruleaza la adresa: http://localhost:${PORT}`);
});
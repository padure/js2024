
exports.index = async (req, res) => {
    fs.readFile(URL_BOOKS, "utf8", (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).send("A aparut o eroare");
            return;
        }
        const books = JSON.parse(data);
        res.json(books);
    });
}

exports.store = async (req, res) => {
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
}
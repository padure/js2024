const db = require("../config/db");

const getBooks = async () => {
    const [rows] = await db.query('SELECT * FROM books');
    return rows;
}

module.exports = {
    getBooks: getBooks
}
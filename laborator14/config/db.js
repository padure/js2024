const mysql = require("mysql2/promise");

const db = mysql.createPool({
    host: 
});

module.exports = db;
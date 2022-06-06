const mysql = require("mysql2");
require("dotenv").config();

const connection = mysql.createConnection({
    // host: process.env.host,
    // user: process.env.user,
    // database: process.env.database,
    // password: process.env.password
    host: "localhost",
    user: "root",
    database: "staff",
    password: "Vaughnisbased95"
});

module.exports = connection;
const mysql = require("mysql2");
require("dotenv").config();

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "employee_db",
    password: "root_user42"
});

module.exports = connection;
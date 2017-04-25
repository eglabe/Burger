// ***************************************************************************
// Dependencies
// ***************************************************************************

var mysql = require("mysql");

// Sets connection to mysql database burgers_db
var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "burgers_db"
});

// Connects to the database set above
connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " connection.threadId);
});

// Exports the connection for use in other files
module.exports = connection;
// Connect Node to MySQL2.
var mysql2 = require("mysql2");

var connection = mysql2.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "2011Blue",
  database: "burgers_db"
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;

var mysql = require("mysql");

var connection;

if(process.env.JAWSDB_URL) {
   // Heroku deployment
   connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        root: 3000,
        host: 'localhost',
        user: 'root',
        password: 'caeser',
        database: 'burgers_db'
    });
};

// console.log("connection made with connection.js")

// connect to the mysql server and sql database
connection.connect(function(err) {
    // console.log("Connected as id: "+ connection.threadId);
    if (err) {
        console.log("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId)
});

module.exports = connection;

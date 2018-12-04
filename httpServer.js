const http = require('http');
const app = require('./app');
var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root123!',
    database: 'appDB'
});

//connection.connect();
connection.connect(function (error) {
    //callback
    if (!!error) {
        console.log('Error');
    }
    else {
        console.log('Connected');
    }
});

connection.query('SELECT * FROM CATEGORIES', function (err, rows, fields) {
    if (err) throw err
    console.log(rows)
});

// Create an HTTP server
const server = http.createServer(app);
const PORT = 8080;
server.listen(PORT);
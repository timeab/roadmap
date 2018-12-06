require('dotenv').config();
const http = require('http');
const app = require('./app');
const mysql = require('mysql');
const dbProp = require('./config');
const router = require('./api/home');

class doConnection {
    constructor() {
        this.connect();
    };
    connect() {
        this.connection = mysql.createConnection({ ...dbProp });
    }
    async getProductRow() {
        return new Promise((resolve, reject) => this.connection.query('SELECT * FROM appDB.Product', function (err, rows) {
            if (err) reject(err);
            if (rows) {
                resolve(rows);
            }
        }));
    }
}

module.exports = new doConnection();
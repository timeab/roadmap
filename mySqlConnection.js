require('dotenv').config();
const mysql = require('mysql');
const dbProp = require('./config');

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
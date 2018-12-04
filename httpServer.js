const http = require('http');
const app = require('./app');

// Create an HTTP server
const server = http.createServer(app);
const PORT = 8080;
server.listen(PORT);
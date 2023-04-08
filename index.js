const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

const express = require("express");
const app = express();

app.use(express.json());

const server = http.createServer((req, res) => {
    const users= await db.getTheUsers();
    res.json(users);
    
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
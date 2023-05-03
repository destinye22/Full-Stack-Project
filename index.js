const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;
const Sequelize= require('sequelize');
const {User}= require('./models');

const express = require("express");
const app = express();
const server = http.createServer(app);
app.use(express.json());


app.post('/users', async(req,res) => {
    const {firstName, lastName, phoneNumber, city, state, gender}= req.body;
    const newUser= await User.create({
        firstName,
        lastName,
        phoneNumber,
        city,
        state,
        gender,
});

res.json({
    id: newUser.id,
});
});

app.get('/users', async (req, res) => {
    const users= await User.findAll();
    res.json(users);
})
app.get('/users/by-last-name', async (req, res) => {
    const users= await User.findAll({
        attributes: ('lastName'),
    });
    res.json(users);
});
app.get('/users/:id', async (req,res) => {
    const oneUser= await User.findByPk(req.params.id);
    res.json(oneUser);
});
app.get('/users/information', async (req,res) => {
    const users= await User.findAll()
})

app.post('/billing', async(req,res) => {
    const {idNumber, billingAmount, minutesUsed, textsSent, dataUsed, outgoingCalls}= req.body;
    const newBilling= await Billing.create({
        idNumber,
        billingAmount,
        minutesUsed,
        textsSent,
        dataUsed,
        outgoingCalls,
});
res.json({
    id: newBilling.id,
});
app.get('/billing', async (req, res) => {
    const billing= await User.findAll();
    res.json(billing);
})

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
});
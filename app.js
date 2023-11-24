const express = require("express");
const router = require('./src/Route/api');

const app = new express();
const bodyParser = require('body-parser');


//Security middlewaire......
const rateLimit = require('express-rate-limit');
const helmete = require('helmet');
const mongosenetize = require('express-mongo-sanitize');
const hpp = require('hpp');
const cors = require('cors');

//database

const mongose = require('mongoose');

//Security middlewaire implement......

app.use(cors());
app.use(helmete());
app.use(hpp());
app.use(mongosenetize());
app.use(rateLimit());


//BodyParser

app.use(bodyParser.json())

//rate limiter

const limiter = rateLimit({windowMs:15*60*100,max:3000} );

//Database...

//Manageing frondEnd  Routing

app.use(express.static('my-client/build'))
app.get("*",(req,res)=>{
    req.sendFile(path.resolve(__dirname,'my-client','build','index.html'))
})


//Manageing Backend API Routing
app.use('/api/v1',router)

module.exports = app;
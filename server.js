const express = require('express');
const app = express();
const cors = require('cors');
// const bodyParser = require('body-parser');
const config = require('./config');
var favicon = require('serve-favicon');

// app.use(bodyParser.urlencoded({
//     extended: false
// }));
// app.use(bodyParser.json());
app.use(cors());

app.use(favicon(__dirname + '/favicon.ico'));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'DELETE, PUT, GET, POST');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// api routes
app.get("/api/request", (req, res, next) => {
    if (req.query.number == 404)
        return res.status(404).send({
            message: 'This is an error!'
        });
    else
        res.json({
            message: "Success"
        });
});

// start server

const server = app.listen(process.env.PORT || 5000);
const express = require('express');
const app = express();
const cors = require('cors');
// const bodyParser = require('body-parser');
const config = require('./config');

// app.use(bodyParser.urlencoded({
//     extended: false
// }));
// app.use(bodyParser.json());
app.use(cors());

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
const port = config.env === 'production' ? 8080 : config.port;
const server = app.listen(port, function() {
    console.log('Server listening on port ' + port);
});
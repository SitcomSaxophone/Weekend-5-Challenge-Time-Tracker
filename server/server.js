// Require
const express = require('express');
const bodyParser = require('body-parser');

// Globals
const app = express();

// Uses
app.use(express.static('server/public'));
app.use(bodyParser.json()); // AngularJS
app.use(bodyParser.urlencoded({extended: true})); // JQuery

// Spin up server
const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log('server running on port: ', port);
});

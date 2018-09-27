// Require
const express = require('express');
const bodyParser = require('body-parser');
const pool = require('./modules/pool');
const entryRouter = require('./routes/entry.route');
const projectRouter = require('./routes/project.route');

// Globals
const app = express();

// Uses
app.use(express.static('server/public'));
app.use(bodyParser.json()); // AngularJS
app.use(bodyParser.urlencoded({extended: true})); // JQuery
app.use('/entries', entryRouter);
app.use('/projects', projectRouter);


// Spin up server
const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log('server running on port: ', port);
});

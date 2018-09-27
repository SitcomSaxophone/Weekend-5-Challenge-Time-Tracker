// Require
const express = require('express');
const bodyParser = require('body-parser');
const pool = require('./modules/pool');

// Globals
const app = express();

// Uses
app.use(express.static('server/public'));
app.use(bodyParser.json()); // AngularJS
app.use(bodyParser.urlencoded({extended: true})); // JQuery

app.post('/', (req, res) => {
    let entry = req.body;
    pool.query(`INSERT INTO "entry"("description", "start_time", "end_time", "project_id")
                VALUES($1, timestamp '$2 $3', timestamp '$2 $4', $5);`,
                [entry.description, entry.date, entry.start_time, entry.end_time, project_id])
                .then(() => {
                    res.sendStatus(201);
                })
                .catch((error) => {
                    console.log('Error making POST: ', error);
                    res.sendStatus(500);
                });
});

// Spin up server
const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log('server running on port: ', port);
});

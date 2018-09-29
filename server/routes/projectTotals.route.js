// Requires
const express = require('express')
const router = express.Router();
const pool = require('../modules/pool'); 

router.get('/', (req, res) => {
    pool.query(`SELECT "project".name, "project".id, "entry".start_time, "entry".end_time
                FROM "project"
                JOIN "entry" 
                ON "entry".project_id = "project".id;`)
    .then((results) => {
        res.send(results.rows);
    })
    .catch((error) => {
        res.sendStatus(500);
    });
}); // end GET

module.exports = router;
//Requires
const express = require('express);')
const router = express.Router();
const pool = require('../modules/pool');

router.post('/', (req, res) => {
    let entry = req.body;
    pool.query(`INSERT INTO "entry"("description", "date", "start_time", "end_time", "project_id")
                VALUES($1, $2, $3, $4, $5);`,
        [entry.description, entry.date, entry.start_time, entry.end_time, entry.project_id])
        .then(() => {
            res.sendStatus(201);
        })
        .catch((error) => {
            console.log('Error making POST: ', error);
            res.sendStatus(500);
        });
});

module.exports = router;
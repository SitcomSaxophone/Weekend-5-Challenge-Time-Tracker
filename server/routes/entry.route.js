//Requires
const express = require('express')
const router = express.Router();
const pool = require('../modules/pool');

router.post('/', (req, res) => {
    console.log(req.body);
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
}); // end POST

router.get('/', (req, res) => {
    pool.query(`SELECT "entry".id, "entry".description, "entry".date, "entry".start_time, "entry".end_time, "project".name 
                FROM "entry"
                JOIN "project" 
                ON "project"."id" = "entry"."project_id";`)
    .then((results) => {
        res.send(results.rows);
    })
    .catch((error) => {
        console.log('Error making GET: ', error);
        res.sendStatus(500);
    });
}); // end GET

router.delete('/:id', (req, res) => {
    let id = req.params.id;
    pool.query(`DELETE FROM "entry"
                WHERE "id" = $1;`, [id])
    .then(() => {
        res.sendStatus(200);
    })
    .catch((error) => {
        console.log('Error making DELETE: ', error);
        res.sendStatus(500);
    });
}); // end DELETE

module.exports = router;
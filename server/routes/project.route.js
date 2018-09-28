//Requires
const express = require('express')
const router = express.Router();
const pool = require('../modules/pool');

//GETs and POSTs
router.post('/', (req, res) => {
    let entry = req.body;
    pool.query(`INSERT INTO "project"("name")
                VALUES($1);`,
                [entry.name])
        .then(() => {
            res.sendStatus(201);
        })
        .catch((error) => {
            console.log('Error making POST: ', error);
            res.sendStatus(500);
        });
});

router.get('/', (req, res) => {
    pool.query(`SELECT * FROM "project";`)
    .then((results) => {
        res.send(results.rows);
    })
    .catch((error) => {
        console.log('Error making GET: ', error);
        res.sendStatus(500);
    });
});

//Exports
module.exports = router;
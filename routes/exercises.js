"use strict";
const express = require("express");
let router = express.Router();
var sql = require("mssql");

router
    .route("/all")
    .get((req, res) => {
        var config = {
            user: 'Workmate',
            password: 'Password123',
            server: 'workmateserver.database.windows.net',
            database: 'WorkmateDB'
        };


        sql.connect(config, function (err) {

            if (err) console.log(err);

            // create Request object
            var request = new sql.Request();

            // query to the database and get the records
            request.query('select * from Workouts', function (err, recordset) {

                if (err) console.log(err)
                else console.log(recordset)

                // send records as a response
                res.json(recordset);

            });
        });


        console.log('sending all exercises back to client')
    });

router
    .route("/test")
    .get((req, res) => {
        res.send("hello")
    })


module.exports = router;
const express = require('express')
const excercises = require("./routes/exercises");
const app = express()
app.use(express.json())
app.use("/exercises", excercises)


// app.use('/api',routes)

console.log("started")

var port = process.env.PORT || 8000;



app.listen(port)

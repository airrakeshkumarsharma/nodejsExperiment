const { fork } = require("child_process");
const express = require('express');
const app = express();


app.get("/childProcess", (req, res) => {
    const child = fork("./longComputation.js")

    child.send("start")

    child.on("message", data => {
        res.status(200).json({data})
    })
})

app.listen(8000)
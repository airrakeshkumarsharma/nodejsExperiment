const express = require("express")
const bodyParser = require("body-parser")
const samlRoute = require("./router")

const app = express()

app.use(express.json({}))
app.use(bodyParser.json())

app.use("/", samlRoute)

const port = 8000
app.listen(port, () => {
    console.log(`Server started on port: ${port}`)
})
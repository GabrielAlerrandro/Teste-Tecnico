const express = require("express")
const cors = require("cors")
const dataRouter = require("./routes/dataRouter")
const app = express()

app.use(express.json())
app.use(cors())

app.use("/api/v1/data/", dataRouter)

module.exports = app

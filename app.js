require("dotenv").config()
const express = require("express")
const mongoose = require("mongoose")
const morgan = require("morgan")
const cors = require("cors")

const app = express()

const { connectDB } = require("./config/db.config")
const routes = express.Router()
app.use(morgan("dev"))
app.use(express.json())
app.use(cors())


connectDB()
mongoose.connection.once("open", ()=>{
    console.log("Connected to Mongoose ...")
}).on("error", (err)=>{
    console.log(err)
})

app.get("/", (req, res)=>{
    res.status(200).json("It's Working")
})

routes.use("/user", require("./api/User"))
routes.use("/post", require("./api/Post"))

app.use("/api/v1", routes)

app.use((req, res, next)=>{
    next(errors.NotFound())
})

app.use((err, req, res, next)=>{
    res.status(err.status || 500)
    res.json({
        error : {
            status : err.status || 500,
            message : err.message
        }
    })
})
module.exports = app
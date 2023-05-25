require("dotenv").config()
const { createServer } = require("http")
const app = require("./app")

const port = process.env.PORT

const server = createServer(app).listen(port, ()=>{
    console.log(`Server is on port ${port}`)
})
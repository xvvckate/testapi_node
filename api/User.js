const express = require("express")
const router = express.Router()

const { getUser, getUsers, addUser} = require("../controller/User.Controller")

router.route("/")
      .get(getUsers) 
      .post(addUser)     

router.route("/:id")
      .get(getUser)

module.exports = router

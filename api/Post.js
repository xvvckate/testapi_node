const express = require("express")
const router = express.Router()

const { getPost, getPosts, addPost, updatePost, deletePost } = require("../controller/Post.Conteroller")

router.route("/")    
      .get(getPosts)
      .post(addPost)

router.route("/:id")
      .get(getPost)
      .post(updatePost)
      .delete(deletePost)

module.exports = router

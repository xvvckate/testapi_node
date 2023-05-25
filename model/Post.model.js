const mongoose = require("mongoose")
const Schema = mongoose.Schema

const PostSchema = new Schema({
    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "user"
    },
    title : { type : String },
    body : { type : String },
    date : { type : Date, default : Date.now }
})

const Post = mongoose.model("post", PostSchema)
module.exports = Post

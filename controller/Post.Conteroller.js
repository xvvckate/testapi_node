const Post = require("../model/Post.model")

const getPosts = async (req, res, next)=>{
    try{
        const data = await Post.find()
        res.status(200).json(data)
    }catch(err){
        next(err)
    }
}

const getPost = async (req, res, next)=>{
    const { id } = req.params
    try{
        const data = await Post.findById(id)
        res.status(200).json(data)
    }catch(err){
        next(err)
    }
}

const addPost = async (req, res, next)=>{
    const { user, title, body, date } = req.body
    try{
        const post = new Post({
            user,
            title,
            body,
            date
        })

        await post.save()
        res.sendStatus(201)
    }catch(err){
        next(err)
    }
}

const updatePost = async (req, res, next)=>{
    const { id } = req.params
    try{
        const doc = await Post.findById(id)
        await doc.update(req.body)
        res.sendStatus(202)
    }catch(err){
        next(err)
    }
}

const deletePost = async (req, res, next)=>{
    const { id } = req.params
    try{
        const doc = await Post.findById(id)
        await doc.delete()
        res.sendStatus(204)
    }catch(err){
        next(err)
    }
}

module.exports = {
    getPost,
    getPosts,
    addPost,
    updatePost,
    deletePost
}

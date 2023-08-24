const User = require("../model/User.model")

const getUsers = async (req, res, next)=>{
    try{
        const data = await User.find()
        res.status(200).json(data)
    }catch(err){
        next(err)
    }
}

const getUser = async (req, res, next)=>{
    const { id } = req.params
    try{
        const data = await User.findById(id)
        res.status(200).json(data)
    }catch(err){
        next(err)
    }
}

const addUser = async (req, res, next)=>{
    const { name, username, email } = req.body
    try{
        const user = new User({
            name,
            username,
            email
        })
        await user.save()
        res.sendStatus(201)
    }catch(err){
        next(err)
    }
}

const updateUser = async (req, res, next)=>{
    const { id } = req.params
    const { name, username, email} = req.body
    try{
        const data = await User.findByIdAndUpdate(id,{
            name,
            username,
            email
        })
        res.status(200).json(data)
    }catch(err){
        next(err)
    }
}

module.exports = {
    getUser,
    getUsers,
    addUser,
    updateUser
}


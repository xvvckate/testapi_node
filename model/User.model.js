const mongoose = require("mongoose")
const Schema = mongoose.Schema

const UserSchema = new Schema({
    name : { type : String },
    username : { type : String },
    email : { type : String },
    address : {
        street : { type : String },
        suite : { type : String },
        city : { type : String },
        zipcode : { type : String },
        geo: {
            lat : { type : Number },
            lng : { type : Number }
        }
    },
    phone : { type : String },
    website : { type : String },
    company: {
        name : { type : String },
        catchPhrase : { type : String },
        bs : { type : String }
    }
})

const User = mongoose.model("user", UserSchema)
module.exports = User

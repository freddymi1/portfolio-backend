const mongoose = require("mongoose")

const About = mongoose.model(
    "About",
    new mongoose.Schema({
        name: String,
        lastname: String,
        dateBirth:Date,
        adress: String,
        city: String,
        country: String,
        description: String,
        photo: String,
        createdAt:{
            type:Date,
            default: Date.now()
        },
        updatedAt:{
            type:Date,
            default: Date.now()
        }
    })
)

module.exports = About;
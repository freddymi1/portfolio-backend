const mongoose = require("mongoose")

const About = mongoose.model(
    "About",
    new mongoose.Schema({
        name: String,
        lastname: String,
        dateBirth:Date,
        home: String,
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
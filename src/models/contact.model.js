const mongoose = require("mongoose")

const Contact = mongoose.model(
    "Contact",
    new mongoose.Schema({
        phone1: String,
        phone2: String,
        email:String,
        linkedin: String,
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

module.exports = Contact;
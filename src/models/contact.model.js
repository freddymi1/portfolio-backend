const mongoose = require("mongoose")

const Contact = mongoose.model(
    "Contact",
    new mongoose.Schema({
        phone1: {
            type: String,
            required: true
        },
        phone2: {
            type: String,
            required: false
        },
        email:{
            type: String,
            required: true
        },
        linkedinProfile: {
            type: String,
            required: false
        },
        githubUrl: {
            type: String,
            required: false
        },
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
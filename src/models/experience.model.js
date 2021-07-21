const mongoose = require("mongoose")

const Experience = mongoose.model(
    "Experience",
    new mongoose.Schema({
        title: String,
        societe: String,
        post: String,
        mission: {
            title: String,
            desc: String
        },
        startDate:Date,
        endDate: Date,
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

module.exports = Experience;
const mongoose = require("mongoose")

const Language = mongoose.model(
    "Language",
    new mongoose.Schema({
        title: String,
        level: Number,
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

module.exports = Language;
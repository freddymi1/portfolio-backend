const mongoose = require("mongoose")

const Langue = mongoose.model(
    "Langue",
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

module.exports = Langue;
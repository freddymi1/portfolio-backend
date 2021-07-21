const mongoose = require("mongoose")

const Framework = mongoose.model(
    "Framework",
    new mongoose.Schema({
        title: String,
        level: Number,
        languages: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Language"
            }
        ],
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

module.exports = Framework;
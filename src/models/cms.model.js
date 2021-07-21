const mongoose = require("mongoose")

const Cms = mongoose.model(
    "Cms",
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

module.exports = Cms;
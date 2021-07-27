const mongoose = require("mongoose")

const Skill = mongoose.model(
    "Skill",
    new mongoose.Schema({
        title: String,
        level: Number,
        types: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Type"
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

module.exports = Skill;
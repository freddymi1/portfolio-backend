const mongoose = require("mongoose")

const Skill = mongoose.model(
    "Skill",
    new mongoose.Schema({
        title: String,
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
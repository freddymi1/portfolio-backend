const mongoose = require("mongoose")

const Experience = mongoose.model(
    "Experience",
    new mongoose.Schema({
        poste: String,
        societe: String,
        descPost: String,
        descMission: {
            type: Array
        },
        startDate:{
            type: Date,
            default: null,
            required: false
        },
        endDate: {
            type: Date,
            default: null,
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

module.exports = Experience;
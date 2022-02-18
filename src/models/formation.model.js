const mongoose = require("mongoose")

const Formation = mongoose.model(
    "Formation",
    new mongoose.Schema({
        title: String,
        school: String,
        filiere: String,
        description: {
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

module.exports = Formation;
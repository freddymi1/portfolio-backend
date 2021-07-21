const mongoose = require("mongoose")

const Formation = mongoose.model(
    "Formation",
    new mongoose.Schema({
        title: String,
        college: String,
        filiere: String,
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

module.exports = Formation;
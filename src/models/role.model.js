const mongoose = require('mongoose')

const Role = mongoose.model(
    "Role",
    new mongoose.Schema({
        name: {
            type:  String,
            unique: false
        }
    })
);
module.exports = Role;
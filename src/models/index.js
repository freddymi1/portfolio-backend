const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db={}

db.mongoose = mongoose;

db.about = require("./about.model");
db.role = require("./role.model");
db.user = require("./user.model")
db.experience = require("./experience.model");
db.formation = require("./formation.model");
db.langue = require("./langue.model");
db.skill = require("./skill.model");
db.contact = require("./contact.model");
db.type = require("./type.model");

db.TYPES = ["Front-end", "Back-end", "Designer"]

db.ROLES = ["user", "admin", "moderator"];

module.exports = db;
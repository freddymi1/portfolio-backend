const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db={}

db.mongoose = mongoose;

db.about = require("./about.model");
db.role = require("./role.model");
db.user = require("./user.model")
db.cms = require("./cms.model");
db.experience = require("./experience.model");
db.formation = require("./formation.model");
db.framework = require("./framework.model");
db.language = require("./language.model");
db.langue = require("./langue.model");
db.skill = require("./skill.model");
db.contact = require("./contact.model");

db.ROLES = ["user", "admin", "moderator"];

module.exports = db;
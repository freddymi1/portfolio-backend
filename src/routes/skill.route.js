const SkillController = require('../controllers/skill.controller')
const router = require('express').Router()

router.post("/", SkillController.AddSkill)
router.get("/", SkillController.getAllSkills)

module.exports = router;
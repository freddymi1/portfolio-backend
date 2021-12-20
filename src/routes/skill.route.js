const SkillController = require('../controllers/skill.controller')
const router = require('express').Router()

router.post("/", SkillController.AddSkill)
router.get("/", SkillController.getAllSkills)
router.get("/:id", SkillController.getOneSkill)
router.put("/:id", SkillController.UpdateSkill)
router.delete("/:id", SkillController.deleteSkill)

module.exports = router;
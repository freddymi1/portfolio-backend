const ExpController = require('../controllers/experience.controller');

const router = require('express').Router();

router.post("", ExpController.AddExperience)
router.get("/", ExpController.getAllExperiences)
router.put("/:id", ExpController.UpdateExperience)
router.get("/:id", ExpController.getOneExperience)
router.delete("/:id", ExpController.DeleteExperience)

module.exports = router;
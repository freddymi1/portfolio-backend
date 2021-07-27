const AboutController = require('../controllers/about.controller')
const router = require('express').Router()

router.post("", AboutController.AddAbout)
router.get("/", AboutController.getAllAbout)
router.get("/:id", AboutController.getOneAbout)
router.put("/:id", AboutController.UpdateAbout)
router.delete("/:id", AboutController.DeleteAbout)

module.exports = router;
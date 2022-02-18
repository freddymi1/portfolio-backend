const FormationController = require('../controllers/formation.controller');

const router = require('express').Router();

router.post("", FormationController.addFormation)
router.get("/", FormationController.getAllFormations)
router.put("/:id", FormationController.UpdateFormation)
router.get("/:id", FormationController.getOneFormation)
router.delete("/:id", FormationController.DeleteFormation)

module.exports = router;
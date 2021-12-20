const LangueController = require('../controllers/langue.controller');

const router = require('express').Router();

router.post("", LangueController.AddLangue)
router.get("/", LangueController.getAllLangue)
router.put("/:id", LangueController.updateLangue)
router.get("/:id", LangueController.getOneLangue)
router.delete("/:id", LangueController.deleteLangue)

module.exports = router;
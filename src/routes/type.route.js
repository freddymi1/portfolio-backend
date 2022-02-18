const TypeController = require('../controllers/type.controller')
const router = require('express').Router()

router.get("/", TypeController.getAllType)
router.post("/", TypeController.AddType)
router.get("/:id", TypeController.getOneType)
router.put("/:id", TypeController.UpdateType)
router.delete("/:id", TypeController.DeleteType)

module.exports = router;
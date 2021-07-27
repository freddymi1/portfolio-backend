const TypeController = require('../controllers/type.controller')
const router = require('express').Router()

router.get("/", TypeController.getAllType)

module.exports = router;
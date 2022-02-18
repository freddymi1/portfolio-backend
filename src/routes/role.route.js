const RoleController = require('../controllers/role.controller')
const { verifySignUp } = require('../middleware')
const router = require('express').Router()

router.get("/", RoleController.getAllRoles)
router.post("/",
// verifySignUp.checkRoleExiste,
 RoleController.AddRole)
router.get("/:id", RoleController.getOneRole)
router.put("/:id", RoleController.UpdateRole)
router.delete("/:id", RoleController.DeleteRole)

module.exports = router;
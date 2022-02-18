/**
 * All route for users auth
 * get('/') for fetching all users
 * get('/user') for fetching all user where user.role as user
 * get('/moderator') for fetching all user where user.role as moderator
 * get('/admin') for fetching all user where user.role as admin
 * get('/:id') for fetching one user
 */

const { authJwt } = require("../middleware");
const userController = require("../controllers/user.controller");
const router = require("express").Router()

router.get("/all", [authJwt.verifyToken], userController.allAccess);

router.get("/user", [authJwt.verifyToken], userController.userBoard);

router.get(
  "/moderator",
  [authJwt.verifyToken, authJwt.isModerator],
  userController.moderatorBoard
);

router.get(
  "/admin",
  [authJwt.verifyToken, authJwt.isAdmin],
  userController.adminBoard
);
router.get("/",
// [authJwt.verifyToken, authJwt.isAdmin], 
userController.getAllUsers)
router.get("/:id",
// [authJwt.verifyToken, authJwt.isAdmin],
userController.getOneUser)
router.put("/:id", 
// [authJwt.verifyToken, authJwt.isAdmin], 
userController.UpdateUser)
router.delete("/:id", 
// [authJwt.verifyToken, authJwt.isAdmin], 
userController.deleteUser)

module.exports = router;
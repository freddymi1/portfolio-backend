const ContactController = require('../controllers/contact.controller');

const router = require('express').Router();

router.post("", ContactController.AddContact)
router.get("/", ContactController.getAllContacts)
router.put("/:id", ContactController.UpdateContact)
router.get("/:id", ContactController.getOneContact)
router.delete("/:id", ContactController.DeleteContact)

module.exports = router;
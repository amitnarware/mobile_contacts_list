const express = require("express")
const router = express.Router();
const contactController = require("../controller/contactcontroller")
const authMiddleware = require("../middleware/authmiddleware")

router.post("/add", authMiddleware,contactController.addContact)
router.get("/",authMiddleware, contactController.getContacts);

module.exports = router;
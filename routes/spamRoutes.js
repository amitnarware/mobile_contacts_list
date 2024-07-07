const express = require("express")
const router = express.Router();
const spamcontroller = require("../controller/spamcontroller")
const authMiddleware = require("../middleware/authmiddleware")

router.post("/markspam", authMiddleware,spamcontroller.markAsSpam)
router.get("/getspam/list",authMiddleware, spamcontroller.getSpamNumber);

module.exports = router;
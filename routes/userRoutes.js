const express = require("express")
const router = express.Router();
const usercontroller = require("../controller/usercontroller")
const authMiddleware = require("../middleware/authmiddleware")

router.get("/get/profile", authMiddleware,usercontroller.getProfile)
router.get("/search/By/name",authMiddleware, usercontroller.searchByName);
router.get("/By/Phone_number", authMiddleware,usercontroller.searchByPhoneNumber)


module.exports = router;


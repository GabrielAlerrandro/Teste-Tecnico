const express = require("express")
const dataController = require("./../controllers/dataController")
const router = express.Router()

router.route("/").get(dataController.getAllData).post(dataController.createData)
router.route("/:id").delete(dataController.deleteData)

module.exports = router

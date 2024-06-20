const express = require("express")
const router = express.Router()
// import controllers
const {
  getAllResume,
  createResume,
  getResume,
  editResume,
  deleteResume,
} = require("../controllers/resume")

// routes
router.route("/").get(getAllResume).post(createResume)
router.route("/:id").get(getResume).patch(editResume).delete(deleteResume)

module.exports = router

const Resume = require("../models/Resume")
// controllers
const getAllResume = (req, res) => {
  res.send("Home/All resume")
}

const createResume = async (req, res) => {
  try {
    const resume = await Resume.create(req.body)
    res.status(201).json({ resume })
  } catch (error) {
    res.status(500).json({ msg: error })
  }
}

const getResume = (req, res) => {
  res.json({ id: req.params.id })
}

const editResume = (req, res) => {
  res.send("Edit resume")
}

const deleteResume = (req, res) => {
  res.send("Delete resume")
}

module.exports = {
  getAllResume,
  createResume,
  getResume,
  editResume,
  deleteResume,
}

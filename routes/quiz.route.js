const { Quiz } = require('../models/quiz.model')
const router = require('express').Router()
router.get("/", async (req, res) => {
  try {
    const quizData = await Quiz.find({})
    res.status(200).json({ success: true, message: "Quiz data fetched successfully", quizData })
  }
  catch (error) {
    res.status(404).json({ success: false, message: "No data found", errMessage: error.message })
  }
})
module.exports = router
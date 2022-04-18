const Leaderboard = require('../models/leaderboard.model')
const router = require('express').Router()

router.route("/")
  .get(async (req, res) => {
    try {
      const leaderboardData = await Leaderboard.find({})

      res.status(200).json({ success: true, message: "Leaderboard data fetched successfully", leaderboardData })
    }
    catch (error) {
      res.status(500).json({ success: false, message: "No data found", errMessage: error.message })
    }
  })
  .post(async (req, res) => {
    let { name, category, score } = req.body

    try {
      const newUser = new Leaderboard({ name, category, score })
      const response = await newUser.save()

      res.status(200).json({ success: true, message: "Leaderboard data added successfully", response })
    }
    catch (error) {
      res.status(500).json({ success: false, message: "No data found", errMessage: error.message })
    }
  })
module.exports = router
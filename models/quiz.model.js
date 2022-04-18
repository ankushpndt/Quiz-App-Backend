const mongoose = require('mongoose')
const { Schema, model } = mongoose
const QuizSchema = new mongoose.Schema({
  category: {
    type: String,
    required: true
  },
  question: {
    type: String,
    required: true
  },
  options: [{
    option: {
      type: String,
      required: true
    },
    isRight: {
      type: Boolean,
      required: true
    }
  }
  ]
})

const Quiz = mongoose.model('Quiz', QuizSchema)
module.exports = { Quiz }
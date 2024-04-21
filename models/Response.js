const mongoose = require('mongoose');

const userResponseSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  quiz: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Quiz'
  },
  responses: [{
    question: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Question'
    },
    userAnswer: Number
  }]
});

const Response = mongoose.model('Response', userResponseSchema);

module.exports = Response;
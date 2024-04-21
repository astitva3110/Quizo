const express=require('express');
const User=require('../models/User');
const Quiz=require('../models/Quiz');
const Question=require('../models/Question');
const Response=require("../models/Response");
const connectdb=require('../util/database');
connectdb();




//get request for home to get all the quiz
exports.getHome=async(req,res)=>{
    const quizes=await Quiz.find();
    res.json({message:quizes});
}



//get request for all the question with option 
exports.getAllQuestion=async(req,res)=>{
    const quizId=req.params.quiz_id;
    const quiz=await Quiz.findById(quizId).populate('questions');
   try{

    //if quiz is not found
    if (!quiz) {
        return res.status(404).json({ message: 'Quiz not found' });
      }
      //maping question of a quiz
      const questions = quiz.questions.map(question => ({
        text: question.question,
        options: question.options
      }));

      res.status(200).json(questions);
   }
  catch(err){
        res.status(500).json({message:"Internal Server Error"})
        console.error(err);
  }
}




//post request for take a quiz
exports.postAllQuestion=async(req,res)=>{
    const {userId,responses}=req.body;
    const quizId=req.params.quiz_id;
    const user =await User.findById(userId);

    try{
        const user = await User.findById(userId);

        // Check if user exists
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        //document for nre Response
        const newResponse = new Response({
            userId:userId,
            quizId:quizId,
            responses
          });

        await newResponse.save();

        //pushing the id of response in the user model
        await user.quiz.push(newResponse._id);
        await user.save();

        res.status(200).json({messgae:newResponse});

    }
    catch(err){
        res.status(500).json({message:"Internal Server Error"})
        console.error(err);
  }
}




//post request to get the feedback
exports.getFeedback = async (req, res) => {
    const ResponseId = req.params.response_id;
    try {
        const userResponse = await Response.findById(ResponseId).populate({
            path: 'responses.question',
            model: 'Question'
        });

        // If user response is not found
        if (!userResponse) {
            return res.status(404).json({ message: 'User response not found' });
        }

        // Feedback 
        const feedback = userResponse.responses.map(response => ({
            question: response.question.question,
            options: response.question.options,
            userResponse: response.userAnswer,
            correctOption: response.question.correctOption
        }));

        res.status(200).json({ message: feedback });
    } catch (err) {
        res.status(500).json({ message: "Internal Server Error" });
        console.error(err);
    }
}

const express=require('express');
const User=require('../models/User');
const Quiz=require('../models/Quiz');
const Question=require('../models/Question');
const jwt=require('jsonwebtoken')
const connectdb=require('../util/database');
connectdb();




//post request to create a quiz
exports.createQuiz=async(req,res)=>{
 const {quizName, description,number,userId}=req.body;
 try{
    const isQuizName=await Quiz.find({quizName:quizName});

    //if quiz name is  found
    if (isQuizName.length > 0) {
      return res.status(500).json({ message: "Quiz name is already exists" });
  }
     
    //creating a new quize
    const newQuiz=new Quiz({
      quizName:quizName,
      description:description,
      number:number,
      admin:userId
    })
    
    await newQuiz.save();
    res.status(200).json({message:newQuiz});
   
 }
 catch(err){
   res.status(500).json({message:"Internal Server error"})
    console.error(err);
 }
}



//post request to add question
exports.addQuetion=async(req,res)=>{
  const quizeId=req.params.quiz_id;
  const {question,options,correctOption,userId}=req.body
  const quiz=await Quiz.findById(quizeId);

  try{

      //if login is not a admin of a quiz
      if(userId!=quiz.admin){
         res.status(500).json({message:"You are not the admin"})
      }

      //creating a new question
      const newQue=new Question({
         question,
         options,
         correctOption
      })
      await newQue.save();

      // pushing the id of question in the quiz model
      await quiz.questions.push(newQue._id);
      await quiz.save();

      res.status(200).json({message:newQue});
  }
  catch(err){
   console.error(err);
}
}
const { required, number } = require('joi');
const mongoose =require('mongoose');

const quizschema=new mongoose.Schema({
   
    quizName:{
      type:String,
      required:true
    },
    description:{
        type:String
    },
    admin:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    number:{
      type:Number,
      required:true
    },
    questions: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Question'
      }]

})


const Quiz=mongoose.model('Quiz',quizschema);

module.exports=Quiz
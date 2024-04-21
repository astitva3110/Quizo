const mongoose=require('mongoose');

const questionSchema=new mongoose.Schema({
    question:{
        type:String,
        required:true
    },
    options: [String],
    correctOption: {
    type: Number,
    required: true
  }
});

const Question=mongoose.model('Question',questionSchema);

module.exports=Question;
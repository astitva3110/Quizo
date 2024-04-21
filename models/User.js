const mongoose=require('mongoose');

const userschema=new mongoose.Schema({
username :{
    type:String,
    required:true
},
email:{
    type:String,
    required:true
},

password:{
    type:String,
    required:true
},

quiz:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:'Quiz'
}],
},{timestamps:true})

const User=mongoose.model('User',userschema)

module.exports=User;
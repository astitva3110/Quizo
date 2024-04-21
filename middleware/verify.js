const jwt=require("jsonwebtoken")
require('dotenv').config();


const verify=(req,res,next)=>{
    const token=req.cookies.token
    if(!token){
        return res.status(404).json({message:"user is not Login"})
    }
    const decodedToken= jwt.verify(token,process.env.JWT_KEY,async(err,data)=>{
        if(err){
            console.error(err)
           return  res.status(500).json({message:"token is not matched"})
        }
        next()
    })
    req.userId=decodedToken.userId;

}

module.exports=verify;
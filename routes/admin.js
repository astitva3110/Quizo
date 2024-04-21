const express=require('express');
const router=express.Router();
const admincontroller=require('../controllers/admincontroller');
const verify=require('../middleware/verify');

router.post('/createQuiz',verify,admincontroller.createQuiz);
 
router.post('/addQue/:quiz_id',admincontroller.addQuetion);


module.exports=router;
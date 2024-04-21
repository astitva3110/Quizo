const express=require('express');
const router=express.Router();
const usercontroller=require('../controllers/usercontroller');
const verify=require('../middleware/verify');

//get request for all the quiz
router.get('/home',verify,usercontroller.getHome);


//get request to get all the question from a quiz
router.get('/:quiz_id/getQ',verify,usercontroller.getAllQuestion);


//post request for taking a Quiz
router.post('/:quiz_id/getQ',verify,usercontroller.postAllQuestion);


//get request to get the feedback
router.get('/feedback/:response_id',verify,usercontroller.getFeedback)



module.exports=router;
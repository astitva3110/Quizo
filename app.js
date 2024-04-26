const express = require('express');
const cookieParser = require('cookie-parser');
const connectdb = require('./util/database');
const authroutes = require('./routes/auth');
const userroutes = require('./routes/user');
const adminroutes=require('./routes/admin');
const redis =require('redis')
const PORT = process.env.PORT || 8080;
const redis_port=process.env.REDIS_PORT||6379;
const app = express();


const redisClient = redis.createClient(redis_port);
redisClient.on('error', err => console.error('Redis Client Error', err));

// Call the function to connect to Redis
 //to connect to the database
  connectdb();


  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(cookieParser());


  //auth route
  app.use('/auth',authroutes);
  //user route
  app.use('/user',userroutes);
  //admin route
  app.use('/admin',adminroutes);
 

 //root page
  app.get('/', (req, res) => {
    res.status(200).send('home page for Quiz app');
  });



//default port is 8080
  app.listen(PORT, () => {
    console.log(`Server is running at ${PORT}`);
  });



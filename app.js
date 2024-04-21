const express = require('express');
const cookieParser = require('cookie-parser');
const connectdb = require('./util/database');
const authroutes = require('./routes/auth');
const userroutes = require('./routes/user');
const adminroutes=require('./routes/admin');
const PORT = process.env.PORT || 8080;
const app = express();



  connectdb();
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.set('views','views');
  app.set('view engine','ejs');
  app.use(cookieParser());
  app.use('/auth',authroutes);
  app.use('/user',userroutes);
  app.use('/admin',adminroutes);
 


  app.get('/', (req, res) => {
    res.status(200).send('home page for Social media app');
  });


  app.listen(PORT, () => {
    console.log(`Server is running ${PORT}`);
  });



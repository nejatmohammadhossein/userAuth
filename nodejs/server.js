const express = require('express');
const body = require('body-parser');
const mongoose = require('mongoose');
const http = require('http');
const { urlencoded } = require('body-parser');
const { userInfo } = require('os');
const { doesNotMatch } = require('assert');
const user = require('./user');
const { assert } = require('console');
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

const app = express();
const server = http.createServer(app);


mongoose.connect('mongodb://localhost/my_database');

app.listen(3000, ()=>{
    console.log("Server is running ...");
})

app.use(body.urlencoded({ extended: false }));
app.use(body.json());
app.use(function (req, res, next) {
    //Enabling CORS
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization");
      next();
    });

app.post('/register', (req,res)=>{
    console.log(req.body);

    const newUser = new user({
        name:req.body.name,
        userId:req.body.userName,
        password:req.body.password,
        role:0
    });
    newUser.save().then(function(){
        assert(newUser.isNew === false);
        try{
            done(null,newUser);
            res(200);
        }catch{

        }
            
      
      
    });
    
    
    
    
})

app.post('/login', (req,res)=>{
    console.log(req.body);
    const loginUser = new user({
        userId:req.body.userName,
        password: req.body.password
    });
    user.findOne({
        userId:loginUser.userId
    },(err,obj)=>{
        if(err){
            return res.json({name:"false", message:"Incorrect userName or password"});
        }
        if(!obj || !obj.comparePassword(loginUser.password)){
            return res.json({name:"false", message:"Incorrect userName or password"});
        }else{
            var id=obj.userId;
            var role=obj.role;
            var token = jwt.sign({id},'123');
            res.json({name:id ,token, role});
        }
    })
    
  
    
})
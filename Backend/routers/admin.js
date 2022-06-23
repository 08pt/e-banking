var express = require('express');
var router = express.Router();
const ObjectId = require('mongoose').Types.ObjectId
const { admin } = require('../models/admin');

// ==========================SPORT================================
// get for sport
router.get('/',(req,res)=>{
    admin.find((err,doc)=>{
        if(!err){console.error(res.send(doc))}
        else{console.log("error in get method")}
    })
})

router.post('/',(req,res)=>{
    var adm= new admin({
        username:req.body.username,
        
        password:req.body.password
    })
    adm.save((err,doc)=>{
        if(!err){console.error(res.send(doc))}
        else{console.log("error in post method")}
    })
})

//Login a by existing user
router.get('/login', function(req, res, next) {
  const{ username, password }= req.query
     admin.findOne({username:username},(err,user)=>{
 if(user){
 if(password === user.password){
   res.send({message:"login Successfully",user:user})
 }
     else{
         res.send({message:"password didnt match"})
     }
 }else{
     res.send({message:"incorrect username or password"})
 }
     })
   });

  



module.exports = router;

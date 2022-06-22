const { response } = require('express')
const User=require('../models/User')
const ObjectId = require('mongoose').Types.ObjectId

const index=(req,res,next) =>{
    User.find()
    .then(response =>{
        res.json({
            response
        })
    })

    .catch(error => {
        res.json({
            Message:'An Error Ocurred'
        })
    })
}

// const add = (req,res,next) => {
//     let user = new User({
//         _id:req.body._id,
//         username:req.body.username,
//         password:req.body.password,
//         email:req.body.email,
//         phoneno:req.body.phoneno
        
//     })
//     user.save()
//     .then(response =>{
//         res.json({
//             message:'User Added Succesfully'
//         })
//     })
//     .catch(error => {
//         res.json({
//             message:'An Error Occured'
//         })
//     })

// }

const update = (req,res,next) => {
    let updateData={
        username:req.body.username,
        password:req.body.password,
        email:req.body.email,
        phoneno:req.body.phoneno
    }
    if(ObjectId.isValid(req.params.id)){
    User.findByIdAndUpdate(req.params.id,{$set:updateData},(err,doc) =>{
        if(err){
            console.log("Error in update user by id"+err)
        }else{
            res.send(doc)
        }
        })
        }else{
            return res.status(400).send('No Record found with id'+req.params.id)
        }
}

const show = (req,res,next) => {
    if(ObjectId.isValid(req.params.id)){
    User.findById(req.params.id,(err,doc) =>{
        if(err){
            console.log("Error in get user by id"+err)
        }else{
            res.send(doc)
        }
        })
        }else{
            return res.status(400).send('No Record found with id'+req.params.id)
        }
}


const destroy = (req,res,next) => {
    if(ObjectId.isValid(req.params.id)){
        User.findByIdAndRemove(req.params.id,(err,doc) =>{
            if(err){
                console.log("Error in delete user by id"+err)
            }else{
                res.send(doc)
            }
            })
            }else{
                return res.status(400).send('No Record found with id'+req.params.id)
            }
    }

module.exports = {
    index,update,show,destroy
    }

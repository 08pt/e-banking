//The routers folder will contain the files with the endpoints.


const express=require('express');
const ObjectId= require('mongoose').Types.ObjectId;

const router=express.Router();
const {Customer} = require('../models/customer');
 
// get Single Account details  by number

router.get('/:customer_id',(req,res)=>{
    const{customer_id}=req.params;
    
     Customer.findOne({customer_id},function(err,data){
        if(err){
            console.log('Error i Post Data'+err)
       }
        else{
            res.send(data);
        }
        })
     })
   

// Get Account details

router.get('/',(req,res)=>{
Customer.find((err,doc)=>{
       if(err){
            console.log('Error i Post Data'+err)
        }
       else{
            res.send(doc);
        }
    });

});

// Add Account

router.post('/',(req,res)=>{
    let cust=new Customer({
        customer_id:req.body.customer_id,
     customer_name:req.body.customer_name,
     
     customer_email:req.body.customer_email,
     password:req.body.password,
     phone_no:req.body.phone_no,
     customer_mobile:req.body.customer_mobile,
     customer_address:req.body.customer_address,
     
     
    });
    cust.save((err,doc)=>{
        if(err){
            console.log('Error i Post Data'+err)
        }
        else{
            res.send(doc)
        }
    });
});
  

//update Account

    router.put('/:customer_id',function(req,res){
    const {customer_id}=req.params;
     Account.findOneAndUpdate({customer_id},req.body,function(err,data){
        if(err){
            console.log('Error in get employee by id'+err)
       }
        else{
            res.send(data);
        }
     });
    
});

// Delete Account
router.delete('/:customer_id',(req,res)=>{
    const {customer_id}=req.params;
     Account.findOneAndRemove({customer_id},(err,doc)=>{
        if(err){
            console.log('Error in delete customer by id'+err)
       }
        else{
            res.send(doc);
        }
     });
    
});

router.get('/search/:key',async(req,res)=>{
    console.log(req.params.key)
    let data=await Customer.find({
        "$or":[
            {
                "customer_name":{
                    $regex:req.params.key
                }}
                                       
        ]
    })
    res.send(data)
})



module.exports=router;
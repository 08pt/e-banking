const express=require('express');
const ObjectId= require('mongoose').Types.ObjectId;

const router=express.Router();
const Customer   =   require('../models/customer');
const {check,validationResult} = require('express-validator/check')
 
// get Single Customer details  by account_number

router.get('/:cust_id',(req,res)=>{
    const{cust_id}=req.params;
    
     Customer.findOne({cust_id},function(err,data){
        if(err){
            console.log('Error i Post Data'+err)
       }
        else{
            res.send(data);
        }
        })
     })
   

// Get Customer details

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

// Add Customer


// router.post('/', [
//     // check('transaction_amount').not().isEmpty().withMessage('Transaction Amount  must have more than 6  characters'),
//     // check('weekday', 'Choose a weekday').optional(),
//     check('email', 'Your email is not valid').not().isEmpty(),
//     check('password', 'Your password must be at least 5 characters').not().isEmpty(),
//   ],
//   function (req, res) {
//     const errors = validationResult(req);
//     console.log(req.body);

//     if (!errors.isEmpty()) {
//       return res.status(422).jsonp(errors.array());
//     } else {
//       res.send({});
//     }
//   });


router.post('/',(req,res)=>{
    let cust=new Customer({
    cust_id:req.body.cust_id,
     cust_name:req.body.cust_name,
     email:req.body.email,
     password:req.body.password,
     phone_no:req.body.phone_no,
     address:req.body.address
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
  

//update Customer

    router.put('/:cust_id',function(req,res){
    const {cust_id}=req.params;
     Customer.findOneAndUpdate({cust_id},req.body,function(err,data){
        if(err){
            console.log('Error in get employee by id'+err)
       }
        else{
            res.send(data);
        }
     });
    
});

// Delete Customer
router.delete('/:cust_no',(req,res)=>{
    const {cust_no}=req.params;
     Customer.findOneAndRemove({cust_no},(err,doc)=>{
        if(err){
            console.log('Error in delete employee by id'+err)
       }
        else{
            res.send(doc);
        }
     });
    
});

//get account details by using cust_name
router.get('/search/:key',async(req,res)=>{
    console.log(req.params.key)
    let data=await Customer.find({
        "$or":[
            {
                "cust_name":{
                    $regex:req.params.key
                }}
                                       
        ]
    })
    res.send(data)
})

router.post('/check', function(req, res, next) {
    Customer.findOne({email:req.body.email,password:req.body.password}).then(data=>{
  if(data){
    // res.status(200).json(data)
    res.json({
        message:'Login Succesfull!',
        // token
        
    })
  }else{
    res.status(401).json({error:"incorrect email or password"})
    console.log("error in adding")
  }
    }).catch(err=>{
      res.status(500).json({error:err.message})
      console.log("catch error")
    })
      
    
  })

module.exports=router;





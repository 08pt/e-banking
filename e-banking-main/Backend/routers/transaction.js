const express=require('express');
const ObjectId = require('mongoose').Types.ObjectId;

const router=express.Router();
const Transaction = require('../models/transaction');

const {check, validationResult} = require('express-validator/check');

 
// get Single transaction details  by id

router.get('/:transaction_id',(req,res)=>{
    const{transaction_id}=req.params;
    
     Transaction.findOne({transaction_id},function(err,data){
        if(err){
            console.log('Error i Post Data'+err)
       }
        else{
            res.send(data);
        }
        })
     })
   

// Get Transaction details

router.get('/',(req,res)=>{
Transaction.find((err,doc)=>{
       if(err){
            console.log('Error i Post Data'+err)
        }
       else{
            res.send(doc);
        }
    });

});



// ... router.get ...

router.post('/', [
    check('transaction_amount').not().isEmpty().withMessage('Transaction Amount  must have more than 6  characters'),
    check('classYear', 'Class Year should be a number').not().isEmpty(),
    check('weekday', 'Choose a weekday').optional(),
    check('email', 'Your email is not valid').not().isEmpty(),
    check('password', 'Your password must be at least 5 characters').not().isEmpty(),
  ],
  function (req, res) {
    const errors = validationResult(req);
    console.log(req.body);

    if (!errors.isEmpty()) {
      return res.status(422).jsonp(errors.array());
    } else {
      res.send({});
    }
  });

// Add Account

router.post('/',(req,res)=>{
    let txn=new Transaction({
        transaction_id:req.body.transaction_id,
        transaction_type:req.body.transaction_type,
        from_account_no:req.body.from_account_no,
        to_account_no:req.body.to_account_no,
        transaction_amount:req.body.transaction_amount,
        transaction_date:req.body.transaction_date

     
    });
    txn.save((err,doc)=>{
        if(err){
            console.log('Error i Post Data'+err)
        }
        else{
            res.send(doc)
        }
    });
});
router.get('/search/:key',async(req,res)=>{
    console.log(req.params.key)
    let data=await Transaction.find({
        "$or":[
            {
                "transaction_type":{
                    $regex:req.params.key
                }}
                                       
        ]
    })
    res.send(data)
})

router.put('/:transaction_id',function(req,res){
    const {transaction_id}=req.params;
    Transaction.findOneAndUpdate({transaction_id},req.body,function(err,data){
        if(err){
            console.log('Error in get transaction by id'+err)
       }
        else{
            res.send(data);
        }
     });
    
});

// Delete transaction
router.delete('/:transaction_id',(req,res)=>{
    const {transaction_id}=req.params;
    Transaction.findOneAndRemove({transaction_id},(err,doc)=>{
        if(err){
            console.log('Error in delete employee by id'+err)
       }
        else{
            res.send(doc);
        }
     });
    
});



module.exports  =   router;

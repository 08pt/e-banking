const mongoose = require('mongoose');

var admin = mongoose.model('admin',{
    username:{type:String},
   
    password:{type:String}
})

module.exports = {admin}
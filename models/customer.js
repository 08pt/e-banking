//The models folder, will contain the files 
//which will define the MongoDB schema



// models/customer.js
const mongoose = require("mongoose");

const CustomerSchema = new mongoose.Schema({
    customer_id: {
        type: Number,
        required: true,
    },
    customer_name: {
        type:String,
    },
    customer_address: {
        type:String,
    },
    customer_phone_no: {
        type:Number,
    }

    
});

const Customer = mongoose.model("customer", CustomerSchema);

module.exports = Customer;
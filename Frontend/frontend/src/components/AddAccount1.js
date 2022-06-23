import React, { useState } from "react";
import axios from 'axios'
 
const AddAccount = () => {

  const [user, setUser] = useState({
    account_no : "",
    holder_name : "",
    balance : "",
    account_type : "",
    phone_no:"",
    account_pin:"",
    customer_id:"",
    ifsc_code:"",
    date:""
  });
 
  const { account_no, holder_name, balance,account_type,phone_no,account_pin,customer_id,ifsc_code,date} = user;
   
  const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
   
  const onSubmit = async e => {
    e.preventDefault();
    await axios.post("http://localhost:3000/account/",user);
    alert('Data Inserted successfully');

  };
  return (
    <div className="container bg-light">
      <div className="row">  
       <div className="col-sm-4 mx-auto shadow p-5">
        <h2 className="text-center mb-4">ADD ACCOUNT DETAILS</h2>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <input
              type="number"
              className="form-control form-control-lg"
              placeholder="Enter account number"
              name="account_no"
              value={account_no}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter holder Name"
              name="holder_name"
              value={holder_name}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="number"
              className="form-control form-control-lg"
              placeholder="Enter balance"
              name="balance"
              value={balance}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter account type"
              name="account_type"
              value={account_type}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="number"
              className="form-control form-control-lg"
              placeholder="Enter phone no"
              name="phone_no"
              value={phone_no}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="number"
              className="form-control form-control-lg"
              placeholder="Enter pin"
              name="account_pin"
              value={account_pin}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="number"
              className="form-control form-control-lg"
              placeholder="Enter customer id"
              name="customer_id"
              value={customer_id}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter IFSC code"
              name="ifsc_code"
              value={ifsc_code}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="date"
              className="form-control form-control-lg"
              placeholder="Enter date"
              name="date"
              value={date}
              onChange={e => onInputChange(e)}
            />
          </div>

          <button className="btn btn-primary btn-block">Add Account</button>
        </form>
      </div>
    </div>
  </div>  
  );
};
 
export default AddAccount;
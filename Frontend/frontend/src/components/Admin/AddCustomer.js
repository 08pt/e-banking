import React, { useState } from "react";
import axios from 'axios'
 
const AddCustomer = () => {

  const [user, setUser] = useState({
    cust_id : "",
    cust_name : "",
    email : "",
    password : "",
    phone_no:"",
    address:"",
    
  });
 
  const { cust_id, cust_name, email, password, phone_no, address} = user;
   
  const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
   
  const onSubmit = async e => {
    e.preventDefault();
    await axios.post("http://localhost:3000/customer/",user);
    alert('Data Inserted successfully');

  };
  return (
    <div className="container bg-light">
      <div className="row">  
       <div className="col-sm-4 mx-auto shadow p-5">
        <h2 className="text-center mb-4">ADD CUSTOMER DETAILS</h2>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <input
              type="number"
              className="form-control form-control-lg"
              placeholder="Enter customer id"
              name="cust_id"
              value={cust_id}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter customer name"
              name="cust_name"
              value={cust_name}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter email"
              name="email"
              value={email}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control form-control-lg"
              placeholder="Enter password"
              name="password"
              value={password}
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
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter address"
              name="address"
              value={address}
              onChange={e => onInputChange(e)}
            />
          </div>
          

          <button className="btn btn-primary btn-block">Add Customer</button>
        </form>
      </div>
    </div>
  </div>  
  );
};
 
export default AddCustomer;
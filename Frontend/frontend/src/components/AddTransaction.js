import React, { useState } from "react";
import axios from 'axios'
 
const AddTransaction = () => {

  const [user, setUser] = useState({
    transaction_id : "",
    transaction_type : "",
    from_account_no: "",
    to_account_no: "",
    transaction_amount:"",
    transaction_date:"",
    
  });
 
  const { transaction_id,transaction_type,from_account_no,to_account_no, transaction_amount,transaction_date} = user;
   
  const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
   
  const onSubmit = async e => {
    e.preventDefault();
    await axios.post("http://localhost:3000/transaction/",user);
    alert('Data Inserted successfully');

  };
  return (
    <div className="container bg-light">
      <div className="row">  
       <div className="col-sm-4 mx-auto shadow p-5">
        <h2 className="text-center mb-4">ADD TRANSACTION DETAILS</h2>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <input
              type="number"
              className="form-control form-control-lg"
              placeholder="Enter transaction id"
              name="transaction_id"
              value={transaction_id}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter transaction type"
              name="transaction_type"
              value={transaction_type}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="number"
              className="form-control form-control-lg"
              placeholder="Enter from account no"
              name="from_account_no"
              value={from_account_no}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="number"
              className="form-control form-control-lg"
              placeholder="Enter to account no"
              name="to_account_no"
              value={to_account_no}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="number"
              className="form-control form-control-lg"
              placeholder="Enter transaction amount"
              name="transaction_amount"
              value={transaction_amount}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="date"
              className="form-control form-control-lg"
              placeholder="Enter date"
              name="transaction_date"
              value={transaction_date}
              onChange={e => onInputChange(e)}
            />
          </div>
          

          <button className="btn btn-primary btn-block">Add Transaction
          </button>
        </form>
      </div>
    </div>
  </div>  
  );
};
 
export default AddTransaction;
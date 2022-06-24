import React,{Component, useState, useEffect } from "react";
import axios from "axios";
 
const ShowTransaction = () =>{
    const [transaction, setAccounts ] = useState([]);
    const {transaction_id, transaction_type, from_account_no, to_account_no, transaction_amount, transaction_date} = transaction;
    const transactionArray = Object.values(transaction);

    useEffect(() => {
        loadAccounts();
      }, []);

    const loadAccounts=async()=>{
        const res = await axios.get("http://localhost:3000/transaction");
        setAccounts(res.data);
    }




    return(
       <div>
        <table border="1">
            <tr>
                <th>Transaction Id</th>
                <th>Transaction Type</th>
                <th>From Account Number</th>
                <th>To Account Number</th>
                <th>Transaction Amount </th>
                <th>Transaction Date</th>
            </tr>
            <tbody>
                {transactionArray.map((user,index)=>(
                    <tr>
                  
                    <td>{user.transaction_id}</td>
                    <td>{user.transaction_type}</td>
                    <td>{user.from_account_no}</td>
                    <td>{user.to_account_no}</td>
                    <td>{user.transaction_amount}</td>
                    <td>{user.transaction_date}</td>
                    
                  </tr>
                ))}
            </tbody>
        </table>
       </div>

    )

};
 
export default ShowTransaction;
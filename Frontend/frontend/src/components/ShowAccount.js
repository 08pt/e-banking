import React,{Component, useState, useEffect } from "react";
import axios from "axios";
 
const ShowAccount = () =>{
    const [accounts, setAccounts ] = useState([]);
    const {account_no, holder_name, balance,account_type,phone_no,account_pin,customer_id,ifsc_code,date} = accounts;
    const accountsArray = Object.values(accounts);

    useEffect(() => {
        loadAccounts();
      }, []);

    const loadAccounts=async()=>{
        const res = await axios.get("http://localhost:3000/account");
        setAccounts(res.data);
    }
    //to delete
    function deleteacc(account_no){
        alert(account_no)
        fetch(`http://localhost:3000/account/${account_no}`,{
            method:'DELETE'
        }).then((res)=>{
            res.json().then((resp)=>{
                console.warn(resp)
            })
        })
    }
    




    return(
       <div>
        <table border="1">
            <tr>
                <th>Account No</th>
                <th>Holder Name</th>
                <th>Balance</th>
                <th>Account Type</th>
                <th>Phone No </th>
                <th>Account Pin</th>
                <th>Customer Id</th>
                <th>IFSC Code</th>
                <th>Date</th>
                <th>operations</th>

            </tr>
            <tbody>
                {accountsArray.map((user,index)=>(
                    <tr>
                  
                    <td>{user.account_no}</td>
                    <td>{user.holder_name}</td>
                    <td>{user.balance}</td>
                    <td>{user.account_type}</td>
                    <td>{user.phone_no}</td>
                    <td>{user.account_pin}</td>
                    <td>{user.customer_id}</td>
                    <td>{user.ifsc_code}</td>
                    <td>{user.date}</td>
                    <td><button onClick={()=>deleteacc(user.account_no)}>Delete Account</button></td>
                  </tr>
                ))}
            </tbody>
        </table>
       </div>

    )

};
 
export default ShowAccount;

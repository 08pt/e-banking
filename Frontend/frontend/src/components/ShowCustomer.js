import React,{Component, useState, useEffect } from "react";
import axios from "axios";
 
const ShowCustomer = () =>{
    const [customers, setAccounts ] = useState([]);
    const {cust_id, cust_name, email, password, phone_no, address} = customers;
    const customersArray = Object.values(customers);

    useEffect(() => {
        loadAccounts();
      }, []);

    const loadAccounts=async()=>{
        const res = await axios.get("http://localhost:3000/customer");
        setAccounts(res.data);
    }




    return(
       <div>
        <table border="1">
            <tr>
                <th>Customer Id</th>
                <th>Customer Name</th>
                <th>email</th>
                <th>Password</th>
                <th>Phone No </th>
                <th>Address</th>
            </tr>
            <tbody>
                {customersArray.map((user,index)=>(
                    <tr>
                  
                    <td>{user.cust_id}</td>
                    <td>{user.cust_name}</td>
                    <td>{user.email}</td>
                    <td>{user.password}</td>
                    <td>{user.phone_no}</td>
                    <td>{user.address}</td>
                    
                  </tr>
                ))}
            </tbody>
        </table>
       </div>

    )

};
 
export default ShowCustomer;
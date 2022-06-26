


// export default ShowCustomer;
import React,{Component, useState, useEffect } from "react";
import axios from "axios";
 
const ShowCustomer = () =>{
    const [customers, setCustomer ] = useState([]);
    const[search, setSearch]=useState([]);
    const {cust_id, cust_name, email, password, phone_no, address} = customers;
    const customersArray = Object.values(customers);

    useEffect(() => {
        loadAccounts();
      }, []);

    const loadAccounts=async()=>{
        const res = await axios.get("http://localhost:3000/customer");
        setCustomer(res.data);
        setSearch(res.data);
    }
    const onInputChange = e => {
    
        try {
        let searchKey = e.target.value;
        searchKey = searchKey.toLowerCase();
        console.log(searchKey);
        
        let filteredData = [];
        for (let i = 0; i < search.length; i++) {
          let cust_id = search[i].cust_id.toLowerCase();
          let cust_name = search[i].cust_name.toLowerCase();
          let email = search[i].email.toLowerCase();
          let phone_no = String(search[i].phone_no).toLowerCase();
        
          if (cust_id.includes(searchKey) || cust_name.includes(searchKey) || email.includes(searchKey) || phone_no.includes(searchKey)) {
              filteredData.push(search[i]);
          }
        }
        console.log(filteredData)
        setCustomer(filteredData);
        }
        catch(err) {
        console.error("Error in search");
        console.log(err);
        }
      }
        

       function deletecus(cust_id){
           alert(cust_id)
            fetch(`http://localhost:3000/customer/${cust_id}`,{
                   method:'DELETE'
            }).then((res)=>{
               res.json().then((resp)=>{
                  console.warn(resp)
            })
    })
}
return(
        
        <div>
        <div >
        <div>
        
        <div>
        <div style={{height:"40rem",backgroundColor:"rgba(29, 93, 122, 0.96)",width:"1000px",marginLeft:"12rem",marginTop:"2rem",boxShadow:" 5px 10px rgb(186, 181, 181)",  border: "10px solid rgb(157, 157, 190)"
}}>
        <div className="py-7 ">
         <h3 className="mb-3 text-center" style={{textAlign:"center" ,marginTop:"1.2rem",color:"bisque"}}>Customer Details</h3>

        <div style={{fontSize:22,fontWeight:500, letterSpacing:2, padding:20,width:"50%"}}>
          <input  style={{marginLeft:"22rem"}} class="form-control" type="text" placeholder="Search"  onChange={e => onInputChange(e)} aria-label="Search"></input>
        </div>
        <br />
        <table style={{backgroundColor:"white",marginLeft:"12rem", padding:".8rem"}} border={1} align="center">
          <thead className="thead-primary">
    
            <tr>
                <th>Customer Id</th>
                <th>Customer Name</th>
                <th>email</th>
                <th>Password</th>
                <th>Phone No </th>
                <th>Address</th>
                <th>Operations</th>
            </tr>
            </thead>
          
            <tbody>
                {customersArray.map((user,index)=>(
                    <tr>
                  
                    <td>{user.cust_id}</td>
                    <td>{user.cust_name}</td>
                    <td>{user.email}</td>
                    <td>{user.password}</td>
                    <td>{user.phone_no}</td>
                    <td>{user.address}</td>
                    <td><button onClick={()=>deletecus(user.cust_id)}>Delete Customer</button></td>
                    
                  </tr>
                ))}
            </tbody>
        </table>
       </div>
       </div>
       </div>
       </div>
       </div>
       </div>

    )

};
 
export default ShowCustomer;
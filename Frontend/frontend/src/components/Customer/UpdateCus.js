import React, { useState, useEffect } from "react";
import axios from 'axios';
import { NavLink, useNavigate } from 'react-router-dom';




const UpdateCustomer = () => {

    let navigate = useNavigate();
    const [cust_id, setID] = useState(null);
    const [cust_name, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [phone_no, setPhone] = useState(null);
    const [address, setAddress] = useState('');

    useEffect(() => {
        setID(localStorage.getItem('cust_id'))
        setUserName(localStorage.getItem('cust_name'));
        setPassword(localStorage.getItem('password'));
        setEmail(localStorage.getItem('email'));
        setPhone(localStorage.getItem('phone_no'));
        setPhone(localStorage.getItem('address'));
    }, []);

    const updateAPIData = () => {
        axios.put(`http://localhost:3000/customer/${cust_id}`, {
            cust_id,
            cust_name,
            password,
            email,
            phone_no,
            address
            
        }).then(() => {
            navigate('/')
        })
    }


    return (
        
        <div class="col-md-12 text-center">
        <section className="signup">
            <div className="container md-4">
                <div className="signup-content"> 
                    <div className="signup-form">
                        <h2 className="form-title">Customer  Update Form</h2>
                        <form >

                        <div className="form-group"> 
                                <input type="number" name="customer_id" id="customer_id" 
                                    value={cust_id}
                                    onChange={e=>setID(e.target.value)}
                                    placeholder="Customer Id"
                                />
                            </div>

                            <div className="form-group"> 
                                <input type="text" name="username" id="username" 
                                    value={cust_name}
                                    onChange={e=>setUserName(e.target.value)}                                    
                                    placeholder="Name"
                                />
                            </div>

                            <div className="form-group"> 

                                <input type="email" name="email" id="email" 
                                    value={email}
                                    onChange={e=>setEmail(e.target.value)}                                
                                    placeholder="Email ID"
                                />
                            </div>

                            <div className="form-group"> 

                                <input type="password" name="password" id="password" 
                                    value={password}
                                    onChange={e=>setPassword(e.target.value)}                                
                                    placeholder="Password"
                                />
                            </div>

                            <div className="form-group"> 
 
                                <input type="number" name="phone" id="phone" 
                                    value={phone_no}
                                    onChange={e=>setPhone(e.target.value)}                                
                                    placeholder="Phone No"
                                />
                            </div>
                            <div className="form-group"> 
 
                                <input type="text" name="address" id="address" 
                                    value={address}
                                    onChange={e=>setAddress(e.target.value)}                                
                                    placeholder="Address"
                                />
                            </div>
                            <button className="btn btn-primary btn-block"  onClick={updateAPIData}>Update</button>
                            <div class="container signin">
                              <p class="col-md-12 text-center">Already have an account? 
                              <NavLink to="/supplierlogin" className="btn btn-primary btn-block">
                                 <i class="bi bi-person-plus-fill"></i>Login
                              </NavLink>
                              </p>
                            </div>
                        </form>

                        <div>

                    </div>
                </div>
            </div>
            </div>
        </section>
        </div>
    )
}
export default UpdateCustomer;
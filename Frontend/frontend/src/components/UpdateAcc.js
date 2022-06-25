import React, { useState, useEffect } from "react";
import axios from 'axios';
import { NavLink, useNavigate } from 'react-router-dom';




const UpdateAccount = () => {

    let navigate = useNavigate();
    const [account_no, setAccountNumber] = useState(null);
    const [holder_name, setHolderName] = useState('');
    const [balance, setBalance] = useState('null');
    const [account_type, setAccountType] = useState('');
    const [phone_no, setPhone] = useState(null);
    const [account_pin, setAccountPin] = useState(null);
    const [customer_id, setCustomerId] = useState('null');
    const [ifsc_code, setIFSCCode] = useState('');
    const [date, setDate] = useState('');


    useEffect(() => {
        setAccountNumber(localStorage.getItem('account_no'))
        setHolderName(localStorage.getItem('holder_name'));
        setBalance(localStorage.getItem('balance'));
        setAccountType(localStorage.getItem('account_type'));
        setPhone(localStorage.getItem('phone_no'));
        setAccountPin(localStorage.getItem('account_pin'));
        setCustomerId(localStorage.getItem('customer_id'));
        setIFSCCode(localStorage.getItem('ifsc_code'));
        setDate(localStorage.getItem('date'));
    }, []);

    const updateAPIData = () => {
        axios.put(`http://localhost:3000/account/${account_no}`, {
            account_no,
            holder_name,
            balance,
            account_type,
            phone_no,
            customer_id,
            ifsc_code,
            date
            
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
                        <h2 className="form-title">Account Update Form</h2>
                        <form >

                        <div className="form-group"> 
                                <input type="number" name="account_no" id="account_no" 
                                    value={account_no}
                                    onChange={e=>setAccountNumber(e.target.value)}
                                    placeholder="Account number"
                                />
                            </div>

                            <div className="form-group"> 
                                <input type="text" name="holder_name" id="holder_name" 
                                    value={holder_name}
                                    onChange={e=>setHolderName(e.target.value)}                                    
                                    placeholder="Account Holder Name"
                                />
                            </div>

                            <div className="form-group"> 

                                <input type="number" name="balance" id="balance" 
                                    value={balance}
                                    onChange={e=>setBalance(e.target.value)}                                
                                    placeholder="Balance"
                                />
                            </div>

                            <div className="form-group"> 

                                <input type="text" name="account_type" id="account_type" 
                                    value={account_type}
                                    onChange={e=>setAccountType(e.target.value)}                                
                                    placeholder="Account Type"
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
 
                                <input type="number" name="account_pin" id="account_pin" 
                                    value={account_pin}
                                    onChange={e=>setAccountPin(e.target.value)}                                
                                    placeholder="Account PIn"
                                />
                            </div>
                            <div className="form-group"> 
 
                                <input type="number" name="customer_id" id="customer_id" 
                                    value={customer_id}
                                    onChange={e=>setCustomerId(e.target.value)}                                
                                    placeholder="Customer Id"
                                />
                            </div>
                            <div className="form-group"> 
 
                                <input type="text" name="ifsc_code" id="ifsc_code" 
                                    value={ifsc_code}
                                    onChange={e=>setIFSCCode(e.target.value)}                                
                                    placeholder="IFSC code"
                                />
                            </div>
                            <div className="form-group"> 
 
                                <input type="date" name="date" id="date" 
                                    value={date}
                                    onChange={e=>setDate(e.target.value)}                                
                                    placeholder="Date"
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
export default UpdateAccount;
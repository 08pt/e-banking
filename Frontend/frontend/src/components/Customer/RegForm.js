import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';

const Signup = ()  =>{
  const [user ,setUser] = useState({

    name :"" ,email:"",phone:"",password:"",cpassword:""})
    return(
      <>
      <section className='signup'>
        <div className='container mt-5'>
        <div className='signup-content'>
          <div className='signup-form'>
            <h2 className='form-title'>Sign Up</h2>
            <form className='reg-form' id='reg-form'>
              <div className='form-group'>
                <label htmlFor='name'></label>
              </div>

            </form>
          </div>
        </div>
          

        </div>

      </section>
      
      </>
    )



 
}
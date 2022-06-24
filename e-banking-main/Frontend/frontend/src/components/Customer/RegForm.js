// import React, { Component } from "react";
// import './style.css'



// const regularExpression = RegExp(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/);

// const validation = ({ error, ...rest }) => {
//   let checkValidation = false;

//   Object.values(error).forEach((val) => {
//     if (val.length > 0) {
//       checkValidation = false;
//     } else {
//       checkValidation = true;
//     }
//   });

//   Object.values(rest).forEach((val) => {
//     if (val === null) {
//       checkValidation = false;
//     } else {
//       checkValidation = true;
//     }
//   });

//   return checkValidation;
// };
//  class RegForm extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       name: "",

//       customerid: "",
//       age: "",
//       email: "",
//       phone: "",
//       address: "",
//       password: "",
//       cpassword: "",
//       check: "",
//       error: {
//         name: "",
//         customerid:"",
//         age:"",
//         email: "",
//         phone:"",
//         address:"",
//         password: "",
//         cpassword: ""
//       },
//     };
//   }


//   onFormSubmit = (event) => {
//     event.preventDefault();
//     alert(
//         `Entered First Name is: ${this.state.name},  Email Id is:${this.state.email}`
//       );

//     if (validation(this.state)) {
//       console.log(this.state);
//     } else {
//       console.log("Error occured");
//     }
//   };

//   formObject = (event) => {
//     event.preventDefault();

//     const { name, value } = event.target;
//     let error = { ...this.state.error };

//     switch (name) {
//       case "name":
//         error.name =
//           value.length < 5 ? "Name should be 5 characaters long" : "";
//         break;
   
//         case "customerid":
//             error.customerid =
//               value.length < 7   ? "Customer Id  should more than 6  digit" : "";
//             break;
//         case "age":
//         break;
        
//       case "email":
//         error.email = regularExpression.test(value) ? "" : "Email is not valid";
//         break;
//         case "phone":
//         error.phone =
//           value.length <= 10 ? "phone no should be 10 digits" : "";
//         break;
//         case "address":
//         error.address =
//           value.length < 5  ? "Adress should be 5 characters long " : "";
//         break;

//       case "password":
//         error.password =
//           value.length < 5 ? "Password should 5 characaters long" : "";
//         break;
//       case "cpassword":
//         error.cpassword =
//           value.length < 5 ? "Password should 5 characaters long" : "";
//         break;

//       default:
//         break;
//     }

//     this.setState({
//       error,
//       [name]: value,
//     });
//   };

//   render() {
//     const { error } = this.state;

//     return (

//       <div className="form">
//         <div>
//           <h2>Register</h2>
//           <form  onSubmit={this.onFormSubmit}>
//             <div className="input-container">
//               <label>
//                 <strong>Name</strong>
//               </label>
//               <input
//                 required
//                 type="text"
//                 name="name"
//                 onChange={this.formObject}
//                 className={
//                   error.name.length > 0
//                     ? "is-invalid form-control"
//                     : "form-control"
//                 }
//               />

//               {error.name.length > 0 && (
//                 <span className="invalid-feedback">{error.name}</span>
//               )}
//             </div>
//             <div className="input-container">
//               <label>
//                 <strong>Customer Id</strong>
//               </label>
//               <input
//                 required
//                 type="text"
//                 name="customerid"
//                 onChange={this.formObject}
//                 className={
//                   error.customerid.length >0
//                     ? "is-invalid form-control"
//                     : "form-control"
//                 }
//               />

//               {error.customerid.length > 6 &&(
//                 <span className="invalid-feedback">{error.customerid}</span>
//               )}
//             </div>
//             <div className="input-container">
//               <label>
//                 <strong>Age</strong>
//               </label>
//               <input
//                 required
//                 type="number"
//                 name="age"
//                 onChange={this.formObject}
//                 className={
//                   error.age.length > 1 && error.age.length < 100
//                     ? "is-invalid form-control"
//                     : "form-control"
//                 }
//               />

//               {error.age.length > 0 &&  (
//                 <span className="invalid-feedback">{error.age}</span>
//               )}
//             </div>

//             <div className="input-container">
//               <label>
//                 <strong>Email</strong>
//               </label>
//               <input
//                 required
//                 type="email"
//                 name="email"
//                 className={
//                   error.email.length > 0
//                     ? "is-invalid form-control"
//                     : "form-control"
//                 }
//                 onChange={this.formObject}
//               />

//               {error.email.length > 0 && (
//                 <span className="invalid-feedback">{error.email}</span>
//               )}
//             </div>
//             <div className="input-container">
//               <label>
//                 <strong>Phone</strong>
//               </label>
//               <input
//                 required
//                 type="tel"
//                 name="name"
//                 onChange={this.formObject}
//                 className={
//                   error.phone.length > 0
//                     ? "is-invalid form-control"
//                     : "form-control"
//                 }
//               />

//               {error.phone.length > 0 && (
//                 <span className="invalid-feedback">{error.phone}</span>
//               )}
//             </div>
//             <div className="input-container">
//               <label>
//                 <strong>Address</strong>
//               </label>
//               <input
//                 required
//                 type="text"
//                 name="address"
//                 onChange={this.formObject}
//                 className={
//                   error.address.length > 0
//                     ? "is-invalid form-control"
//                     : "form-control"
//                 }
//               />

//               {error.address.length > 0 && (
//                 <span className="invalid-feedback">{error.address}</span>
//               )}
//             </div>

//             <div className="input-container ">
//               <label>
//                 <strong>Password</strong>
//               </label>
//               <input
//                 required
//                 type="password"
//                 name="password"
//                 className={
//                   error.password.length > 0
//                     ? "is-invalid form-control"
//                     : "form-control"
//                 }
//                 onChange={this.formObject}
//               />

//               {error.password.length > 0 && (
//                 <span className="invalid-feedback">{error.password}</span>
//               )}
//             </div>

//             <div className="input-container">
//               <label>
//                 <strong>Confirm Password</strong>
//               </label>
//               <input
//                 required
//                 type="password"
//                 name="password"
//                 className={
//                   error.cpassword.length > 0
//                     ? "is-invalid form-control"
//                     : "form-control"
//                 }
//                 onChange={this.formObject}
//               />

//               {error.cpassword.length > 0 && (
//                 <span className="invalid-feedback">{error.cpassword}</span>
//               )}
//             </div>

//             <div className="d-grid mt-3">
//               <input required type="checkbox" />
//               <label onChange={this.formObject}>
//                 I accept the Terms of Use and Privacy Policy
//               </label>
//               <br />
//               <br />

//               <button type="submit" className="btn btn-block btn-primary">
//                 Register Now
//               </button>
//             </div>
            

//           </form>
//         </div>
//       </div>
      
//     );
//   }
// }
// export  default RegForm



import { useState } from 'react';
 
export default function Form() {
 
  // States for registration
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
 
  // States for checking the errors
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
 
  // Handling the name change
  const handleName = (e) => {
    setName(e.target.value);
    setSubmitted(false);
  };
 
  // Handling the email change
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setSubmitted(false);
  };
 
  // Handling the password change
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setSubmitted(false);
  };
 
  // Handling the form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === '' || email === '' || password === '') {
      setError(true);
    } else {
      setSubmitted(true);
      setError(false);
    }
  };
 
  // Showing success message
  const successMessage = () => {
    return (
      <div
        className="success"
        style={{
          display: submitted ? '' : 'none',
        }}>
        <h1>User {name} successfully registered!!</h1>
      </div>
    );
  };
 
  // Showing error message if error is true
  const errorMessage = () => {
    return (
      <div
        className="error"
        style={{
          display: error ? '' : 'none',
        }}>
        <h1>Please enter all the fields</h1>
      </div>
    );
  };
 
  return (
    <div className="form">
      <div>
        <h1>User Registration</h1>
      </div>
 
      {/* Calling to the methods */}
      <div className="messages">
        {errorMessage()}
        {successMessage()}
      </div>
 
      <form>
        {/* Labels and inputs for form data */}
        <label className="label">Name</label>
        <input onChange={handleName} className="input"
          value={name} type="text" />
 
        <label className="label">Email</label>
        <input onChange={handleEmail} className="input"
          value={email} type="email" />
 
        <label className="label">Password</label>
        <input onChange={handlePassword} className="input"
          value={password} type="password" />
 
        <button onClick={handleSubmit} className="btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

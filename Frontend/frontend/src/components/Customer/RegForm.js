import React, { Component } from "react";
import './style.css'



const regularExpression = RegExp(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/);

const validation = ({ error, ...rest }) => {
  let checkValidation = false;

  Object.values(error).forEach((val) => {
    if (val.length > 0) {
      checkValidation = false;
    } else {
      checkValidation = true;
    }
  });

  Object.values(rest).forEach((val) => {
    if (val === null) {
      checkValidation = false;
    } else {
      checkValidation = true;
    }
  });

  return checkValidation;
};
 class RegForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",

      customerid: "",
      age: "",
      email: "",
      phone: "",
      address: "",
      password: "",
      cpassword: "",
      check: "",
      error: {
        name: "",
        customerid:"",
        age:"",
        email: "",
        phone:"",
        address:"",
        password: "",
        cpassword: ""
      },
    };
  }


  onFormSubmit = (event) => {
    event.preventDefault();
    alert(
        `Entered First Name is: ${this.state.name},  Email Id is:${this.state.email}`
      );

    if (validation(this.state)) {
      console.log(this.state);
    } else {
      console.log("Error occured");
    }
  };

  formObject = (event) => {
    event.preventDefault();

    const { name, value } = event.target;
    let error = { ...this.state.error };

    switch (name) {
      case "name":
        error.name =
          value.length < 5 ? "Name should be 5 characaters long" : "";
        break;
   
        case "customerid":
            error.customerid =
              value.length < 7   ? "Customer Id  should more than 6  digit" : "";
            break;
        case "age":
        break;
        
      case "email":
        error.email = regularExpression.test(value) ? "" : "Email is not valid";
        break;
        case "phone":
        error.phone =
          value.length <= 10 ? "phone no should be 10 digits" : "";
        break;
        case "address":
        error.address =
          value.length < 5  ? "Adress should be 5 characters long " : "";
        break;

      case "password":
        error.password =
          value.length < 5 ? "Password should 5 characaters long" : "";
        break;
      case "cpassword":
        error.cpassword =
          value.length < 5 ? "Password should 5 characaters long" : "";
        break;

      default:
        break;
    }

    this.setState({
      error,
      [name]: value,
    });
  };

  render() {
    const { error } = this.state;

    return (

      <div style={{marginLeft:"35rem",padding:"10px",boxShadow:"5px 8px 5px 7px grey",textAlign:"center",width:"30%",height:"100%",fontSize:"1.2rem",backgroundColor:"white"}}>
        <div>
          <h2 style={{color:"black"}}>Register</h2>
          <form  onSubmit={this.onFormSubmit}>
            <div  style={{fontSize:"1.2rem",fontWeight:"800"}} className="input-container">
              <label >
                <strong>Name</strong>
              </label>
              <input
                   style={{fontSize:"1.2rem",fontWeight:"400"}}

                required
                type="text"
                name="name"
                onChange={this.formObject}
                className={
                  error.name.length > 0
                    ? "is-invalid form-control"
                    : "form-control"
                }
              />

              {error.name.length > 0 && (
                <span className="invalid-feedback">{error.name}</span>
              )}
            </div>
            <div style={{fontSize:"1.2rem",fontWeight:"800"}}className="input-container">
              <label>
                <strong>Customer Id</strong>
              </label>
              <input
   style={{fontSize:"1.2rem",fontWeight:"400"}}
 
                required
                type="text"
                name="customerid"
                onChange={this.formObject}
                className={
                  error.customerid.length >0
                    ? "is-invalid form-control"
                    : "form-control"
                }
              />

              {error.customerid.length > 6 &&(
                <span className="invalid-feedback">{error.customerid}</span>
              )}
            </div>
            <div className="input-container" style={{fontSize:"1.2rem",fontWeight:"800"}}>
              <label>
                <strong>Age</strong>
              </label>
              <input
          style={{fontSize:"1.2rem",fontWeight:"400"}}

                required
                type="number"
                name="age"
                onChange={this.formObject}
                className={
                  error.age.length > 1 && error.age.length < 100
                    ? "is-invalid form-control"
                    : "form-control"
                }
              />

              {error.age.length > 0 &&  (
                <span className="invalid-feedback">{error.age}</span>
              )}
            </div>

            <div className="input-container">
              <label>
                <strong>Email</strong>
              </label>
              <input
               style={{fontSize:"1.2rem",fontWeight:"400"}}
                required
                type="email"
                name="email"
                className={
                  error.email.length > 0
                    ? "is-invalid form-control"
                    : "form-control"
                }
                onChange={this.formObject}
              />

              {error.email.length > 0 && (
                <span className="invalid-feedback">{error.email}</span>
              )}
            </div>
            <div style={{fontSize:"1.2rem",fontWeight:"800"}}className="input-container">
              <label>
                <strong>Phone</strong>
              </label>
              <input
               style={{fontSize:"1.2rem",fontWeight:"400"}}
                required
                type="tel"
                name="name"
                onChange={this.formObject}
                className={
                  error.phone.length > 0
                    ? "is-invalid form-control"
                    : "form-control"
                }
              />

              {error.phone.length > 0 && (
                <span className="invalid-feedback">{error.phone}</span>
              )}
            </div>
            <div style={{fontSize:"1.2rem",fontWeight:"800"}}className="input-container">
              <label>
                <strong>Address</strong>
              </label>
              <input
               style={{fontSize:"1.2rem",fontWeight:"400"}}
                required
                type="text"
                name="address"
                onChange={this.formObject}
                className={
                  error.address.length > 0
                    ? "is-invalid form-control"
                    : "form-control"
                }
              />

              {error.address.length > 0 && (
                <span className="invalid-feedback">{error.address}</span>
              )}
            </div>

            <div style={{fontSize:"1.2rem",fontWeight:"800"}}className="input-container ">
              <label>
                <strong>Password</strong>
              </label>
              <input
              style={{fontSize:"1.2rem",fontWeight:"400"}}
                required
                type="password"
                name="password"
                className={
                  error.password.length > 0
                    ? "is-invalid form-control"
                    : "form-control"
                }
                onChange={this.formObject}
              />

              {error.password.length > 0 && (
                <span className="invalid-feedback">{error.password}</span>
              )}
            </div>

            <div className="input-container">
              <label>
                <strong>Confirm Password</strong>
              </label>
              <input
              style={{fontSize:"1.2rem",fontWeight:"400"}}
                required
                type="password"
                name="password"
                className={
                  error.cpassword.length > 0
                    ? "is-invalid form-control"
                    : "form-control"
                }
                onChange={this.formObject}
              />

              {error.cpassword.length > 0 && (
                <span className="invalid-feedback">{error.cpassword}</span>
              )}
            </div>

            <div className="d-grid mt-3">
              <input required type="checkbox" />
              <label style={{fontSize:"1.2rem"}}onChange={this.formObject}>
                I accept the Terms of Use and Privacy Policy
              </label>
              <br />
              <br />

              <button  style={{fontSize:"1.1rem",backgroundColor:"rgb(10,123,80)",cursor:"pointer"}} type="submit" className="btn btn-block btn-primary">
                Register Now
              </button>
            </div>
            

          </form>
        </div>
      </div>
      
    );
  }
}
export  default RegForm

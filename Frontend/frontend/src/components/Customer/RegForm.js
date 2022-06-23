import React, { Component } from "react";



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

export default class RegForm extends Component {
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
//    handleSubmit = (event) => {
//     alert(
//       `Entered First Name is: ${this.state.name},  Email Id is:${this.state.email}`
//     );
//    };

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
    //   case "customerid":
    //     error.customerid =
    //       value.length < 6   ? "Customer Id  should only  6  digit" : "";
    //     break;
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
      <div className="container main">
        <div className="card mt-5">
          <h2>Register</h2>
          <form className="card-body" onSubmit={this.onFormSubmit}>
            <div className="form-group mb-3">
              <label className="mb-2">
                <strong>Name</strong>
              </label>
              <input
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
            <div className="form-group mb-3">
              <label className="mb-2">
                <strong>Customer Id</strong>
              </label>
              <input
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
            <div className="form-group mb-3">
              <label className="mb-2">
                <strong>Age</strong>
              </label>
              <input
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

            <div className="form-group mb-3">
              <label className="mb-2">
                <strong>Email</strong>
              </label>
              <input
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
            <div className="form-group mb-3">
              <label className="mb-2">
                <strong>Phone</strong>
              </label>
              <input
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
            <div className="form-group mb-3">
              <label className="mb-2">
                <strong>Address</strong>
              </label>
              <input
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

            <div className="form-group mb-3 ">
              <label className="mb-2">
                <strong>Password</strong>
              </label>
              <input
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

            <div className="form-group mb-3">
              <label className="mb-2">
                <strong>Confirm Password</strong>
              </label>
              <input
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
              <label onChange={this.formObject}>
                I accept the Terms of Use and Privacy Policy
              </label>
              <br />
              <br />

              <button type="submit" className="btn btn-block btn-primary">
                Register Now
              </button>
            </div>

            {/* <input type="checkbox" value={this.state.check} onChange={this.checkHandler}/>
            <label  onChange={this.checkHandler}>I accept the Terms of Use & Privacy Policy</label><br/><br/>
            <input type="submit" value="Register Now" className="login" /><br/><br/> */}
          </form>
        </div>
      </div>
    );
  }
}

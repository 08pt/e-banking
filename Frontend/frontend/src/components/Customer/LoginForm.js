import React, { Component } from "react";

 const appStyle = {
     height: '250px',
     display: 'flex'
 };

const formStyle = {
    margin: 'auto',
    padding: '10px',
    border: '1px solid #c9c9c9',
    borderRadius: '5px',
    background: '#f5f5f5',
    width: '220px',
    display: 'block'
};

const labelStyle = {
    margin: '10px 0 5px 0',
    fontFamily: 'Arial, Helvetica, sans-serif',
    fontSize: '15px',
};

const inputStyle = {
    margin: '5px 0 10px 0',
    padding: '5px', 
    border: '1px solid #bfbfbf',
    borderRadius: '3px',
    boxSizing: 'border-box',
    width: '100%'
};

class LoginForm extends Component {
    handleSubmit = e => {
      e.preventDefault();
      console.log(e.target.email.value);
  
      if (!e.target.email.value) {
        alert("Email is required");
      } else if (!e.target.email.value) {
        alert("Valid email is required");
      } else if (!e.target.password.value) {
        alert("Password is required");
      } else if (
        e.target.email.value === "me@example.com" &&
        e.target.password.value === "123456"
      ) {
        alert("Successfully logged in");
        e.target.email.value = "";
        e.target.password.value = "";
      } else {
        alert("Wrong email or password combination");
      }
    };
  
    handleClick = e => {
      e.preventDefault();
  
      alert("Goes to registration page");
    };
  
    render() {
      return (
        <div className="App"style={appStyle}>
          <form  style={formStyle} className="form" onSubmit={this.handleSubmit}>
            <div className="input-group">
              <label htmlFor="email" style={labelStyle}>Email</label>
              <input type="email" name="email" style={inputStyle} placeholder="nome@email.com" />
            </div>
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" />
            </div>
            <button className="primary">login</button>
          </form>
       </div>  
      );
    }
  }
  
  export default LoginForm;
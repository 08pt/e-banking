import { Component } from "react";
// import { NavLink } from "react-router-dom";
import About from "./About/about";
import Contact from "./Contact/contact";
import Home from "./Home/home";
import { BiAnalyse, BiSearch } from "react-icons/bi";

// import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";



class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="nav">
          <ul className="btn">
            <Link className="nlink" to="/home">
              Home
            </Link>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Link className="nlink" to="/about">
              About Us
            </Link>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Link className="nlink" to="/contact">
              Contact Us
            </Link>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <Link className="nlink" to="/login">
              Log in
            </Link>
            &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
            <Link className="nlink" to="/registration">
              Sing up
            </Link>
            &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
            <Link style={{color:"red"}} className="nlink" to="/logout">
           Log out
            </Link>
            &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
          </ul>
        </nav>
      </div>
    );
  }
}

export default Navbar;

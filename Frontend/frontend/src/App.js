import React, { Component } from "react";
import { Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/home";
import About from "./components/About/about"
import LoginForm from "./components/Customer/LoginForm";
import Contact from "./components/Contact/contact";
import LogOut from "./components/LogOut/Logout";
import Navbar from "./components/Navbar copy";
import { Routes } from "react-router-dom";
import ShowAccount from "./components/ShowAccount";
import AddAccount from "./components/Account/account"
import SideBar from "./components/Sidebar/Sidebar";
import Footer from "./components/Footer";
import RegForm from "./components/Customer/RegForm";
import ShowCustomer from "./components/ShowCustomer";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />

        <SideBar>
          <Routes>
            <Route path="/home" element={<Home/>}></Route>
            <Route path="/about" element={<About/>}></Route>
            <Route path="/login" element={<LoginForm/>}></Route>
            <Route path="/contact" element={<Contact/>}></Route>
            <Route path="/registration" element={<RegForm/>}></Route>
            <Route path="/logout" element={<LogOut/>}></Route>
            <Route path="/addaccount" element={<AddAccount/>}></Route>
            <Route path="/showaccount" element={<ShowAccount />}></Route>
            <Route path="/searchCustomer" element={<ShowCustomer/>}></Route>

          </Routes>
        </SideBar>
        <Footer />
      </div>
    );
  }
}

export default App;

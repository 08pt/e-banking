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
import ShowAccount from "./components/Admin/ShowAccount";
import AddAccount from "./components/Admin/AddAccount1"
import SideBar from "./components/Sidebar/Sidebar";
import Footer from "./components/Footer";
import RegForm from "./components/Customer/RegForm";
import SearchCustomer from "./components/Customer/SearchCustomer";
import ShowTransaction from "./components/Transactions/ShowTransaction";
import AddTransaction from "./components/Transactions/AddTransaction";
import AddCustomer from "./components/Admin/AddCustomer";
import UpdateAccount from "./components/Account/UpdateAcc";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />

        <SideBar>
          <Routes>
            <Route exact path="/home" element={<Home/>}></Route>
            <Route path="/about" element={<About/>}></Route>
            <Route path="/login" element={<LoginForm/>}></Route>
            <Route path="/contact" element={<Contact/>}></Route>
            <Route path="/registration" element={<RegForm/>}></Route>
            <Route path="/logout" element={<LogOut/>}></Route>
            <Route path="/admin/addaccount" element={<AddAccount/>}></Route>
            <Route path="/admin/showaccount" element={<ShowAccount/>}></Route>
            <Route path="/admin/searchCustomer" element={<SearchCustomer/>}></Route>
            <Route path="/transaction/showtransaction" element={<ShowTransaction/>}></Route>
            <Route path="/transaction/addtransaction" element={<AddTransaction/>}></Route>
            <Route path="/admin/addcustomer" element={<AddCustomer/>}></Route>
            <Route path="/account/update" element={<UpdateAccount/>}></Route>

          </Routes>
        </SideBar>
        <Footer />
      </div>
    );
  }
}

export default App;

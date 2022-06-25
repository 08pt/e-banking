import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { useLocation, Routes, Route } from "react-router-dom";
import Home from './components/Home/home.js';
import About from './components/About/about.js';
import Contact from './components/Contact/contact.js';
import LoginForm from './components/Customer/LoginForm';

import './App.css';
import CustomerRegister from './components/Customer/RegForm';
 
class App extends Component {
  render() {
    return (
           <div className="App">
            <ul className="App-header">
             
                <Link  className='link'  to="/">Home</Link>
             
             
                <Link  className='link' to="/about">About Us</Link>
             
             
                <Link  className='link' to="/contact">Contact Us</Link>
             
             
                <Link  className='link' to="/login">Login</Link>
             
             
                <Link  className='link' to="/registration">Register</Link>
             
            </ul>
           <Routes>
                 <Route exact path='/' element={< Home />}></Route>
                 <Route exact path='/about' element={< About />}></Route>
                 <Route exact path='/contact' element={< Contact />}></Route>
                 <Route exact path='/login' element={ < LoginForm/>}></Route>
                 <Route exact path='/registration' element={ <CustomerRegister/> }></Route>

          </Routes>
          </div>
     
   );
  }
}
 
export default App;
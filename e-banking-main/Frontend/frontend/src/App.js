import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { useLocation, Routes, Route } from "react-router-dom";
import Home from './components/Home/home.js';
import About from './components/About/about.js';
import Contact from './components/Contact/contact.js';
import LoginForm from './components/Customer/LoginForm';
import RegForm from './components/Customer/RegForm';

import './App.css';
 
class App extends Component {
  render() {
    return (
           <div className="App">
            <ul className="App-header">


      
                <Link   className='a' to="/">Home</Link>
                <Link  className='a' to="/about">About Us</Link>
                <Link   className='a'   to="/contact">Contact Us</Link>
                <Link   className='a' to="/login">Login</Link>
                 <Link    className='a' to="/registration">Register</Link>
                 </ul>
           <Routes>
           <Route exacct  path='/login' element={ < LoginForm/>}></Route>
                <Route  path='/' element={< Home />}></Route>
                 <Route  path='/about' element={< About />}></Route>
                 <Route  path='/contact' element={< Contact />}></Route>
                 <Route  path='/registration' element={ < RegForm/> }></Route>

          </Routes>
          </div>
     
   );
  }
}
 
export default App;
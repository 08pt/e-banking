<<<<<<< HEAD
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { useLocation, Routes, Route } from "react-router-dom";
import Home from './components/Home/home.js';
import About from './components/About/about.js';
import Contact from './components/Contact/contact.js';
import LoginForm from './components/Customer/LoginForm.js';
import RegForm from './components/Customer/RegForm.js';

import './App.css';
 
class App extends Component {
  render() {
    return (
           <div className="App">
            <ul className="App-header">
             
                <Link  className='link'  to="/">Home</Link>
             
             
                <Link  className='link'to="/about">About Us</Link>
             
             
                <Link className='link'to="/contact">Contact Us</Link>
             
             
                <Link className='link'to="/login">Login</Link>
             
             
                <Link className='link'to="/registration">Register</Link>
             
            </ul>
           <Routes>
                 <Route exact path='/' element={< Home />}></Route>
                 <Route exact path='/about' element={< About />}></Route>
                 <Route exact path='/contact' element={< Contact />}></Route>
                 <Route exact path='/login' element={ < LoginForm/>}></Route>
                 <Route exact path='/register' element={ < RegForm/> }></Route>

          </Routes>
          </div>
     
   );
  }
=======

//import logo from './logo.svg';
import './App.css';
import { Route, Routes, useNavigate } from 'react-router-dom';
import ShowAccount from './components/ShowAccount';
import Router from './components/Router';
import AddAccount1 from './components/AddAccount1' ;

function App() {
  return (
    <div className="App">
      <Router/>
     <Routes>
     <Route path="/" element={<AddAccount1/>}/>
     <Route path="/showAccount" element={<ShowAccount/>}/>
     <Route path="/addAccount" element={<AddAccount1/>}/>
     
     </Routes>
    </div>
  );
>>>>>>> 2eebaa7ead6234d19efee5f4753c00314e25a115
}
 
export default App;
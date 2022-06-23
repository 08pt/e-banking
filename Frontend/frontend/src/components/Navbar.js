import { Component } from "react";
import { NavLink } from 'react-router-dom';

class Navbar extends Component{


    render(){

        let linkStyle={
            paddingRight:"20px"
            
        };
        return (

            <nav>
                <NavLink to="/addaccount" style={linkStyle}>Add Account</NavLink>
                <NavLink to="/showaccount" style={linkStyle}>Show Account</NavLink>
                
            </nav>

        );
  

    }

}

export default Navbar;
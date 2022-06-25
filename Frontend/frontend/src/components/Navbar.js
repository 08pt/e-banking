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
                <NavLink to="/addcustomer" style={linkStyle}>Add Customer</NavLink>
                <NavLink to="/showcustomer" style={linkStyle}>Show Customer</NavLink>
                <NavLink to="/addtransaction" style={linkStyle}>Add Transaction</NavLink>
                <NavLink to="/showtransaction" style={linkStyle}>Show Transaction</NavLink>
                
            </nav>

        );
  

    }

}

export default Navbar;

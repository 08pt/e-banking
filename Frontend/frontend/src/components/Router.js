import { Component } from "react";
import { NavLink } from 'react-router-dom';


class Router extends Component{


    render(){

        let linkStyle={
            paddingRight:"20px"
            
        };
        return (

            <nav>
                <NavLink to="/addAccount" style={linkStyle}>ADD ACCOUNT</NavLink>
                <NavLink to="/showAccount" style={linkStyle}>SHOW ACCOUNT</NavLink>
                <NavLink to="/addcustomer" style={linkStyle}>Add Customer</NavLink>
                <NavLink to="/showcustomer" style={linkStyle}>SHOW Customer</NavLink>
                <NavLink to="/addtransaction" style={linkStyle}>Add Transaction</NavLink>
                <NavLink to="/showtransaction" style={linkStyle}>SHOW Transaction</NavLink>
            </nav>

        );
  

    }

}

export default Router;

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
               
            </nav>

        );
  

    }

}

export default Router;
import React from 'react';
 
function About () {
    return( 
  
        <div style={{position:'relative',textAlign:"center",color:"black"}}>
        <img src='./images/about.jpg' style={{width:"100%"}}/>
        <div style={{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)"}}>The first online banking solution appeared in 1997 and by 2010 
        the majority of banks had implemented it. However, bank customers were slow to embrace the innovation and often preferred visiting bank offices rather than dealing with digital solutions. The beginning of 2020 has flipped things around and with the pandemic outbreak many bank customers started quickly switching to online banking, 
        discovering its capacity.!</div>
        
    </div>
    )
}
export default About;
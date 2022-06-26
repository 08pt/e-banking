import React from 'react';
 
function About () {
    return( 
  
        <div style={{position:'relative',textAlign:"center",color:"black"}}>
        <img src='./images/about.jpg' style={{width:"77%",height:"20%", marginTop:"2rem"}}/>
        <div style={{width:"50%",height:"30%",marginTop:"-20px",padding:"25px", fontSize:"1.2rem",lineSpacing:"10px",position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)",boxShadow:"0 4px 8px 0 rgba(0,0,120,0.2),0 6px 20px 0 rgba(0,0,0,0.19,),",color:"white",backgroundColor:"rgba(83,64,74,0.78)",
    }}><b>The first online banking solution appeared in 1997 and by 2010 
        the majority of banks had implemented it. However, bank customers were slow to embrace the innovation and often preferred visiting bank offices rather than dealing with digital solutions. The beginning of 2020 has flipped things around and with the pandemic outbreak many bank customers started quickly switching to online banking, 
        discovering its capacity.!</b></div>
        
    </div>
    )
}
export default About;
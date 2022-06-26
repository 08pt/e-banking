import React from 'react';

 
function Home (){
    return( 
  
    <div style={{position:'relative',textAlign:"center",color:"black"}}>
    <img src='./images/ebanking.jpg' style={{width:"100%",height:"800px"}}/>
    <div style={{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)"}}><h1>
    <marquee>Welcome to the world of E Banking!</marquee></h1><br/><strong style={{color:"whitesmoke" ,fontSize:"23px"}}> We are providing
    online banking services. User can  open account, show history ."It is an ubrella term for the process by which a customer may perform banking transactions electronically without visiting a brick-and mortar institution"</strong> </div>
    </div>

)
}
 
export default Home;
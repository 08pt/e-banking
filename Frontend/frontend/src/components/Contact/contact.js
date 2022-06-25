import React from 'react';

 
function Contact (){
 return(


 
  
    <div style={{position:'relative',textAlign:"center",color:"Blue"}}>
    <img src='./images/contact.jfif' style={{width:"100%"}}/>
    <div style={{position:"absolute",top:"10%",left:"50%",transform:"translate(-50%,-50%)"}}>


  
            <form style={{boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
backgroundColor:"grey", border:"2px  black solid",marginTop:"20rem" ,width:"200%",height:"250px"}}>
                <input  style={{fontSize:"1.1rem",padding:".3rem"}} type='text' placeholder='Full Name' required/><br/>
              <input   style={{fontSize:"1.1rem",padding:".3rem"}}type='email' placeholder=' Type Your E-Mail' required/><br/>
                <textarea  style={{marginLeft:".4rem" ,marginTop:".7rem",fontSize:"1.1rem",padding:".3rem"}} placeholder='Write Here.......' name='message'></textarea>
                <div className="button-container">
          <input type="submit" />
        </div>
            
            </form>
    </div>
  
        
</div>

)
 
}
 
export default Contact;
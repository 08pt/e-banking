// import React from 'react';

 
// function Contact (){
//  return(


 
  
//     <div style={{position:'relative',textAlign:"center",color:"Blue"}}>
//     <img src='./images/contact.jfif' style={{width:"100%"}}/>
//     <div style={{position:"absolute",top:"10%",left:"50%",transform:"translate(-50%,-50%)"}}>


  
//             <form style={{boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
// backgroundColor:"grey", border:"2px  black solid",marginTop:"20rem" ,width:"200%",height:"250px"}}>
//                 <input  style={{fontSize:"1.1rem",padding:".3rem"}} type='text' placeholder='Full Name' required/><br/>
//               <input   style={{fontSize:"1.1rem",padding:".3rem"}}type='email' placeholder=' Type Your E-Mail' required/><br/>
//                 <textarea  style={{marginLeft:".4rem" ,marginTop:".7rem",fontSize:"1.1rem",padding:".3rem"}} placeholder='Write Here.......' name='message'></textarea>
//                 <div className="button-container">
//           <input type="submit" />
//         </div>
            
//             </form>
//     </div>
  
        
// </div>

// )
 
// }
 
// export default Contact;

import React from "react";

function Contact() {
  return (
    <div class="container">
      <div class="content">
        <div class="left-side">
          <div class="address details">
            <i class="fas fa-map-marker-alt"></i>
            <div class="topic">Address</div>
            <div class="text-one">104,New palasia</div>
            <div class="text-two">Indore, MP</div>
          </div>

          <div class="phone details">
            <i class="fas fa-phone-alt"></i>
            <div class="topic">Phone</div>
            <div class="text-one">mo.:-98765-43210</div>
            <div class="text-two">Phone:-07355-625833</div>
          </div>
          <div class="email details">
            <i class="fas fa-envelope"></i>
            <div class="topic">Email</div>
            <div class="text-one">BankingApp@gmail.com</div>
            <div class="text-two">contact@gmail.com</div>
          </div>
        </div>
        <div class="right-side">
          <div class="topic-text">
            <h3>Contact Us</h3>
          </div>
          <p>Contact us, our team back to you soon...</p>
          <form action="#">
            <div class="input-box">
              <input  style={{marginTop:"-.1rem",marginLeft:"-.02rem"}}  type="text" placeholder="Enter your name" />
            </div>
            <div class="input-box">
              <input type="email" placeholder="Enter your email" />
            </div>

            <div class="input-box message-box">
              <div>
                <textarea
                  id="subject"
                  name="subject"
                  placeholder="Enter your Question here.."
                ></textarea>
              </div>
            </div>
            <button class="button">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
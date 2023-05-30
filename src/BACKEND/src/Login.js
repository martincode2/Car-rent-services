import React from 'react';
import './App2.css';
import user1 from './images/icons8-user-64.png';
//import user1 from "./images/user."
import email from './images/message.PNG';
import pass from './images/key-lock.PNG';


const  Login = () =>{
  return (
    <div className="main">
     <div className="sub-main">
<div>
<div className="container-image">
  <img src={user1} alt="user1" className="profile"/>

</div>
<div>
<div>
 <h1>Login Page</h1> 
 <div>
  <img src={email} alt="email" className="email"/>
 <input type="text" placeholder="Enter Your Email" className="name"/>
 </div>
 
 <div className="second">
  <img src={pass} alt="pass" className="pass"/>
  <input type="password" placeholder="Password" className="name"/>
 </div>
 <div className="button_login">
 <button>Login</button>
 </div>
 <div>
  <p className="link">
    <a href="#">Signin</a> or <a href="../BACKEND/Register">Signup</a>

  </p>
 </div>
</div>
  
     </div>
    </div>
    </div>
    </div>
    
  );
}

export default Login;


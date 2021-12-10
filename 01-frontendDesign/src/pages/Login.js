import React from 'react';

import {Link} from 'react-router-dom';

const Login =()=>{
  return (
    <div className="Login">
     <div className="RegisterContainer">
    <div className="container">
    <h1 className="title">Login Page</h1>
     <form action="#">
      <div className="user-details">
        <div className="input-box">
          <span className="details">Full Name</span>
          <input type="text" placeholder="Enter Name" required />
        </div>
        <div className="input-box">
          <span className="details">Username</span>
          <input type="text" placeholder="Enter Username" required />
        </div>
        <div className="input-box">
          <span className="details">Email</span>
          <input type="email" placeholder="Enter Email" required />
        </div>
               <div className="input-box">
          <span className="details">Type Of User</span>
          <select name="TypeOfUser" id="">
            <option value="">Normal User</option>
            <option value="">Company Personnel</option>
            <option value="">Company Admin</option>
          </select>
        </div>
        <div className="input-box">
          <span className="details">Password</span>
          <input type="password" placeholder="Enter Password" required />
        </div>
      </div>

      <div className="btn">
       Login
      </div>
      <br/>
      <br/>
      <br/>
    <Link to="/" className="btn">Do not have an account?Register</Link>

     </form>

    
    </div>
     
     
    </div>


    </div>
  );
}

export default Login;

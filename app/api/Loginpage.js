"use client"
import React, { useState } from 'react'
// import 'app\login.css'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
function Loginpage() {
  const [username, setUsername] = useState('');
const [password, setPassword] = useState('');

const handleSubmit = async (e) => {
  e.preventDefault();

  const response = await fetch('\api\auth', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, password }),
  });

  const data = await response.json();
  alert(data.message);
};



  return (
    <>
      {/* <form onSubmit={handleSubmit}>
  <input
    type="text"
    placeholder="Username"
    value={username}
    onChange={(e) => setUsername(e.target.value)}
  />
  <input
    type="password"
    placeholder="Password"
    value={password}
    onChange={(e) => setPassword(e.target.value)}
  />
  <button type="submit">Login</button>
</form> */}
<div className="container m-auto ">
  <input type="checkbox" id="flip" />
  <div className="cover">
    <div className="front">
      <img src="header1.jpeg" alt="" />
      <div className="text">
        <span className="text-1">
          Every new friend is a <br /> new adventure
        </span>
        <span className="text-2">Let's get connected</span>
      </div>
    </div>
    <div className="back">
      {/*<img class="backImg" src="images/backImg.jpg" alt="">*/}
      <div className="text">
      
        <span className="text-1">
          Complete miles of journey <br /> with one step
        </span>
        <span className="text-2">Let's get started</span>
      </div>
    </div>
  </div>
  <div className="forms">
    <div className="form-content">
      <div className="login-form">
        <div className="title">Login</div>
        <form action="/home">
          <div className="input-boxes">
            <div className="input-box">
            <EmailOutlinedIcon sx={{color:'blue'}} />
              <input type="text" placeholder="Enter your email" required="" />
            </div>
            <div className="input-box">
             <LockOutlinedIcon sx={{color:'blue'}} />
              <input
                type="password"
                placeholder="Enter your password"
                required=""
              />
            </div>
            <div className="text">
              <a href="#">Forgot password?</a>
            </div>
            <div className="button input-box">
              <input type="submit" defaultValue="Sumbit" />
            </div>
            <div className="text sign-up-text">
              Don't have an account? <label htmlFor="flip">Sigup now</label>
            </div>
          </div>
        </form>
      </div>
      
    </div>
  </div>
</div>



    </>
  )
}

export default Loginpage;
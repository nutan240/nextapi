"use client"
import React, { useState } from 'react'
// import 'app\login.css'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Router } from '@mui/icons-material';
import { useRouter } from 'next/navigation';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../components/firebase/Firebase';
function Loginpage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const router = useRouter();

const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setErrorMsg('Fill in all fields');
      return;
    }

    setErrorMsg('');

    try {
      const res = await signInWithEmailAndPassword(auth, email, password);
      const user = {
        uid: res.user.uid,
        email: res.user.email,
        // Add other user data as needed
      };
      localStorage.setItem('user', JSON.stringify(user));
      router.push('home'); // Redirect to home page upon successful login
    } catch (err) {
      setErrorMsg(err.message);
      console.error('Error during login:', err.message);
    }
  };


  return (
    <>
      
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
        <form onSubmit={handleSubmit}>
              <div className="input-boxes">
                <div className="input-box">
                  <EmailOutlinedIcon sx={{ color: 'blue' }} />
                  <input
                    type="text"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="input-box">
                  <LockOutlinedIcon sx={{ color: 'blue' }} />
                  <input
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <div className="text">
                  <a href="#">Forgot password?</a>
                </div>
                <div className="button input-box">
                  <input type="submit" value="login" />
                </div>
                <div className="text sign-up-text">
                  Don't have an account?{' '}
                  <span onClick={() => router.push('/signup')}>Signup now</span>
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
"use client"
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { createUserWithEmailAndPassword } from 'firebase/auth';
// import { addDoc, collection } from 'firebase/firestore';
import { auth , usersCollection } from '../components/firebase/Firebase';
import './signup.css'
import { addDoc, collection } from 'firebase/firestore';

function Page() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [errorMsg, setErrorMsg] = useState('');
  const [pending, setPending] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const { name, email, password, confirmPassword } = formData;
  
    if (password !== confirmPassword) {
      setErrorMsg('Passwords do not match');
      return;
    }
  
    try {
      setPending(true);
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
  
      const usersCollectionRef = collection(firestore, 'users');
      await addDoc(usersCollectionRef, {
        name,
        email,
      });
  
      localStorage.setItem('user', JSON.stringify(user));
      setPending(false);
  
      // Navigate to home page after successful registration
      router.push('/');
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        setErrorMsg('Email is already in use. Please login or use a different email.');
      } else {
        setErrorMsg(error.message);
      }
      console.error('Error during registration:', error);
      setPending(false);
    }
  };
  
  

  return (
    <div className="wrapper">
      <h2>Registration</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-box">
          <input type="text" name="name" placeholder="Enter your name" value={formData.name} onChange={handleChange} required />
        </div>
        <div className="input-box">
          <input type="text" name="email" placeholder="Enter your email" value={formData.email} onChange={handleChange} required />
        </div>
        <div className="input-box">
          <input type="password" name="password" placeholder="Create password" value={formData.password} onChange={handleChange} required />
        </div>
        <div className="input-box">
          <input type="password" name="confirmPassword" placeholder="Confirm password" value={formData.confirmPassword} onChange={handleChange} required />
        </div>
        <div className="input-box button">
          <input type="submit" value="Register Now" disabled={pending} />
        </div>
        <div className="text">
          <h3 className='cursor-pointer' onClick={() => router.push('/')}>
            Already have an account? <span>Login now</span>
          </h3>
        </div>
      </form>
      {/* {errorMsg && <div className="error-msg">{errorMsg}</div>} */}
    </div>
  );
}

export default Page;

import React, { useState } from 'react'
import axios from 'axios'
import './register.css'
const Register = () => {
  const [username,setUsername] =useState("");
  const [email,setEmail]=useState("")
  const [phone,setPhone] =useState("")
  const [password,setPassword]=useState("")
  const amount=0;



  const handleSubmit=async(e)=>{
    e.preventDefault();
    try{
      const res=await axios.post("http://localhost:5000/api/auth/register",{
        username,
        email,
        phone,
        amount,
        password
      })
      console.log(res.data)
      res.data && window.location.replace("/SingleTransfer/"+res.data._id)

    }catch(err){
      console.log(err)
    }
  }


  return (
    <div className='register'>
      <span className='registerTitle'>Register</span>
      <form className='registerForm' onSubmit={handleSubmit}>
        <label>Username</label>
        <input className='registerInput' type='text' 
          placeholder='Enter your usernmae'
          onChange={e=>setUsername(e.target.value)}>
        </input>
        <label>Email</label>
        <input className='registerInput' type='text' 
          placeholder='Enter your email'
          onChange={e=>setEmail(e.target.value)}>
        </input>
        <label>Phone</label>
        <input className='registerInput' type='tel' 
          placeholder='Enter your phone'
          onChange={e=>setPhone(e.target.value)}>
        </input>
        <label>Password</label>
        <input className='registerInput' type='password' 
          placeholder='Enter your password'
          onChange={e=>setPassword(e.target.value)}>
        </input>
        <button className="registerButton" type='submit'>Register</button>
      </form>
      
    </div>
  )
}

export default Register

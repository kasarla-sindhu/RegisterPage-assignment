import React, { useState } from 'react'
import './Login.css'
import { Link, useNavigate } from 'react-router-dom'
import { FaUsers } from "react-icons/fa";

const Login = () => {
    const [user_email,setmail]=useState('')
    const[user_password,setpassword]=useState('')
    const[isUser,setIsUser]=useState(false)
    const navigate=useNavigate()

    const onSuccess=(userData)=>{
        const userInfo=JSON.stringify(userData[0])
        localStorage.setItem("userDetails",userInfo)
        navigate("/dashboard")
        setIsUser(false)
    }

    const onFailure=()=>{
        console.log('no userfound')
        setIsUser(true)
    }

    const login=async(event)=>{
        event.preventDefault()
        const userdetails={user_email,user_password}
        const url=' https://syoft.dev/Api/userlogin/api/userlogin'
        const options={
            method:'POST',
            body:JSON.stringify(userdetails),
        }

        const response=await fetch(url,options)
        const resobj=await response.json()
        console.log(resobj)
        if(resobj.status===true){
            onSuccess(resobj.user_data)
        }
        else{
            onFailure()
        }
    }


  return (
    <div className='bg-container'>
        <div className='left-con'>
            <FaUsers className='logo' />
            <h1>Welcome</h1>
            <p>Join the community of developers-Syoft</p>
        </div>
        <form className="login-card-con" onSubmit={login}>
            <div className="input-con">
                <label htmlFor='mail'>Email Id</label>
                <input required onChange={(event)=>setmail(event.target.value)} type="text" value={user_email} placeholder='Enter Your Mail' id='mail'/>      
            </div>
            <div className="input-con">
                <label htmlFor='password'>Password</label>
                <input onChange={(event)=>setpassword(event.target.value)} required type="password" value={user_password} placeholder='Enter Your Password' id='password'/>
                <div className='checkbox-con'>
                    <input required id='show' type="checkbox" />
                    <label htmlFor='show'>Show Password</label>
                </div>
            </div>
            <button type='submit'>Login</button>
            <div className='signup-con'>
                <p>Don't have an account? <Link to="/register"><span>Sign Up</span></Link></p>
            </div>
            {isUser?<p className='err'>Invalid Credential</p>:''}
        </form>
    </div>
  )
}

export default Login
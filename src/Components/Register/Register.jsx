import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Register.css'
import { FaUsers } from "react-icons/fa";

const Register = () => {
    const [newUsers,setNewUser]=useState({
        user_firstname:'',
        user_email:'',
        user_password:'',
        user_phone:'',
        user_lastname:'Joe',
        user_city:'Hyderabad',
        user_zipcode:'505207'
    })

    const[status,setStatus]=useState('')
    const navigate=useNavigate()

    const onSuccess=(message)=>{
        setStatus(`User ${message}`)
        navigate('/')
    }

    const onFailure=(msg)=>{
        setStatus(`User ${msg}`)
    }
    const registerUser=async(event)=>{
        event.preventDefault()
        const url="https://syoft.dev/Api/user_registeration/api/user_registeration"
        const options={
            method:'POST',
            headers:{
                'Content-type':'application/json'
            },
            body:JSON.stringify(newUsers)
        }
        const response=await fetch(url,options)
        const responseObj=await response.json()
        console.log(responseObj)
        if(responseObj.status===true){
            onSuccess(responseObj.msg)
        }
        else{
            onFailure(responseObj.msg)
        }
    }

    const onchangeInput=(e)=>{
        const {name,value}=e.target
        setNewUser((prevData)=> ({...prevData,[name]:value}))
    }

  return (
    <div className='register-con'>
        <div className='left-reg-con'>
            <FaUsers className='logo' />
            <h1>Welcome....</h1>
            <p>Join the community of developers-Syoft</p>
        </div>
        <form onSubmit={registerUser} className='register-form'>
            <div className="input-con">
                <label htmlFor='fullname'>Full Name<span>*</span></label>
                <input onChange={onchangeInput} name='user_firstname' id='fullname' type="text" placeholder='Enter Name' value={newUsers.user_firstname} />
            </div>
            <div className="input-con">
                <label> Email<span>*</span></label>
                <input onChange={onchangeInput} name='user_email' type="email" placeholder='Enter Email' value={newUsers.user_email} />
            </div>
            <div className="input-con">
                <label htmlFor='password'>Password<span>*</span></label>
                <input onChange={onchangeInput} name='user_password' id='password' type="password" value={newUsers.user_password} placeholder='Enter Password' />
            </div>
            <div className="input-con">
                <label htmlFor='number'> Mobile No<span>*</span></label>
                <input onChange={onchangeInput} name='user_phone' id='number' type="tel" placeholder='Enter Number' value={newUsers.user_phone} />
            </div>
            <div className="input-terms-con">
                <input required id='terms' type="checkbox" placeholder='Enter Number' />
                <label htmlFor='terms'>I agree to the <span>Terms of service</span> and <span>Privacy Policy</span> </label>
            </div>

            <button type='submit'>SignUp</button>

            <p style={{color:'black'}}> {status}</p>
        </form>
    </div>
  )
}

export default Register
import React from 'react'
import './Dashboard.css'
import { FaUserCircle } from "react-icons/fa";

const Dashboard = () => {
  const userDetail=localStorage.getItem('userDetails')
  const detail=JSON.parse(userDetail)
  return (
    <div className='dashboard-con'>
      <nav className='nav-con'>
        <p>User Profile</p>
        <div>
          <FaUserCircle className='i' />
          <p>{detail.user_firstname}</p>
        </div>
      </nav>
      <div className='detail-container'>
      <div className="info-con">
        <h1>Hello....<br/> Welcome to My Page </h1>
        <h2>I am {detail.user_firstname} {detail.user_lastname}</h2>
        <p>This is My profile page. You can see the details and address here.</p>
      </div>
      <div className="contact-con">
        <h1>Contact</h1>
        <div className="mail-con">
          <h1>Email :</h1>
          <p>{detail.user_email}</p>
        </div>
        <div className="mail-con">
          <h1>phone :</h1>
          <p>{detail.user_phone}</p>
        </div>
        <div className="mail-con">
          <h1>City :</h1>
          <p>{detail.user_city}</p>
        </div>
        <div className="mail-con">
          <h1>Zipcode :</h1>
          <p>{detail.user_zipcode}</p>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Dashboard
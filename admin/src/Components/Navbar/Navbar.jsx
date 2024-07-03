import React from 'react'
import './Navbar.css'
import navlogo from '../../assets/logo.jpg'
import navProfile from '../../assets/profileicon.png'

const Navbar = () => {
  return (
    <div className='navbar'>
       < img src={navlogo}  alt="logo" className="nav-logo"/>
       <img src={navProfile} className='nav-profile' alt='profileicon'/>
       
      
    </div>
  )
}

export default Navbar

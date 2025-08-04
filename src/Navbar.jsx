import React from 'react'
import './Navbar.css'
const Navbar = () => {
  return (
    <div className='navbar'>
      <img src="/logo2.svg" alt="" className='logo' />
      <nav>
        <ul>
          <li><a href="">Home</a></li>
          <li><a href="">About</a></li>
          <li><a href="">Contact</a></li>
        </ul>
      </nav>
      <a href="" className='sign-up'>Sign Up 🔎</a>
    </div>
  )
}

export default Navbar
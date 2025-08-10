import React from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='navbar'>
      <img src="/logo2.svg" alt="" className='logo' />
      <nav>
        <ul>
          <li className='list-content'><NavLink to='/' end className='section-nav'>Home</NavLink></li>
          <li className='list-content'><NavLink to='/movie' className='section-nav'>Movies</NavLink></li>
          <li className='list-content'><NavLink to='/tvshows' className='section-nav'>TV</NavLink></li>
          <li className='list-content'>Redeem</li>
        </ul>
      </nav>
      <NavLink href="" className='sign-up' to='/signin'>Sign In</NavLink>
    </div>
  )
}

export default Navbar
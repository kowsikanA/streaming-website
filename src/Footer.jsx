import React from 'react'

function Footer() {
  return (
    <div className='py-5 mt-md-5'>
      
      <div className='row row-cols-1 row-cols-sm-2 row-cols-md-6 py-5 my-1'>
        <div className="col mb-3">
         <ul className='flex-column'>
            <li><img src="/images/google_play_badge.svg" alt="" /></li>
            <li><img src="/images/App_Store_Badge.svg" alt="" width={180} /></li>
            <li><img src="/images/microsoft_badge.svg" alt="" width={180} className='rounded-3 border border-gray-900'/></li>
          </ul>
        </div>

        <div className="col mb-3">

        </div>

        
        <div className="col mb-3">
          {/* <h5 className='text-white'>Section</h5>
          <ul className='nav flex-column'>
            <li className='nav-item'><a href="" className='nav-link p-0 text-white'>Home</a></li>
            <li className='nav-item'><a href="" className='nav-link p-0 text-white'>About</a></li>
            <li className='nav-item'><a href="" className='nav-link p-0 text-white'>Contact</a></li>
            <li className='nav-item'><a href="" className='nav-link p-0 text-white'>Sign Up</a></li>
          </ul> */}
        </div>
        <div className="col mb-3">
          <h5 className='text-white'>My Account</h5>
          <ul className='nav flex-column'>
            <li className='nav-item'><a href="" className='nav-link p-0 text-white'>User</a></li>
            <li className='nav-item'><a href="" className='nav-link p-0 text-white'>Account</a></li>
            <li className='nav-item'><a href="" className='nav-link p-0 text-white'>Settings</a></li>
            <li className='nav-item'><a href="" className='nav-link p-0 text-white'>Manage Devices</a></li>
          </ul>
        </div>
         <div className="col mb-3">
          <h5 className='text-white'>Features</h5>
          <ul className='nav flex-column'>
            <li className='nav-item '><a href="" className='nav-link p-0 text-white'>Lists</a></li>
            <li className='nav-item '><a href="" className='nav-link p-0 text-white'>Family</a></li>
            <li className='nav-item '><a href="" className='nav-link p-0 text-white'>Disc to Digital</a></li>
          </ul>
        </div>

        <div className="col mb-3">
          <h5 className='text-white'>Help</h5>
          <ul className='nav flex-column'>
            <li className='nav-item'><a href="" className='nav-link p-0 text-white'>About Us</a></li>
            <li className='nav-item'><a href="" className='nav-link p-0 text-white'>Devices</a></li>
            <li className='nav-item'><a href="" className='nav-link p-0 text-white'>Support</a></li>
            <li className='nav-item'><a href="" className='nav-link p-0 text-white'>Contact Us</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer

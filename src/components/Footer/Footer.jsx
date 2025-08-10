import React from 'react'
import { NavLink } from 'react-router-dom'
function Footer() {
  return (
    <div className='py-0 mt-md-5'>

      <div className='row row-cols-1 row-cols-sm-2 row-cols-md-6 pt-5 mt-5 border-top'>
        <div className="col mb-3">
          <ul className='flex-column py-2'>
            <li className='py-2'><img src="/images/google_play_badge.svg" alt="" /></li>
            <li className='py-2'><img src="/images/App_Store_Badge.svg" alt="" width={180} /></li>
            <li className='py-2'><img src="/images/microsoft_badge.svg" alt="" width={180} height={65} className='rounded-3 ' /></li>
            <h5 className='text-center py-4 text-white' style={{
              fontSize:"15px",
              }}>Streamora © 2025</h5>
          </ul>
        </div>

        <div className="col mb-3"></div>
        <div className="col mb-3"></div>


        <div className="col mb-3">
          <h5 className='text-white'>Section</h5>
          <ul className='nav flex-column py-1 gap-3'>
            <li className='nav-item'><NavLink to='/'className='nav-link p-0 text-white'>Home</NavLink></li>
            <li className='nav-item'><NavLink to='/movie' className='nav-link p-0 text-white'>Movies</NavLink></li>
            <li className='nav-item'><NavLink to='/tvshows'className='nav-link p-0 text-white'>TV</NavLink></li>
            <li className='nav-item'><a href="" className='nav-link p-0 text-white'>Sign Up</a></li>
          </ul>
        </div>


        <div className="col mb-3">
          <h5 className='text-white'>My Account</h5>
          <ul className='nav flex-column px-4 gap-3'>
            <li className='nav-item'><a href="" className='nav-link p-0 text-white'>User</a></li>
            <li className='nav-item'><a href="" className='nav-link p-0 text-white'>Account</a></li>
            <li className='nav-item'><a href="" className='nav-link p-0 text-white'>Settings</a></li>
            <li className='nav-item'><a href="" className='nav-link p-0 text-white'>Manage Devices</a></li>
          </ul>
        </div>
        {/* <div className="col mb-3">
          <h5 className='text-white'>Features</h5>
          <ul className='nav flex-column px-4'>
            <li className='nav-item '><a href="" className='nav-link p-0 text-white'>Lists</a></li>
            <li className='nav-item '><a href="" className='nav-link p-0 text-white'>Family</a></li>
            <li className='nav-item '><a href="" className='nav-link p-0 text-white'>Disc to Digital</a></li>
          </ul>
        </div> */}

        <div className="col mb-3">
          <h5 className='text-white'>Help</h5>
          <ul className='nav flex-column px-4 gap-3'>
            <li className='nav-item'><a href="" className='nav-link p-0 text-white'>About Us</a></li>
            <li className='nav-item'><a href="" className='nav-link p-0 text-white'>Devices</a></li>
            <li className='nav-item'><a href="" className='nav-link p-0 text-white'>Support</a></li>
            <li className='nav-item'><a href="" className='nav-link p-0 text-white'>Contact Us</a></li>
          </ul>
        </div>


      </div>
      <div className="social d-flex gap-1 justify-content-end align-items-center" style={{paddingRight:"20px", marginBottom: "-30px"}} >
        {/*https://icons8.com/ for icons*/ }
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 48 48">
          <radialGradient id="yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1" cx="19.38" cy="42.035" r="44.899" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fd5"></stop><stop offset=".328" stop-color="#ff543f"></stop><stop offset=".348" stop-color="#fc5245"></stop><stop offset=".504" stop-color="#e64771"></stop><stop offset=".643" stop-color="#d53e91"></stop><stop offset=".761" stop-color="#cc39a4"></stop><stop offset=".841" stop-color="#c837ab"></stop></radialGradient><path fill="url(#yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1)" d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"></path><radialGradient id="yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2" cx="11.786" cy="5.54" r="29.813" gradientTransform="matrix(1 0 0 .6663 0 1.849)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#4168c9"></stop><stop offset=".999" stop-color="#4168c9" stop-opacity="0"></stop></radialGradient><path fill="url(#yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2)" d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"></path><path fill="#fff" d="M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5	s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z"></path><circle cx="31.5" cy="16.5" r="1.5" fill="#fff"></circle><path fill="#fff" d="M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12	C37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18z"></path>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 48 48">
          <path fill="#03A9F4" d="M42,12.429c-1.323,0.586-2.746,0.977-4.247,1.162c1.526-0.906,2.7-2.351,3.251-4.058c-1.428,0.837-3.01,1.452-4.693,1.776C34.967,9.884,33.05,9,30.926,9c-4.08,0-7.387,3.278-7.387,7.32c0,0.572,0.067,1.129,0.193,1.67c-6.138-0.308-11.582-3.226-15.224-7.654c-0.64,1.082-1,2.349-1,3.686c0,2.541,1.301,4.778,3.285,6.096c-1.211-0.037-2.351-0.374-3.349-0.914c0,0.022,0,0.055,0,0.086c0,3.551,2.547,6.508,5.923,7.181c-0.617,0.169-1.269,0.263-1.941,0.263c-0.477,0-0.942-0.054-1.392-0.135c0.94,2.902,3.667,5.023,6.898,5.086c-2.528,1.96-5.712,3.134-9.174,3.134c-0.598,0-1.183-0.034-1.761-0.104C9.268,36.786,13.152,38,17.321,38c13.585,0,21.017-11.156,21.017-20.834c0-0.317-0.01-0.633-0.025-0.945C39.763,15.197,41.013,13.905,42,12.429"></path>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 48 48">
          <path fill="#FF3D00" d="M43.2,33.9c-0.4,2.1-2.1,3.7-4.2,4c-3.3,0.5-8.8,1.1-15,1.1c-6.1,0-11.6-0.6-15-1.1c-2.1-0.3-3.8-1.9-4.2-4C4.4,31.6,4,28.2,4,24c0-4.2,0.4-7.6,0.8-9.9c0.4-2.1,2.1-3.7,4.2-4C12.3,9.6,17.8,9,24,9c6.2,0,11.6,0.6,15,1.1c2.1,0.3,3.8,1.9,4.2,4c0.4,2.3,0.9,5.7,0.9,9.9C44,28.2,43.6,31.6,43.2,33.9z"></path><path fill="#FFF" d="M20 31L20 17 32 24z"></path>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 48 48">
          <path fill="#0288D1" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"></path><path fill="#FFF" d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"></path>
        </svg>
      </div>
    </div>
  )
}

export default Footer

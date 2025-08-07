import React from 'react'
import {Outlet} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'

function Layout() {
  return (
    <div> 
      <Navbar/>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  )
}

export default Layout;

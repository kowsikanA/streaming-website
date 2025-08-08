import React from 'react'
import './About.css'

function About() {
  return (
    <div style={
      {
        display: "flex",
        flexDirection: "column",
        alignContent: "center",
        height: "100vh",
        padding: "40px"
      }
    }>
      <div className="top-btns">
        <div className="dropdown">
         <button  className="btn  dropdown-toggle" type="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded='false' style={{
          backgroundColor:"#1fd196",
          color: "white"
         }}>
          Filter
         </button>

         <ul className='dropdown-menu' aria-labelledby='dropdownMenuButton1'>
          <li><a className="dropdown-item" href="#">as </a></li>
          <li><a className="dropdown-item" href="#">as </a></li>
          <li><a className="dropdown-item" href="#">as </a></li>
         </ul>
        </div>
      </div>
    </div>
  )
}

export default About
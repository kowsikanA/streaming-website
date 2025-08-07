import React from 'react'
import './SignIn.css'

function SignIn() {
  return (
    <div style={{
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"

    }}>

      <div className="sign-up-container">
        <h3>Sign Up</h3>
        <div className='full-name'>
          <input type="text" name='First Name' value="First Name"/>
          <input type="text"name='Last Name' value="Last Name" />
        </div>

        <input type="text" />
      </div>

    </div>
  )
}

export default SignIn

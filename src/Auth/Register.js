import React from 'react'
import './Auth.css'

const Register = () => {
  return (
    <div className="register-container">
      <h1>Register</h1>
        <form className="register-form">
            <input type="text" placeholder="Username" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button type="submit">Register</button>
        </form>
    </div>
  )
}

export default Register

import React, { useRef, useState } from "react"
import './Login.css';
import { useAuth } from "../contexts/AuthContext"
import { Link } from "react-router-dom"

function ForgotPassword() {

    const emailRef = useRef()
    const { resetPassword } = useAuth()
    const [error, setError] = useState("")
    const [message, setMessage] = useState("")
    const [loading, setLoading] = useState(false)


  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setError("")
      setLoading(true)
      await resetPassword(emailRef.current.value)
      setMessage("Check your inbox for further instructions")
    } catch {
      setError("Failed to reset passwor")
    }

    setLoading(false)
  }
  return (


    <div className='login'>
      <h1>Password Reset</h1>
      {error && <div variant="danger">{error}</div>}
      {message && <div variant="success">{message}</div>}
        <form onSubmit={handleSubmit}>

          <div className="input-container">
            <label>Email </label>
            <input type="email" name="uname" ref={emailRef} required  placeholder="Enter Username" />
          
          </div>
         
          <div className="button-container">
            <input disabled={loading} type="submit"  />
          </div>
          <div>
          <Link to="/login">Login</Link>
          </div>
          <p>Not registered yet?</p><Link to="/signup">Sign Up</Link>
        </form>
    </div>
  )
}

export default ForgotPassword;
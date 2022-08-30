import React, { useRef, useState } from "react"
import './Login.css';
import { useAuth } from "../contexts/AuthContext"
import { Link} from "react-router-dom"
import { useNavigate } from 'react-router-dom';
function Login() {

  const emailRef = useRef()
  const passwordRef = useRef()
  const { login } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate();


  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setError("")
      setLoading(true)
      await login(emailRef.current.value, passwordRef.current.value)
      navigate('/home');
    } catch {
      setError("Failed to log in")
    }

    setLoading(false)
  }
  return (


    <div className='login'>
      <h1>Log In</h1>
      {error && <div variant="danger">{error}</div>}
        <form onSubmit={handleSubmit}>

          <div className="input-container">
            <label>Username/Email </label>
            <input type="email" name="uname" ref={emailRef} required  placeholder="Enter Username" />
          
          </div>
          <div className="input-container">
            <label>Password </label>
            <input type="password" name="pass" ref={passwordRef} required  placeholder="Enter password" />
        
          </div>
          <p className="forgot-password">
            Forgot <a href="/forgot-password">password?</a>
          </p>
          <div className="button-container">
            <input disabled={loading} type="submit"  />
          </div>
          <p>Not registered yet?</p><Link to="/signup">Sign Up</Link>
        </form>
    </div>
  )
}

export default Login;
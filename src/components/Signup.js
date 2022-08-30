import React, {useRef,useState} from 'react'
import './Login.css';
import {Link} from "react-router-dom" ;
import {useAuth} from '../contexts/AuthContext'
import { useNavigate } from 'react-router-dom';

 function Signup() {
  
  const emailRef = useRef();
  const nameRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const {signUp} = useAuth()
  const [error,setError] = useState('')
  const [loading,setLoading] = useState(false)
  const navigate = useNavigate();

  async function handleSubmit(e)
  {
    e.preventDefault()
    if(passwordRef.current.value !==
      passwordConfirmRef.current.value)
      return setError('Password do not match')
    
      try{
        setError("")
        setLoading(true)
        await  signUp(emailRef.current.value,passwordRef.current.value)
        navigate('/home');
      }
      catch{
        setError ('Failed to cretae an account')
      }
      setLoading(false)
  }
  return (
    <div className="Signup">
      <h1>Sign Up</h1>
      {error && <div>{error}</div>}
        <form onSubmit={handleSubmit}>
        <div className="input-container">
         <label>Name </label>
         <input type="text" name="uname" ref = {nameRef} placeholder="Enter name" required />
        
       </div>
       <div className="input-container">
         <label>Email </label>
         <input type="text" name="email"  ref = {emailRef} placeholder="Enter email" required />
        
       </div>
       <div className="input-container">
         <label>Password </label>
         <input type="password" ref = {passwordRef} name="pass" placeholder="Enter password" required />
         
       </div>
       <div className="input-container">
         <label>Confirm Password </label>
         <input type="password" ref = {passwordConfirmRef  } name="cpass" placeholder="Confirm password" required />
         
       </div>
       <div className="button-container">
         <input type="submit" disabled={loading} />
       </div>
       <p>Already registered ?</p><Link to ="/Login">Sign In</Link>
        </form>
    </div>
  )
}

export default Signup;
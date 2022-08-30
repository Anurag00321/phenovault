import React, {  useState } from "react"
import './Login.css';
import { useAuth } from "../contexts/AuthContext"
import { useNavigate } from 'react-router-dom';

export default function DashBoard() {
    const [error, setError] = useState("")
    const { currentUser, logout } = useAuth()
    const navigate = useNavigate();
  
  
    async function handleLogout(e) {
        setError("")
  
      try {
        await logout()
        
        navigate('/');
      } catch {
        setError("Failed to log out")
      }
  
    }
    return (
  
  
      <div className='login'>
        <h1>You are on Dashboard</h1>
        {error && <div variant="danger">{error}</div>}
        <strong>Email:</strong> {currentUser.email}
        
        <div >
           <button className="button"  onClick={handleLogout}>Log Out</button>
        </div>
      </div>
    )
}

import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaEnvelope, FaLock } from 'react-icons/fa';
import './Login.css';
import Footer from './Footer';

export default function Login() {
  const navigate = useNavigate();
  const [log, setLog] = useState({
    email: '',
    password: ''
  });

  const handleLog = (e) => {
    setLog({ ...log, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/users/login', log)
      .then(res => {
        alert(res.data.message);
        setTimeout(() => {
          navigate("/");
        }, 2000);
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <FaEnvelope className="icon" />
            <input 
              type="text" 
              name="email"  
              value={log.email} 
              onChange={handleLog} 
              placeholder="Email Address"
              required
            />
          </div>

          <div className="input-group">
            <FaLock className="icon" />
            <input 
              type="password" 
              name="password" 
              value={log.password} 
              onChange={handleLog} 
              placeholder="Password"
              required
            />
          </div>

          <button className="login-btn" type="submit">Login</button>
        </form>

        <p className="signup-link">
          Don't have an account? <span onClick={() => navigate('/signup')}>Sign Up</span>
        </p>
      </div>
      <Footer/>
    </div>
  );
}

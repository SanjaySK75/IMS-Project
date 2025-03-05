import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import "./Signup.css";
import Footer from "./Footer";

export default function Signup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://127.0.0.1:3001/users/signup", formData)
      .then((res) => {
        alert(res.data.message);
        setTimeout(() => {
          navigate("/login");
        }, 2000);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <FaUser className="icon" />
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Full Name"
              required
            />
          </div>

          <div className="input-group">
            <FaEnvelope className="icon" />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              required
            />
          </div>

          <div className="input-group">
            <FaLock className="icon" />
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              required
            />
          </div>

          <button className="signup-btn" type="submit">Create Account</button>
        </form>

        <p className="login-link">
          Already have an account? <span onClick={() => navigate("/login")}>Login</span>
        </p>
      </div>
      <Footer/>
    </div>
  );
}

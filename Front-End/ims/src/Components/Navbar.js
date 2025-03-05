import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
  return (
    <div className='navbar-container'>
        <nav className="navbar">
            <div className='nav-head'> 
                <img src='https://ik.imagekit.io/sk751508/Solo%20Project/Invent-removebg-preview.png?updatedAt=1740809555858' alt='' height='80px' width='80px'/>
            </div>
            <div className='nav-link'>
                <NavLink to='/' className="nav-btn">DashBoard</NavLink>
                <NavLink to='/product' className="nav-btn">Products</NavLink>
                <NavLink to='/categories' className="nav-btn">CategoryList</NavLink>
                <NavLink to='/orders' className="nav-btn">Orders</NavLink>
                <NavLink to='/signup' className="nav-btn">Signup</NavLink>
                <NavLink to='/login' className="nav-btn">Login</NavLink>
            </div>
        </nav>
    </div>
  )
}

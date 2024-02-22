import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <div className='nav'>
        <ul className='Nav'>
          <Link to="/"> <li>Home</li></Link>
          <Link to="/login"> <li>Login</li></Link>
          <Link to="/signup"><li>SignUp</li></Link>
          <Link to="/blog"><li>Blog</li></Link>
        </ul>
      </div>
    </div>
  )
}

export default Navbar

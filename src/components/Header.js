import React from 'react'
import { Link } from 'react-router-dom'
import "./style.css";


const Header = () => {
  return (
    <div className='header-wrapper'>
      <Link to="/"><span className="header">React Context API</span></Link>
      <ul className="nav">
        <li className="prod">
          <Link to="/">Home </Link>
        </li>
        <li className="prod1">
          <Link to="/cart">Cart </Link>
        </li>
      </ul>
    </div>
  )
}

export default Header
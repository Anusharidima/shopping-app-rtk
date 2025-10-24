import React from 'react'
import Cart from './Cart.jsx' 
import { Link } from 'react-router-dom'

function Header () {
  return (
    <div>
      <header className="header">
    <div className="logo">ShopEase</div>
    
    <nav className="nav-links">
      <ul>
        <li><Link to="/">Home</Link></li>
      </ul>
      {/* <a href="#">Home</a>
      <a href="#">Products</a>
      <a href="#">About</a>
      <a href="#">Contact</a> */}
    </nav>
      <Cart />
  </header>

  

 
    </div>
  )
}

export default Header
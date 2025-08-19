
import Link from 'next/link'
import React from 'react'
import CartIcon from '../CartIcon/CartIcon'
import SearchBar from '../SearchBar/SearchBar'


function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
          <Link className="navbar-brand" href="/">Quickart</Link>
          <div className=" collapse navbar-collapse">
          <ul className="navbar-nav me-auhref mb-2 mb-lg-0 me-5">
            <li className="nav-item"><Link className="nav-link" href="/">Home</Link></li>
            <li className="nav-item"><Link className="nav-link" href="/products">Products</Link></li>
            <li className="nav-item"><Link className="nav-link" href="/about-us">About Us</Link></li>
            <li className="nav-item"><Link className="nav-link" href="/contact-us">Contact Us</Link></li>
          </ul>
          <SearchBar />
        </div>
        <Link className="nav-link" href="/login" style={{ color:'white' }}>Login</Link>
      </div>
      <Link href="/cart" className="btn btn-outline-light me-2" >Cart<CartIcon /></Link>
    </nav>
    
    </div>
  )
}

export default Header

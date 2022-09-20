import React from 'react';
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm">
        <div className="container">
  <a className="navbar-brand fw-bold fs-4"  href="#">India's Fist Shopping</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button> 
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mx-auto">
      <li className="nav-item active">
        <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/products">Products</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/about">About</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/contact">Contact</a>
      </li>
    </ul>
    <div className="buttons">
        <a href="#" className="btn btn-outline-dark">
            <i className="fa fa-sign-in me-1"></i>Login</a>
        <a href="#" className="btn btn-outline-dark ms-2">
            <i className="fa fa-user-plus me-1"></i>Register</a>
         <a href="#" className="btn btn-outline-dark ms-2">
            <i className="fa fa-shopping-cart me-1"></i>Cart (0)</a>
    </div>
  </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar

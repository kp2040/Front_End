import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div>
      <div className="container-fluid position-relative p-0">
        <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
          <a href className="navbar-brand p-0">
            <h1 className="m-0"><i className="fa fa-map-marker-alt me-3" />Travela</h1>
            {/* <img src="img/logo.png" alt="Logo"> */}
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span className="fa fa-bars" />
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto py-0">
              <NavLink to='/' className="nav-item nav-link ">Home</NavLink>
              <NavLink to='/About' className="nav-item nav-link">About</NavLink>
              <NavLink to='/Services' className="nav-item nav-link">Services</NavLink>
              <NavLink to='/Packages' className="nav-item nav-link">Packages</NavLink>
              <NavLink to='/Blogs' className="nav-item nav-link">Blogs</NavLink>
              <div className="nav-item dropdown">
                <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                <div className="dropdown-menu m-0">
                  <NavLink to='/Destination' className="dropdown-item">Destination</NavLink>
                  <NavLink to='/Tour' className="dropdown-item">Explore Tour</NavLink>
                  <NavLink to='/Booking' className="dropdown-item">Travel Booking</NavLink>
                  <NavLink to='/Gallery' className="dropdown-item">Our Gallery</NavLink>
                  <NavLink to='/Guides' className="dropdown-item">Travel Guides</ NavLink>
                  <NavLink to='/Testimonial' className="dropdown-item">Testimonial</NavLink>
                </div>
              </div>
              <NavLink to='/contact' className="nav-item nav-link">Contact</NavLink>
            </div>
            <a href className="btn btn-primary rounded-pill py-2 px-4 ms-lg-4">Book Now</a>
          </div>
        </nav>
      </div>
    </div>

  )
}

export default Navbar

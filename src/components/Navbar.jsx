import React from 'react'

const Navbar = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-static navbar-dark bg-dark">
    <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <div className='container'>

     <ul className="nav  justify-content-center navbar-nav nav-underline">
  <li className="nav-item">
    <a className="nav-link "  href="#">Home</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">Contact</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">About Us</a>
  </li>
  <li className="nav-item">
    <a className="nav-link">Our Programs</a>
  </li>
</ul>
      </div> 
    </div>
      </div>
      </nav>
    </>
  )
}

export default Navbar

import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
     <footer className="footer bg-success  text-light">
      <div className="container-fluid  p-5 bg-success">
        <div className="row">
          <div className="  col-md-6">
            <h5 className=' text-light'>About Us</h5>
            <p className=' text-light'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed blandit, turpis eget tincidunt tristique, velit eros commodo nulla.</p>
          </div>
          <div className="col-md-3  text-light">
            <h5 className=' text-light'>Quick Links</h5>
            <ul className="list-unstyled  text-light d-flex gap-5 ">
            <Link className=' text-light' to={"/"} >Home</Link> 
            <Link className=' text-light' to={"/"} >About us</Link> 
            <Link className=' text-light' to={"/"} >Our Programs</Link> 
           
            </ul>
          </div>
          <div className="col-md-3  text-light">
            <h5 className=' text-light'>Contact Us</h5>
            <ul className="list-unstyled  text-light">
              <li className=' text-light'>123 Main Street</li>
              <li className=' text-light'>City, State ZIP</li>
              <li className=' text-light'>Email: example@example.com</li>
              <li className=' text-light'>Phone: 123-456-7890</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center  text-light py-3">
        <p className=' text-light'>&copy; 2024 Olutunde Nur and Primary school. All Rights Reserved.</p>
      </div>
    </footer>
    </>
  )
}

export default Footer

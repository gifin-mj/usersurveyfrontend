import React from 'react'
import { Link } from "react-router-dom";
function Header() {
  return (
    <header className="p-3 text-bg-dark">
    <div className="container">
      <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
       

        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
        
        </ul>

        

        <div className="text-end">
        <Link to="/">
          <button type="button" className="btn btn-outline-light me-2">Home</button>
        </Link>
        <Link to='/newuser'>
          <button type="button" className="btn btn-warning">Newuser</button>
        </Link>&nbsp;
        <Link to='/reports'>
          <button type="button" className="btn btn-warning">Reports</button>
        </Link>
        </div>
      </div>
    </div>
  </header>
  

  
  )
}

export default Header
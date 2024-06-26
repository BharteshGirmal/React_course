import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
const Navbar =()=>{

    // const loaction = useLocation();
    // useEffect(()=>{
    //     console.log(loaction.pathname)
    // },[loaction])
    // ${loaction.pathname === "/about"?"active":''}
    
    return(
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Navbar</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className={`nav-link   `} aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link  `} to="/about">About</Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <button className="btn btn-success" type="submit">Search</button>
              <Link className="btn btn-primary rounded-3 mx-2" to="/login" role="button">Login</Link>
              <Link className="btn btn-primary rounded-3 mx-2" to="/signup" role="button">SignUp</Link>
            </form>
          </div>
        </div>
      </nav>
    )
}

export default Navbar;
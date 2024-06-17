import React from 'react'
import {Link} from 'react-router-dom';
export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <a className="navbar-brand" href="/">Navbar</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item">
        <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/About">About</Link>
      </li>
    </ul>
    <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-success  my-2 my-sm-0" type="submit">Search</button>
    </form>
    <div className={`form-check form-switch mx-4 text-${props.mode ==='light'?'dark':'light '}`}>
   
  <input className="form-check-input" onClick={()=>{props.togglemode(null)}} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mode</label>
</div>
<div className="d-flex">
        <div className="bg-primary rounded mx-3" onClick={()=>{props.togglemode('primary')}}style={{height:'30px', width:'30px', cursor:'pointer'}}></div>
        <div className="bg-warning rounded mx-3" onClick={()=>{props.togglemode('warning')}}style={{height:'30px', width:'30px', cursor:'pointer'}}></div>
        <div className="bg-danger rounded mx-3" onClick={()=>{props.togglemode('danger')}}style={{height:'30px', width:'30px', cursor:'pointer'}}></div>
        <div className="bg-info rounded mx-3" onClick={()=>{props.togglemode('info')}}style={{height:'30px', width:'30px', cursor:'pointer'}}></div>
      </div>
  </div>
</nav>
  )
}

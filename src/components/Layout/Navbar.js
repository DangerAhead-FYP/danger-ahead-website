import React from 'react'
import "../../stylesheets/Layout/Navbar.css"
import logo from "../../images/logo.png"
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <div>
        <nav className="navbar navbar-expand-lg ">
            <div className="container-fluid">
                <img className='logo-img' src={logo} alt="danger-ahead-logo"/>
                <Link to="/" className="navbar-brand inter soft-black f-22">Danger Ahead</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 w-100 justify-content-end">
                    <li className="nav-item">
                        <Link to="/" className={`nav-link ${props.active === "home" ? "active" : ""}`}>Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/accidents" className={`nav-link ${props.active === "accidents" ? "active" : ""}`}>Show all Accidents</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/analysis" className={`nav-link ${props.active === "analysis" ? "active" : ""}`}>Analysis</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/markaccidents" className={`nav-link nav-link-red${props.active === "markaccidents" ? "" : ""}`}>Add an Accident</Link>
                    </li>
                    
                </ul>
                {/* <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form> */}
                </div>
            </div>
        </nav>
    </div>
  )
}

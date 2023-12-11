import React from 'react'
import './Nav.css'
import { Link } from 'react-router-dom'
// import navimg from "../Image/footer.png"
import navimg from "../Image/nav.png"

function Nav() {
  return (
    <div>
       <div className="navbar navbar-expand-lg fixed-top">
            <div className="container nav-nav">
            <div className="img">
             <img src={navimg} className="nav-img"/>
            </div>
            <div>
                <ul className="navbar-nav">
                    <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
                    <li className="nav-item"><Link to="/About" className="nav-link">About us</Link></li>
                    <li className="nav-item"><Link to="/Services"className="nav-link">Services</Link></li>
                    <li className="nav-item"><Link to="/Shop" className="nav-link">Shop</Link></li>
                    <li className="nav-item" ><Link to="/Contact" className="nav-link">Contact us</Link></li>
                </ul>
            </div>
            <div>
                <ul className="navbar-nav">
                <li className="nav-item"><Link to="/" className="nav-link"><i className="bi bi-search"></i></Link></li>
                <li className="nav-item"><Link to="/" className="nav-link"><i className="bi bi-person-circle"></i></Link></li>
                <li className="nav-item"><Link to="/" className="nav-link"><i className="bi bi-cart"></i></Link></li>
                </ul>
            </div>
            </div>
            </div>
    </div>
  )
}

export default Nav

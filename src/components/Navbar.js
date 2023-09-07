import React from 'react';
import logoimg from '../Assets/3.2.png';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg sticky-top" style={{ backgroundColor: "#edb97e54", padding: "0" }}>
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/" style={{ margin: "0", padding: "0" }}>
            <img src={logoimg} alt="Logo" width="100%" height="65px" className="d-inline-block align-text-top" style={{ mixBlendMode: "multiply", marginLeft: "8%" ,pointerEvents:"none"}} />
          </NavLink>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse ml-auto" id="navbarSupportedContent" style={{ fontSize: "20px" }}>
            <ul className="navbar-nav mb-2 mb-lg-0" style={{ marginLeft: "auto", marginInlineEnd: "20%" }}>
              <li className="nav-item" style={{ marginInlineEnd: "10%" }}>
                <NavLink exact className="nav-link" activeClassName="active" to="/">Home</NavLink>
              </li>
              <li className="nav-item dropdown" style={{ marginInlineEnd: "10%" }}>
                <NavLink className="nav-link dropdown-toggle" activeClassName="active" to="/services" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Services
                </NavLink>
                <ul className="dropdown-menu">
                  <li><NavLink className="dropdown-item" to="/services/budget-homestays">Budget Homestays</NavLink></li>
                  <li><NavLink className="dropdown-item" to="/services/premium-homestays">Premium Homestays</NavLink></li>
                  <li><NavLink className="dropdown-item" to="/services/resorts">Resorts</NavLink></li>
                  <li><NavLink className="dropdown-item" to="/services/vehicle-rental">Vehicle Rental</NavLink></li>
                  <li><NavLink className="dropdown-item" to="/services/jeep-safari">Jeep Safari</NavLink></li>
                </ul>
              </li>
              <li className="nav-item" style={{ marginInlineEnd: "10%" }}>
                <NavLink className="nav-link" activeClassName="active" to="/about">About</NavLink>
              </li>
              <li className="nav-item" style={{ marginInlineEnd: "10%" }}>
                <NavLink className="nav-link" activeClassName="active" to="/contact">Contact</NavLink>
              </li>
              <li className="nav-item" style={{ marginInlineEnd: "10%" }}>
                <NavLink className="nav-link" activeClassName="active" to="/blog">Blogs</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar;

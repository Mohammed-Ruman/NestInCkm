import React, { useEffect,useState } from "react";
import logoimgTrans from "../Assets/3.3.png";
import logoimg from "../Assets/3.2.png";
import { NavLink, useLocation } from "react-router-dom";



function Navbar() {

  const location=useLocation();
  const [isHomePage, setisHomePage] = useState(false)
  const [isMobileScreen, setisMobileScreen] = useState(false)
 
  
  
  useEffect(() => {
    if(location.pathname==="/"){
    setisHomePage(true);
  }else{
    setisHomePage(false);
  }
  const updateLineHeight = () => {
    if (window.innerWidth <= 767) {
      setisMobileScreen(true)
    } else {
      setisMobileScreen(false)
    }
  };

  // Add event listener to update line height on window resize
  window.addEventListener('resize', updateLineHeight);

  // Initial call to set line height based on screen width
  updateLineHeight();

  // Clean up the event listener on component unmount
  return () => {
    window.removeEventListener('resize', updateLineHeight);
  };
   

  }, [location])
  

  
  
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg sticky-top"
        style={{
          backgroundColor:isHomePage&&!isMobileScreen?"":"rgb(153 106 37 / 52%)",
          padding:"0"
        }}
      >
        <div className="container-fluid">
          <NavLink
            className="navbar-brand"
            to="/"
            style={{ margin: "0", padding: "0" }}
          >
            <img
               src={isHomePage && !isMobileScreen ? logoimg : logoimgTrans}
              alt="Logo"
              width="100%"
              height="65px"
              className="d-inline-block align-text-top"
              style={{
                mixBlendMode: "multiply",
                marginLeft: "8%",
                pointerEvents: "none",
              }}
            />
          </NavLink>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            
          >
            <span className="navbar-toggler-icon" ></span>
          </button>

          <div
            className="collapse navbar-collapse ml-auto"
            id="navbarSupportedContent"
            style={{ fontSize: "20px" }}
          >
            <ul
              className="navbar-nav mb-2 mb-lg-0"
              style={{ marginLeft: "auto", marginInlineEnd: "20%" }}
            >
              <li className="nav-item" style={{ marginInlineEnd: "10%" }}>
                <NavLink
                  exact
                  className="nav-link"
                  activeClassName="active"
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item" style={{ marginInlineEnd: "10%" }}>
                <NavLink
                  className="nav-link"
                  activeClassName="active"
                  to="/service"
                >
                  Services
                </NavLink>
              </li>
              
              <li className="nav-item" style={{ marginInlineEnd: "10%" }}>
                <NavLink
                  className="nav-link"
                  activeClassName="active"
                  to="/about"
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item" style={{ marginInlineEnd: "10%" }}>
                <NavLink
                  className="nav-link"
                  activeClassName="active"
                  to="/contact"
                >
                  Contact
                </NavLink>
              </li>
              <li className="nav-item" style={{ marginInlineEnd: "10%" }}>
                <NavLink
                  className="nav-link"
                  activeClassName="active"
                  to="/blog"
                >
                  Blogs
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

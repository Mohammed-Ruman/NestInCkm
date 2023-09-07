import React from 'react'
import logoimg from '../Assets/3.1.png'


function Navbar() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg sticky-top"
        style={{backgroundColor:"#edb97e54",padding:"0"}}>
            <div className="container-fluid">
            <a className="navbar-brand" href="#"
            style={{margin:"0", padding:"0"}}>
                <img src={logoimg} 
                alt="Logo" width="100%" 
                height="65px" 
                className="d-inline-block align-text-top" 
                style={{mixBlendMode:"multiply",lineHeight:"0",marginLeft:"8%"}}
                />
                          
            </a>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse  navbar-collapse ml-auto" id="navbarSupportedContent"
                style={{fontSize:"20px"}}
                >
                    <ul className="navbar-nav   mb-2 mb-lg-0"
                    style={{marginLeft : "auto" , marginInlineEnd :"20%"}} >
                        <li className="nav-item"
                        style={{marginInlineEnd:"10%"}}>
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item dropdown "
                        style={{marginInlineEnd:"10%"}}>
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Services
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Budget Homestays</a></li>
                                <li><a className="dropdown-item" href="#">Premium Homestays</a></li>
                                
                                <li><a className="dropdown-item" href="#">Resorts</a></li>
                                <li><a className="dropdown-item" href="#">Vehicle Rental</a></li>
                                <li><a className="dropdown-item" href="#">Jeep Safari</a></li>
                            </ul>
                        </li>
                        <li className="nav-item"
                        style={{marginInlineEnd:"10%"}}>
                            <a className="nav-link" href="#">About</a>
                        </li>
                        <li className="nav-item"
                        style={{marginInlineEnd:"10%"}}>
                            <a className="nav-link" href="#">Contact</a>
                        </li>
                        <li className="nav-item"
                        style={{marginInlineEnd:"10%"}}>
                            <a className="nav-link" href="#">Blogs</a>
                        </li>
                        
                    </ul>
            
                </div>
            </div>
            </nav>
    </div>
  )
}

export default Navbar
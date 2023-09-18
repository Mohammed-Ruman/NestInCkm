import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div>
        
        <footer className="text-center text-lg-start  text-muted"
        style={{backgroundColor:"#edb97e54"}}>
        {/* <!-- Section: Social media --> */}
        <section className="d-flex justify-content-center justify-content-lg-between p-3 border-bottom"
        style={{backgroundColor: "rgb(153 106 37 / 52%)"}}>
            {/* <!-- Left --> */}
            <div className="me-5 d-none d-lg-block">
            <span>Get connected with us on social networks:</span>
            </div>
            {/* <!-- Left --> */}

            {/* <!-- Right --> */}
            <div>
            <a href="https://www.facebook.com" className="me-4 text-reset">
                <i className="fab fa-facebook-f fa-xl"></i>
            </a>
            <a href="https://www.x.com" className="me-4 text-reset">
                <i className="fab fa-twitter fa-xl"></i>
            </a>
            <a href="https://www.google.com" className="me-4 text-reset">
                <i className="fab fa-google fa-xl"></i>
            </a>
            <a href="https://www.instagram.com" className="me-4 text-reset">
                <i className="fab fa-instagram fa-xl"></i>
            </a>
            
            </div>
            {/* <!-- Right --> */}
        </section>
        {/* <!-- Section: Social media --> */}

        {/* <!-- Section: Links  --> */}
        <section className="">
            <div className="container text-center text-md-start mt-5">
            {/* <!-- Grid row --> */}
            <div className="row mt-3">
                {/* <!-- Grid column --> */}
                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                {/* <!-- Content --> */}
                <h6 className="text-uppercase fw-bold mb-4">
                    <i className="fas fa-gem me-3"></i>Nest In Chikmagaluru
                </h6>
                <p>
                    Book your next stay with us.
                </p>
                </div>
                {/* <!-- Grid column --> */}

                {/* <!-- Grid column --> */}
                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                {/* <!-- Links --> */}
                <h6 className="text-uppercase fw-bold mb-4">
                    Service
                </h6>
                <p>
                    <Link to="/premiumhs" className="text-reset">Premium Homestay</Link>
                </p>
                <p>
                    <Link to="/budgeths" className="text-reset">Budget Homestay</Link>
                </p>
                <p>
                    <Link to="/resort" className="text-reset">Resort</Link>
                </p>
                <p>
                    <Link to="/vehicle" className="text-reset">Rental Vehicle</Link>
                </p>
                </div>
                {/* <!-- Grid column --> */}

                {/* <!-- Grid column --> */}
                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                {/* <!-- Links --> */}
                <h6 className="text-uppercase fw-bold mb-4">
                    Useful links
                </h6>
                <p>
                    <Link to="/" className="text-reset">Home</Link>
                </p>
                <p>
                    <Link to="/service" className="text-reset">Service</Link>
                </p>
                <p>
                    <Link to="/about" className="text-reset">About</Link>
                </p>
                <p>
                    <Link to="/blog" className="text-reset">Blog</Link>
                </p>
                </div>
                {/* <!-- Grid column --> */}

                {/* <!-- Grid column --> */}
                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                {/* <!-- Links --> */}
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p><i className="fas fa-home me-3"></i> uphalli,Chikmagaluru - 577101</p>
                <p>
                    <i className="fas fa-envelope me-3"></i>
                    nestinckm@gmail.com
                </p>
                <p><i className="fas fa-phone me-3"></i> + 91 9988776655</p>
                <p><i className="fas fa-print me-3"></i> + 91 8899776655</p>
                </div>
                {/* <!-- Grid column --> */}
            </div>
            {/* <!-- Grid row --> */}
            </div>
        </section>
        {/* <!-- Section: Links  --> */}

        {/* <!-- Copyright --> */}
        <div className="text-center p-3" style={{backgroundColor: "rgb(153 106 37 / 52%)"}}>
            © 2023 &nbsp;Copyright&nbsp; |&nbsp;Design and Developed by : &nbsp; 
            <a className="text-reset fw-bold" href="https://www.google.com/">Atomrex Technology</a>
        </div>
        {/* <!-- Copyright --> */}
        </footer>

    </div>
  )
}

export default Footer
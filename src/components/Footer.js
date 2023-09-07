import React from 'react'

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
                    <i className="fas fa-gem me-3"></i>Company name
                </h6>
                <p>
                    Here you can use rows and columns to organize your footer content. Lorem ipsum
                    dolor sit amet, consectetur adipisicing elit.
                </p>
                </div>
                {/* <!-- Grid column --> */}

                {/* <!-- Grid column --> */}
                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                {/* <!-- Links --> */}
                <h6 className="text-uppercase fw-bold mb-4">
                    Products
                </h6>
                <p>
                    <a href="#!" className="text-reset">Angular</a>
                </p>
                <p>
                    <a href="#!" className="text-reset">React</a>
                </p>
                <p>
                    <a href="#!" className="text-reset">Vue</a>
                </p>
                <p>
                    <a href="#!" className="text-reset">Laravel</a>
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
                    <a href="#!" className="text-reset">Pricing</a>
                </p>
                <p>
                    <a href="#!" className="text-reset">Settings</a>
                </p>
                <p>
                    <a href="#!" className="text-reset">Orders</a>
                </p>
                <p>
                    <a href="#!" className="text-reset">Help</a>
                </p>
                </div>
                {/* <!-- Grid column --> */}

                {/* <!-- Grid column --> */}
                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                {/* <!-- Links --> */}
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p><i className="fas fa-home me-3"></i> New York, NY 10012, US</p>
                <p>
                    <i className="fas fa-envelope me-3"></i>
                    info@example.com
                </p>
                <p><i className="fas fa-phone me-3"></i> + 01 234 567 88</p>
                <p><i className="fas fa-print me-3"></i> + 01 234 567 89</p>
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
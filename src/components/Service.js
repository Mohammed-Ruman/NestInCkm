import React from "react";
import img1 from "../Assets/4.png";
import { NavLink } from "react-router-dom";

function Service() {
  return (
    
    <>
     {/* Premium Homestay */}
     <div className="container-fluid text-center" style={{ marginTop: "1rem", marginBottom: "1rem" }}>
        <div className="row">
          <div className="col" style={{ backgroundColor: "rgb(153 106 37 / 52%)" }}>
            <h3>Premium Homestay</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 order-md-last">
            <img src="http://placehold.it/800x600" className="img-fluid h-100" alt="" />
          </div>
          <div className="col-md-8 mb-3 mb-md-0">
            <div className="container" style={{ height: "400px", backgroundColor: "#edb97e54" }}>
              <p className="d-flex align-items-center justify-content-center h-100 text-wrap" 
              style={{ fontSize: "18px", overflow: "auto", marginTop: "1rem", marginBottom: "-5rem" }}>
                {/* ...Content for col-8 */}
                Experience the pinnacle of luxury at our premium homestay. Nestled in serene surroundings, our elegantly designed rooms offer comfort and tranquility. Enjoy breathtaking views from your window. Our attentive staff ensures your every need is met. Savor gourmet meals prepared with local ingredients or relax with fine wine. Whether a romantic escape, adventure, or peaceful retreat, our homestay creates cherished memories. Book your stay for a journey of luxury, relaxation, and bliss.
              </p>
              <div className="text-center" style={{marginTop:"4rem"}}>
                {/* Wrap the button in a div */}
                <div className="d-flex justify-content-center">
                  <NavLink to="/booking" className="btn" style={{ backgroundColor: "rgb(153 106 37 / 52%)",color:"black" }}>Book Now</NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Budget Homestay */}
      <div className="container-fluid text-center" style={{ marginTop: "1rem", marginBottom: "1rem" }}>
        <div className="row">
          <div className="col" style={{ backgroundColor: "rgb(153 106 37 / 52%)" }}>
            <h3>Budget Homestay</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <img src="http://placehold.it/800x600" className="img-fluid h-100" alt="" />
          </div>
          <div className="col-md-8 mb-3 mb-md-0">
            <div className="container" style={{ height: "400px", backgroundColor: "#edb97e54" }}>
              <p className="d-flex align-items-center justify-content-center h-100 text-wrap" 
              style={{ fontSize: "18px", overflow: "auto", marginTop: "1rem" ,marginBottom: "-5rem"}}>
                {/* ...Content for col-8 */}
                Discover comfort and affordability at our budget homestay. Our cozy rooms provide a restful retreat for travelers on a budget. Relax in simplicity without compromising on quality. Enjoy local cuisine and hospitality that warms the heart. Whether you're exploring the city or seeking a quiet getaway, our homestay offers the perfect base. We value your pocket without sacrificing comfort. Book your stay and experience the charm of a budget-friendly homestay that promises comfort without breaking the bank.
              </p>
              <div className="text-center" style={{marginTop:"4rem"}}>
                {/* Wrap the button in a div */}
                <div>
                  <NavLink to="/booking" className="btn" style={{ backgroundColor: "rgb(153 106 37 / 52%)",color:"black" }}>Book Now</NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

       {/* Resorts */}
     <div className="container-fluid text-center" style={{ marginTop: "1rem", marginBottom: "1rem" }}>
        <div className="row">
          <div className="col" style={{ backgroundColor: "rgb(153 106 37 / 52%)" }}>
            <h3>Resorts</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 order-md-last">
            <img src="http://placehold.it/800x600" className="img-fluid h-100" alt="" />
          </div>
          <div className="col-md-8 mb-3 mb-md-0">
            <div className="container" style={{ height: "400px", backgroundColor: "#edb97e54" }}>
              <p className="d-flex align-items-center justify-content-center h-100 text-wrap" 
              style={{ fontSize: "18px", overflow: "auto", marginTop: "1rem", marginBottom: "-5rem" }}>
                {/* ...Content for col-8 */}
                Indulge in luxury and nature's embrace at our exquisite resorts. Nestled in pristine landscapes, our resorts offer a sanctuary for those seeking the perfect blend of relaxation and adventure. Immerse yourself in opulent accommodations, surrounded by breathtaking natural beauty. Our attentive staff ensures your every desire is met, from gourmet dining to thrilling outdoor activities. Whether you seek a romantic escape, family fun, or a corporate retreat, our resorts provide an unforgettable experience. Reconnect with nature, rejuvenate your spirit, and create lasting memories at our unrivaled resorts, where every moment is a masterpiece of relaxation and adventure.
             </p>
              <div className="text-center" style={{marginTop:"4rem"}}>
                {/* Wrap the button in a div */}
                <div className="d-flex justify-content-center">
                  <NavLink to="/booking" className="btn" style={{ backgroundColor: "rgb(153 106 37 / 52%)",color:"black" }}>Book Now</NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Vehicle Rentals */}
      <div className="container-fluid text-center" style={{ marginTop: "1rem", marginBottom: "1rem" }}>
        <div className="row">
          <div className="col" style={{ backgroundColor: "rgb(153 106 37 / 52%)" }}>
            <h3>Vehicle Rentals</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <img src="http://placehold.it/800x600" className="img-fluid h-100" alt="" />
          </div>
          <div className="col-md-8 mb-3 mb-md-0">
            <div className="container" style={{ height: "400px", backgroundColor: "#edb97e54" }}>
              <p className="d-flex align-items-center justify-content-center h-100 text-wrap" 
              style={{ fontSize: "18px", overflow: "auto", marginTop: "1rem" ,marginBottom: "-5rem"}}>
                {/* ...Content for col-8 */}
                Explore with ease using our premium vehicle rentals. Select from our well-maintained fleet, tailored to your needs. Whether a sleek sedan or spacious SUV, we offer diverse options for any trip. Our dedicated team ensures a seamless experience, from booking to drop-off. Enjoy flexible pick-up and drop-off locations for added convenience. With competitive rates and top-notch service, your satisfaction is our priority. Experience hassle-free travel and embark on memorable journeys with our reliable vehicle rentals. Start your adventure today and let the road guide you to new horizons.   
                </p>
              <div className="text-center" style={{marginTop:"4rem"}}>
                {/* Wrap the button in a div */}
                <div>
                  <NavLink to="/booking" className="btn" style={{ backgroundColor: "rgb(153 106 37 / 52%)",color:"black" }}>Book Now</NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Service;

import React from "react";
import { NavLink } from "react-router-dom";
import phs1 from '../Assets/PHS/1.jpg'
import phs2 from '../Assets/PHS/2.jpg'
import phs3 from '../Assets/PHS/3.jpg'

import bhs1 from '../Assets/BHS/1.jpg'
import bhs2 from '../Assets/BHS/2.png'
import bhs3 from '../Assets/BHS/3.jpg'

import rs1 from '../Assets/Resorts/1.jpg'
import rs2 from '../Assets/Resorts/2.jpg'
import rs3 from '../Assets/Resorts/3.jpg'

import rc1 from '../Assets/rentcar/1.jpg'
import rc2 from '../Assets/rentcar/2.jpg'
import rc3 from '../Assets/rentcar/3.jpg'

function Service() {
  return (
    
    <>

{/* Premium Homestay */}
<div className="container-fluid my-5 mx-0" >
  <div className="card d-flex flex-lg-row flex-column">
  <div id="carouselExample1" className="carousel slide col-lg-4 col-12" data-bs-ride="carousel" style={{ maxWidth: '800px', maxHeight: '600px', margin: '0 auto' }}>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img className="d-block w-100" src={phs1} alt="First slide" style={{ maxWidth: '800px', maxHeight: '600px', margin: '0 auto' }} />
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src={phs2}  alt="Second slide" style={{ maxWidth: '800px', maxHeight: '600px', margin: '0 auto' }} />
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src={phs3}  alt="Third slide" style={{ maxWidth: '800px', maxHeight: '600px', margin: '0 auto' }} />
        </div>
      </div>
      <a className="carousel-control-prev" href="#carouselExample1" role="button" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </a>
      <a className="carousel-control-next" href="#carouselExample1" role="button" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </a>
    </div>
    <div className="col-lg-8 col-12 card-body d-flex flex-column justify-content-center"  style={{ backgroundColor: "rgb(153 106 37 / 52%)" }}>
      <div className="text-center">
        <h1 className="card-title">Premium Homestay</h1>
        <p className="card-text">Experience the pinnacle of luxury at our premium homestay. Nestled in serene surroundings, our elegantly designed rooms offer comfort and tranquility. Enjoy breathtaking views from your window. Our attentive staff ensures your every need is met. Savor gourmet meals prepared with local ingredients or relax with fine wine. Whether a romantic escape, adventure, or peaceful retreat, our homestay creates cherished memories. Book your stay for a journey of luxury, relaxation, and bliss.
       </p>
       <NavLink to="/premiumhs" className="btn" style={{backgroundColor:"rgb(153 106 37 / 52%)"}}>Book Now</NavLink>
      </div>
    </div>
  </div>
</div>



{/* Budget Homestay */}
<div className="container-fluid my-5 mx-0">
  <div className="card d-flex flex-lg-row flex-column-reverse flex-column">
    <div className="col-lg-8 col-12 card-body d-flex flex-column justify-content-center" style={{ backgroundColor: "#edb97e54" }}>
      <div className="text-center">
        <h1 className="card-title">Budget Homestay</h1>
        <p className="card-text">Discover comfort and affordability at our budget homestay. Our cozy rooms provide a restful retreat for travelers on a budget. Relax in simplicity without compromising on quality. Enjoy local cuisine and hospitality that warms the heart. Whether you're exploring the city or seeking a quiet getaway, our homestay offers the perfect base. We value your pocket without sacrificing comfort. Book your stay and experience the charm of a budget-friendly homestay that promises comfort without breaking the bank.
           </p>
           <NavLink to="/budgeths" className="btn" style={{backgroundColor:"rgb(153 106 37 / 52%)"}}>Book Now</NavLink>
      </div>
    </div>
    <div id="carouselExample2" className="carousel slide col-lg-4 col-12" data-bs-ride="carousel" style={{ maxWidth: '800px', maxHeight: '600px', margin: '0 auto' }}>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img className="d-block w-100" src={bhs1} alt="First slide" style={{ maxWidth: '800px', maxHeight: '600px', margin: '0 auto' }} />
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src={bhs2} alt="Second slide" style={{ maxWidth: '800px', maxHeight: '600px', margin: '0 auto' }} />
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src={bhs3} alt="Third slide" style={{ maxWidth: '800px', maxHeight: '600px', margin: '0 auto' }} />
        </div>
      </div>
      <a className="carousel-control-prev" href="#carouselExample2" role="button" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </a>
      <a className="carousel-control-next" href="#carouselExample2" role="button" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </a>
    </div>
  </div>
</div>


{/* Resorts */}
<div className="container-fluid my-5 mx-0" >
  <div className="card d-flex flex-lg-row flex-column">
  <div id="carouselExample3" className="carousel slide col-lg-4 col-12" data-bs-ride="carousel" style={{ maxWidth: '800px', maxHeight: '600px', margin: '0 auto' }}>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img className="d-block w-100" src={rs1} alt="First slide" style={{ maxWidth: '800px', maxHeight: '600px', margin: '0 auto' }} />
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src={rs2} alt="Second slide" style={{ maxWidth: '800px', maxHeight: '600px', margin: '0 auto' }} />
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src={rs3}  alt="Third slide" style={{ maxWidth: '800px', maxHeight: '600px', margin: '0 auto' }} />
        </div>
      </div>
      <a className="carousel-control-prev" href="#carouselExample3" role="button" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </a>
      <a className="carousel-control-next" href="#carouselExample3" role="button" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </a>
    </div>
    <div className="col-lg-8 col-12 card-body d-flex flex-column justify-content-center"  style={{ backgroundColor: "rgb(153 106 37 / 52%)" }}>
      <div className="text-center">
        <h1 className="card-title">Resorts</h1>
        <p className="card-text">Indulge in luxury and nature's embrace at our exquisite resorts. Nestled in pristine landscapes, our resorts offer a sanctuary for those seeking the perfect blend of relaxation and adventure. Immerse yourself in opulent accommodations, surrounded by breathtaking natural beauty. Our attentive staff ensures your every desire is met, from gourmet dining to thrilling outdoor activities. Whether you seek a romantic escape, family fun, or a corporate retreat, our resorts provide an unforgettable experience. Reconnect with nature, rejuvenate your spirit, and create lasting memories at our unrivaled resorts, where every moment is a masterpiece of relaxation and adventure.
        </p>
        <NavLink to="/resort" className="btn" style={{backgroundColor:"rgb(153 106 37 / 52%)"}}>Book Now</NavLink>
      </div>
    </div>
  </div>
</div>



{/* Vehicle Rentals */}
<div className="container-fluid my-5 mx-0">
  <div className="card d-flex flex-lg-row flex-column-reverse flex-column">
    <div className="col-lg-8 col-12 card-body d-flex flex-column justify-content-center" style={{ backgroundColor: "#edb97e54" }}>
      <div className="text-center">
        <h1 className="card-title">Vehicle Rentals</h1>
        <p className="card-text">Explore with ease using our premium vehicle rentals. Select from our well-maintained fleet, tailored to your needs. Whether a sleek sedan or spacious SUV, we offer diverse options for any trip. Our dedicated team ensures a seamless experience, from booking to drop-off. Enjoy flexible pick-up and drop-off locations for added convenience. With competitive rates and top-notch service, your satisfaction is our priority. Experience hassle-free travel and embark on memorable journeys with our reliable vehicle rentals. Start your adventure today and let the road guide you to new horizons.   
              </p>   
              <NavLink to="/vehicle" className="btn" style={{backgroundColor:"rgb(153 106 37 / 52%)"}}>Book Now</NavLink>
      </div>
    </div>
    <div id="carouselExample4" className="carousel slide col-lg-4 col-12" data-bs-ride="carousel" style={{ maxWidth: '800px', maxHeight: '600px', margin: '0 auto' }}>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img className="d-block w-100" src={rc1} alt="First slide" style={{ maxWidth: '800px', maxHeight: '600px', margin: '0 auto' }} />
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src={rc2} alt="Second slide" style={{ maxWidth: '800px', maxHeight: '600px', margin: '0 auto' }} />
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src={rc3} alt="Third slide" style={{ maxWidth: '800px', maxHeight: '600px', margin: '0 auto' }} />
        </div>
      </div>
      <a className="carousel-control-prev" href="#carouselExample4" role="button" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </a>
      <a className="carousel-control-next" href="#carouselExample4" role="button" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </a>
    </div>
  </div>
</div>


  </>
  );
}

export default Service;

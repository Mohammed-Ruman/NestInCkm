import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import Aos from 'aos';
import 'aos/dist/aos.css'
import Typewriter from 'typewriter-effect'
import Slider from './Slider';



function Home() {

  const [lineHeight, setLineHeight] = useState('2'); // Default line height
  const [topMargin,setTopMargin]=useState('mt-5')
  const [counterOn,setCounterOn]=useState(false)



  useEffect(() => {
    document.title='Home'
    Aos.init({duration:2000})
    // Function to update line height based on screen width
    const updateLineHeight = () => {
      if (window.innerWidth <= 767) {
        setLineHeight('1.5'); // Change line height for smaller screens
        setTopMargin('mt-3');
      } else {
        setLineHeight('2'); // Default line height for larger screens
        setTopMargin('mt-5')
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
  }, []);




  return (
    <>
      <div className="container-fluid" style={{position:'relative',height:'800px'}} data-aos="fade-right"> 
        <Slider />
      </div>

      <div className="container-fluid" >

      <div className="container-fluid " style={{ backgroundColor: "#edb97e54" }} >
        <div className="container text-center" data-aos="fade-left">
          <div className="row">
            <div className="col-md-6 order-md-2 d-flex align-items-center justify-content-center">
              <div className="image-container shadow d-none mt-5 mb-5 d-md-block"> {/* Hide on small screens */}
                <img src="https://placehold.co/500x500" alt="" />
              </div>
            </div>
            <div className="col-md-6 order-md-1">
              <div className="d-flex align-items-center justify-content-center">
                <p className={topMargin} style={{fontSize:"18px",lineHeight:`${lineHeight}`}}>
                  <hr />
                      <Typewriter options={{autoStart:true,loop:true,delay:50,strings: ["Welcome to <strong>Nest in Chickmagaluru,</strong>"]}}  />
                       your gateway to an enchanting travel experience nestled in the heart of nature's paradise. We invite you to embark on a journey like no other, where the lush greenery of Chickmagaluru meets the warmth of our hospitality. Whether you seek the comfort of a premium homestay, the affordability of budget accommodations, the luxury of resorts, or the freedom to explore with our rental vehicles, we have tailored our services to make your stay unforgettable. With us, you're not just a traveler; you're a cherished guest. Our mission is to provide you with more than just a place to rest; it's an opportunity to create cherished memories. So, come, be part of our story, and let us be part of yours. Discover Chickmagaluru with Nest, where every stay is a journey and every guest is family.
                  <hr />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* <div
                    style={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      background: 'rgba(0, 0, 0, 0.1)',
                      color: 'white',
                      padding: '10px',
                      textAlign: 'center',
                      width: '100%'
                    }}
                  >
                    <h2>Text Over Image</h2>
                    <p>This is some overlay text</p>
                  </div> */}


      <div className="container-fluid" style={{ backgroundColor: "rgb(153 106 37 / 52%)" }}>
        <div className="container text-center">
            <div className="row">
              <h1 className='text-uppercase mt-5 fw-bold' style={{color:"white"}}>OUR OFFERINGS</h1>
            </div>
            <div className="row mt-3 ">
              <div className="col-md mb-3 " data-aos="flip-left">
                <div className="card" style={{backgroundColor:"rgb(255 255 255 / 33%)"}}  >
                  <div className="card-title mt-3 mb-0 fw-bold " style={{fontSize:"16px"}}>Premium Homestay Booking</div>
                  <img src="https://placehold.co/150x150" alt="" className="card-img-top p-3 "  />
                  
                  <div className="card-body text-center p-0 " style={{fontSize:"14px"}}>
                      Experience the allure of handpicked, premium homestays nestled in and around the enchanting Chickmagaluru region, all available at the best prices, seamlessly tailored to your desires.
                  </div>
                  <Link to="/premiumhs" className="btn m-3 rounded-5" style={{backgroundColor:"rgb(153 106 37 / 52%)"}}>Book Now</Link>
                </div>
              </div>

              <div className="col-md mb-3" data-aos="flip-left">
              <div className="card" style={{backgroundColor:"rgb(255 255 255 / 33%)"}}  >
                  <div className="card-title mt-3  mb-0 fw-bold " style={{fontSize:"16px"}}>Budget Homestay Booking</div>
                  <img src="https://placehold.co/150x150" alt="" className="card-img-top p-3"  />
                  
                  <div className="card-body text-center p-0 " style={{fontSize:"14px"}}>
                      Discover the charm of carefully selected budget-friendly homestays tucked away in the captivating Chickmagaluru region, all offered at unbeatable rates, thoughtfully designed to meet your every need.   </div>
                  <Link to="/budgeths" className="btn m-3 rounded-5" style={{backgroundColor:"rgb(153 106 37 / 52%)"}}>Book Now</Link>
                </div>
              </div>

              <div className="col-md mb-3 " data-aos="flip-left">
              <div className="card" style={{backgroundColor:"rgb(255 255 255 / 33%)"}}  >
                  <div className="card-title mt-3 mb-0 fw-bold " style={{fontSize:"16px"}}>Resort Booking</div>
                  <img src="https://placehold.co/150x150" alt="" className="card-img-top p-3 "  />
                  
                  <div className="card-body text-center p-0 " style={{fontSize:"14px"}}>
                      Indulge in the charm of carefully selected luxury resorts nestled within and around the enchanting Chickmagaluru region, all offered at highly competitive rates, meticulously designed to surpass your expectations.              </div>
                  <Link to="/resort" className="btn m-3 rounded-5" style={{backgroundColor:"rgb(153 106 37 / 52%)"}}>Book Now</Link>
                </div>
              </div>

              <div className="col-md mb-3" data-aos="flip-left">
              <div className="card" style={{backgroundColor:"rgb(255 255 255 / 33%)"}}  >
                  <div className="card-title mt-3 mb-0 fw-bold " style={{fontSize:"16px"}}>Rental Vehicle Booking</div>
                  <img src="https://placehold.co/150x150" alt="" className="card-img-top p-3 "  />
                  
                  <div className="card-body text-center p-0 " style={{fontSize:"14px"}}>
                      Unlock your adventure with hassle-free rental vehicle bookings, providing you the wheels to explore Chickmagaluru's scenic wonders, cultural treasures, and hidden gems at your own pace.</div>
                  <Link to="/vehicle" className="btn m-3 rounded-5" style={{backgroundColor:"rgb(153 106 37 / 52%)"}}>Book Now</Link>
                </div>
              </div>
            </div>
            <br />
        </div>
      </div>

      <ScrollTrigger onEnter={()=>setCounterOn(true)} onExit={()=>setCounterOn(false)}>
      <div className="container-fluid" style={{ backgroundColor: "#edb97e54" }}>
          <div className="container text-center ">
            <div className="row p-4">
              <div className="col-md">
                  <div className="container shadow mt-3" style={{border:"4px solid rgb(153 106 37 / 52%)",borderRadius:"15px", borderBottom:"10px solid rgb(153 106 37 / 52%)"}} data-aos="zoom-in">
                      <h4 className='mt-3'>Over</h4>
                      <h2>
                        {counterOn && <CountUp start={0} end={55} delay={0.5} duration={4} />}+
                      </h2>
                      <h4>Properties Available</h4>
                  </div>
              </div>
              <div className="col-md">
                  <div className="container shadow mt-3" style={{border:"4px solid rgb(153 106 37 / 52%)",borderRadius:"15px", borderBottom:"10px solid rgb(153 106 37 / 52%)"}} data-aos="zoom-in">
                      <h4 className='mt-3'>Over</h4>
                      <h2>{counterOn && <CountUp start={0} end={65} delay={0.5} duration={4} />}+</h2>
                      <h4>Bookings Done</h4>
                  </div>
              </div>
              <div className="col-md">
                  <div className="container shadow mt-3" style={{border:"4px solid rgb(153 106 37 / 52%)",borderRadius:"15px", borderBottom:"10px solid rgb(153 106 37 / 52%)"}} data-aos="zoom-in">
                      <h4 className='mt-3'>Over</h4>
                      <h2>{counterOn && <CountUp start={0} end={75} delay={0.5} duration={4} />}+</h2>
                      <h4>Happy Customers</h4>
                  </div>
              </div>
            </div>
            <br />
          </div>
      </div>
      </ScrollTrigger>  
      </div>          
                 



    </>
  )
}

export default Home;




import React, { useEffect,useState } from 'react'
import Typewriter from 'typewriter-effect'
import Aos from 'aos';
import 'aos/dist/aos.css'

function About() {
  
  const [lineHeight, setLineHeight] = useState('2'); // Default line height
  const [topMargin,setTopMargin]=useState('mt-5')
  
  useEffect(() => {
    document.title='About'
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
    </>
  )
}

export default About
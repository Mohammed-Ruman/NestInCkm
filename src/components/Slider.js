import React,{ useEffect, useRef } from 'react';
import './Slider.css'; // Make sure the path to your CSS file is correct
import img1 from '../Assets/elementalslider/1.jpg';
import img2 from '../Assets/elementalslider/2.jpg';
import img3 from '../Assets/elementalslider/3.jpg';
import img4 from '../Assets/elementalslider/4.jpg';
import img5 from '../Assets/elementalslider/5.jpg';

function Slider() {
  function prevClickHandler() {
    let list = document.querySelectorAll('.itemSlide');
    document.getElementById('slide').prepend(list[list.length - 1]);
  }

  function nextClickHandler() {
    let list = document.querySelectorAll('.itemSlide');
    document.getElementById('slide').appendChild(list[0]);
  }

  const intervalRef = useRef(null);

  // Function to start the automatic slide change
  function startAutoSlide() {
    intervalRef.current = setInterval(() => {
      nextClickHandler();
    }, 8000); // Change slide every 3 seconds (3000 milliseconds)
  }

  // Function to stop the automatic slide change
  function stopAutoSlide() {
    clearInterval(intervalRef.current);
  }

  // Start the automatic slide change when the component mounts
  useEffect(() => {
    startAutoSlide();

    // Stop the automatic slide change when the component unmounts
    return () => {
      stopAutoSlide();
    };
  }, []);

  return (
    <>
      <div className="containerSlide">
        <div id="slide">
          <div className="itemSlide" style={{ backgroundImage: `url(${img1})` }}>
            <div className="content">
              <div className="name">Slider Name</div>
              <div className="des">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta laudantium quibusdam animi a ipsa totam repellendus magnam tempora.</div>
              <button>See more</button>
            </div>
          </div>

          <div className="itemSlide" style={{ backgroundImage: `url(${img2})` }}>
            <div className="content">
              <div className="name">Slider Name</div>
              <div className="des">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta laudantium quibusdam animi a ipsa totam repellendus magnam tempora.</div>
              <button>See more</button>
            </div>
          </div>

          <div className="itemSlide" style={{ backgroundImage: `url(${img3})` }}>
            <div className="content">
              <div className="name">Slider Name</div>
              <div className="des">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta laudantium quibusdam animi a ipsa totam repellendus magnam tempora.</div>
              <button>See more</button>
            </div>
          </div>

          <div className="itemSlide" style={{ backgroundImage: `url(${img4})` }}>
            <div className="content">
              <div className="name">Slider Name</div>
              <div className="des">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta laudantium quibusdam animi a ipsa totam repellendus magnam tempora.</div>
              <button>See more</button>
            </div>
          </div>

          <div className="itemSlide" style={{ backgroundImage: `url(${img5})` }}>
            <div className="content">
              <div className="name">Slider Name</div>
              <div className="des">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta laudantium quibusdam animi a ipsa totam repellendus magnam tempora.</div>
              <button>See more</button>
            </div>
          </div>
        </div>
        <div className="buttons">
          <button id="prev" onClick={prevClickHandler} className=' btn btn-primary'><i className="fa-solid fa-angle-left"></i></button>
          <button id="next" onClick={nextClickHandler} className=' btn btn-primary'><i className="fa-solid fa-angle-right"></i></button>
        </div>
      </div>
    </>
  );
}

export default Slider;

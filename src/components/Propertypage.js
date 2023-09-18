import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import propertyJson from '../JsonData/PremiumHomestay.json';
import RoomCard from './RoomCard';

function Propertypage() {
  const { propertyId } = useParams();
  const [propertyDetails, setPropertyDetails] = useState(null);

  let wappLink="https://api.whatsapp.com/send?phone=918147845702&text=Hello%2C%20I%27d%20like%20to%20check%20Homestay%20availability.%20Can%20you%20provide%20details%3F%0AHomestay%20Id%20%3A%20"+propertyId;
 

 

  useEffect(() => {
   
    // Find the property details based on propertyId
    const foundProperty = propertyJson?.find(property => property.propertyId === propertyId);

    if (foundProperty) {
      // If property is found, set it in the state
      setPropertyDetails(foundProperty);
      
    } else {
      // Handle the case when property is not found
      // You can set an error message or redirect to a 404 page
      console.error(`Property with id ${propertyId} not found.`);
    }
  }, [propertyId]);

  if (!propertyDetails) {
    // You can render a loading indicator while the data is being fetched
    return <div>Invalid Property Id : Property details not available</div>;
  }

  return (
    <div className="container text-center" >
    <img
      className="img-fluid mx-auto mt-3"
      src={propertyDetails.coverImageUrl}
      alt="Cover"
      style={{ maxWidth: '100%', height: 'auto' }}
    />
    <div className="container mt-3 mb-3" >
      <h4 className='text-center'>Homestay : {propertyDetails.propertyId}</h4>
      <div className="row">
        <div className="col-md-8">
          <div className="row ">
            <p className='text-start' > Price :{`₹ `}{propertyDetails.Price}</p>
          </div>
          <div className="row">
            <p className='text-start'>Package Details : {propertyDetails.packageDetails}</p>
          </div>

        </div>
        <div className="col-md-4">
          <Link  to={wappLink} className='btn' style={{backgroundColor:"rgb(153 106 37 / 52%)"}} target="_blank" rel="noopener noreferrer">Check Availability</Link>
        </div>
      </div>

    </div>

    <div className="container text-start">
    {Object.entries(propertyDetails?.specialFeatures).map(([key, value], index) => (
        <p key={index} className='fw-bold'>
          <span> | </span> {value}
        </p>
    ))}
    </div>

    <div className="container mt-3">
          <h2 className="mx-auto text-center mt-3 mb-3 p-3 rounded-5" style={{backgroundColor:"rgb(153 106 37 / 52%)"}}>Rooms</h2>
            <div className="row row-cols-1 row-cols-md-2 g-4">
            {propertyDetails?.rooms.map((room,index) => {
                return (
                  <div className="col mb-4" key={index}>
                    <RoomCard roomInfo={room} />
                  </div>
                );
              })}
            </div>
    </div>
    
    <div className="container mt-3">
      <h2 className="mx-auto text-center mt-3 mb-3 p-3 ">Image Gallery</h2>
      {propertyDetails && (
        <div className="row">
          {propertyDetails.galleryImageUrls.map((imageUrl, index) => (
            <div key={index} className="col-md-4 mb-4">
              <img
                src={imageUrl}
                alt=""
                className="img-fluid"
              />
              {/* You can add additional content or captions here */}
            </div>
          ))}
        </div>
      )}
    </div>

    <div className="container mt-3">
      <div className="text-center mt-3 mb-3">
        <h2 className="mx-auto mb-0">Terms and Condition</h2>
        <hr className="w-100 mx-auto mt-1 mb-3" style={{ borderColor: 'black' }} />
      </div>

          
      <ul className='text-start'>
        <li>Alcohol will not be served.</li>
        <li>Pets not allowed.</li>
      </ul>

      <h5 className="mx-auto text-start  ">BOOKING POLICY</h5>
      <ul className='text-start'>
        <li>30% Advance needs to be paid to confirm the booking.</li>
        <li>Balance payment to be paid upon arrival.</li>
      </ul>

      <h5 className="mx-auto text-start  ">CANCELLATION POLICY</h5>
      <ul className='text-start'>
        <li>Full refund if cancelled before 15 days of Check-in.</li>
        <li>50% refund if cancelled before 10 days of Check-in.</li>
        <li>No refund if cancelled before 7 days of Check-in.</li>
      </ul>
    </div>





  
  </div>
  
  );
}

export default Propertypage;

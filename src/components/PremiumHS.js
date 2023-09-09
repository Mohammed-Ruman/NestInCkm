import React from 'react'
import jsonData from '../JsonData/PremiumHomestay.json'
import PropertyCard from './PropertyCard';

function PremiumHS() {
  return (
      <>
        {/* <div className="card-group">
            <div className="card">
              <img src="https://placehold.co/600x400" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              </div>
              <div className="card-footer">
                <small className="text-body-secondary">Last updated 3 mins ago</small>
              </div>
            </div>
            <div className="card">
              <img src="https://placehold.co/600x400" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
              </div>
              <div className="card-footer">
                <small className="text-body-secondary">Last updated 3 mins ago</small>
              </div>
            </div>
            <div className="card">
              <img src="https://placehold.co/600x400" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
              </div>
              <div className="card-footer">
                <small className="text-body-secondary">Last updated 3 mins ago</small>
              </div>
            </div>
         </div> */}


        <div className="container mt-3">
          <h2 className="mx-auto text-center mt-3 mb-3">Premium Homestays</h2>
            <div className="row row-cols-1 row-cols-md-2 g-4">
            {jsonData?.map((data) => {
                return (
                  <div className="col mb-4" key={data.propertyId}>
                    <PropertyCard datainfo={data} />
                  </div>
                );
              })}
            </div>
        </div>
      
      
      </>
  )
}

export default PremiumHS
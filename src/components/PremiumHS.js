import React, { useEffect } from 'react'
import jsonData from '../JsonData/PremiumHomestay.json'
import PropertyCard from './PropertyCard';


function PremiumHS() {

  useEffect(() => {
    window.scrollTo(0,0);
    document.title="Premium Homestay-NIC"  
  }, [])
  

  return (
      <>
        <div className="container mt-3" >
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
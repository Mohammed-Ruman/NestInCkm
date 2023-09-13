import React from 'react'
import { Link } from 'react-router-dom'

function PropertyCard({datainfo}) {
  return (
    <>
<div className="card">
  <img src={datainfo.coverImageUrl} className="card-img-top p-2" alt="..." />
  <div className="card-body text-center">
    <h4 className="card-title mb-2">{datainfo.propertyId}</h4>
    <h6 className="card-title " style={{marginBottom:"0"}}>{datainfo.Location}</h6>
    <small className="text-body-secondary mb-2">Last updated 3 mins ago</small>
    <p className="mt-3 mb-2">{`₹ `}{datainfo.Price} per night/person</p>
    <Link
      to={"/premiumhs/property/" + datainfo.propertyId}
      className="btn btn-sm btn-dark"
    >
      View Property
    </Link>
  </div>
</div>






    
    </>
  )
}

export default PropertyCard
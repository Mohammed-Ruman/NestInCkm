import React from 'react'

function RoomCard({roomInfo}) {
  
  const id = `roomCarousel-${roomInfo.roomName.replace(/\s/g, '')}`;
  
    return (
    <>
    <div className="card">
      <div className="card-body text-center">
        <h4 className="card-title mb-2">{roomInfo.roomName}</h4>
      </div>

      <div className="container">
      <div id={id} className="carousel slide" data-bs-ride="carousel">
        <ol className="carousel-indicators">
          {roomInfo?.roomImageUrls.map((_, index) => (
            <li
              key={index}
              data-bs-target={`#${id}`}
              data-bs-slide-to={index}
              className={index === 0 ? 'active' : ''}
            ></li>
          ))}
        </ol>
        <div className="carousel-inner">
          {roomInfo?.roomImageUrls.map((image, index) => (
            <div
              key={index}
              className={`carousel-item ${index === 0 ? 'active' : ''}`}
            >
              <img
                src={image}
                alt=''
                className="d-block w-100"
              />
            </div>
          ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target={`#${id}`}
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target={`#${id}`}
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>


      
      <div className="card-body text-center">
        <h6 className="card-title " style={{marginBottom:"0"}}>{roomInfo.description}</h6>
      </div>
    </div>
    
    </>
  )
}

export default RoomCard
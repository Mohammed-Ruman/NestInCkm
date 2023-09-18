import React, { useEffect }  from 'react'

function Vehicle() {
  useEffect(() => {
    document.title="Rental Vehicle-NIC"
  
    
  }, [])

  return (
    <div>This is Vehicle Page</div>
  )
}

export default Vehicle
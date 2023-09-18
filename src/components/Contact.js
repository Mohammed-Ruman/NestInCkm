import React, { useEffect } from 'react'

function Contact() {
  useEffect(() => {
    document.title='Contact'
  
   
  }, [])
  

  return (
    <div>This is Contact page</div>
  )
}

export default Contact
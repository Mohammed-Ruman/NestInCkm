import React, { useEffect } from 'react'

function Blog() {
  useEffect(() => {
    document.title='Blog'
  
   
  }, [])
  return (
    <div>This is Blog page</div>
  )
}

export default Blog
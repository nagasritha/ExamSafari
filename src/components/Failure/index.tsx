import React from 'react'
import './index.css'

const Failure:React.FC = ()=>{
    return <div className="container">
    <img src="https://res.cloudinary.com/dkredoejm/image/upload/v1710328116/notFound_fvqggu.png" alt="not-found"/>
    <p className="not-found-text">Not Found</p>
  </div>
}

export default Failure
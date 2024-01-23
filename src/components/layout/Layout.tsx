import React from 'react'
import Footer from '../footer/Footer'
import Navbar from '../navbar/Navbar'
import './index.css'

function Layout({ children }) {
  return (
    <div>
       <marquee className="animated-color">
     15% discount for 1st time users!!
    </marquee>
      <Navbar />
      <div className="content">
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout
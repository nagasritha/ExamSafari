import React from 'react'
import Footer from '../footer/Footer'
import Navbar from '../navbar/Navbar'
import './index.css'


const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className="content">
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout
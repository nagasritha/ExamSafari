import React , {useEffect} from 'react'
import Footer from '../footer/Footer'
import Navbar from '../navbar/Navbar'
import './index.css'


const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  useEffect(()=>{
    window.scrollTo(0,0);
  },[]);
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
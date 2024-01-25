import Footer from '../footer/Footer'
import Navbar from '../navbar/Navbar'
import './index.css'

function Layout({ children } : any) {
  return (
    <div>
       <div className="animated-color">
     15% discount for 1st time users!!
    </div>
      <Navbar />
      <div className="content">
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout
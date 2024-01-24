import { FaCity } from "react-icons/fa";
import { RiCustomerService2Fill } from "react-icons/ri";
import { FaPeopleRoof } from "react-icons/fa6";
import './index.css'

function Stats() {
  return (
    <div className='stats-container'>
    <div className="stats">
        <div className="stats-item relative h-64 transition-all duration-300 hover:bg-gradient-to-t hover:from-blue-500 hover:to-white-500">
          <div className="align-center">
            <FaCity style={{color: "#00aff5",}} className="image" />
          </div>        
            <h2 className="heading">4+ Cities</h2> 
            <h6 className="text-[#6B7280] para">Book your perfect place from an extensive list of options.</h6>           
        </div>

        <div className="stats-item relative h-64 transition-all duration-300 hover:bg-gradient-to-t hover:from-blue-500 hover:to-white-500">
            <div className='align-center'>
            <RiCustomerService2Fill style={{color: "#00aff5",}} className='image' />
            </div>
            <h2 className="heading">3+ Services</h2> 
            <h6 className="text-[#6B7280] para">Book your perfect place from an extensive list of options.</h6>           
        </div>

        <div className="stats-item relative h-64 transition-all duration-300 hover:bg-gradient-to-t hover:from-blue-500 hover:to-white-500">
            <div className='align-center'>
            <FaPeopleRoof style={{color: "#00aff5",}} className='image' />
            </div>
            <h2 className="heading">250+ Partners</h2> 
            <h6 className="text-[#6B7280] para">Book your perfect place from an extensive list of options.</h6>           
        </div>        
        
    </div>
    </div>
  )
}

export default Stats
import "./hero.css";
import { FaSearch } from "react-icons/fa";

function HeroSection() {
  return (
    <div>
    <div className='heroSection'>
        <div className='blur'></div>
      <div className='bottom'>
        <h2 className="font text-2xl md:text-5xl z-5 text-[#030914] uppercase font-semibold">
          travel your exam city with exam safari
        </h2>
        <div className='home-search-bar'>
          <FaSearch/>
          <input type='text' placeholder="search here" className="home-input"/>
        </div>
       </div> 
      
    </div>
    <div className="rounded-xl floating">Book Now</div>
    </div>
  );
}

export default HeroSection;

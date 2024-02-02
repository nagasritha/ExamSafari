import { FaCity } from "react-icons/fa";
import { RiCustomerService2Fill } from "react-icons/ri";
import { FaPeopleRoof } from "react-icons/fa6";
import  { useRef,useEffect, useState } from 'react';
import './index.css'

function Stats() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        // Check if there is overflow content to the left
        setShowLeftArrow(containerRef.current.scrollLeft > 0);
        // Check if there is overflow content to the right
        setShowRightArrow(
          containerRef.current.scrollLeft <
            containerRef.current.scrollWidth - containerRef.current.clientWidth
        );
      }
    };

    // Attach the handleScroll function to the scroll event
    if (containerRef.current) {
      containerRef.current.addEventListener('scroll', handleScroll);
    }
    handleScroll();

    // Cleanup: Remove the scroll event listener when the component unmounts
    return () => {
      if (containerRef.current) {
        containerRef.current.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft -= 250; // Adjust the scroll distance as needed
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft += 250; // Adjust the scroll distance as needed
    }
  };

  return (
    <div className='lg:my-16'>
    <div className="stats" ref={containerRef}>
        <div className="stats-item transition-all duration-300 hover:bg-gradient-to-t hover:from-blue-500 hover:to-white-500">
          <div className="align-center">
            <FaCity style={{color: "#00aff5",}} className="image" />
          </div>        
            <h2 className="heading">4+ Cities</h2> 
            <h6 className="text-[#6B7280] para">Book your perfect place from an extensive list of options.</h6>           
        </div>
        <div className="stats-item transition-all duration-300 hover:bg-gradient-to-t hover:from-blue-500 hover:to-white-500">
            <div className='align-center'>
            <RiCustomerService2Fill style={{color: "#00aff5",}} className='image' />
            </div>
            <h2 className="heading">3+ Services</h2> 
            <h6 className="text-[#6B7280] para">Book your perfect place from an extensive list of options.</h6>           
        </div>
        <div className="stats-item transition-all duration-300 hover:bg-gradient-to-t hover:from-blue-500 hover:to-white-500">
            <div className='align-center'>
            <FaPeopleRoof style={{color: "#00aff5",}} className='image' />
            </div>
            <h2 className="heading">250+ Partners</h2> 
            <h6 className="text-[#6B7280] para">Book your perfect place from an extensive list of options.</h6>           
        </div>  

    </div>
    <div className='controls'>
        {/* Left arrow control */}
     <div>
     {showLeftArrow && <div className="control-style"
        onClick={scrollLeft}
      >
       &lt;
      </div>
      }
     </div>
               
      {/* Right arrow control */}
      <div>
      {showRightArrow && <div className="control-style"
        onClick={scrollRight}>
       &gt;
      </div>}
      </div>
      </div>
    </div>
  )
}

export default Stats
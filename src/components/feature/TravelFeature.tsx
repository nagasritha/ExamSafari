import { GiTakeMyMoney } from "react-icons/gi";
import { TbZoomMoney } from "react-icons/tb";
import { Ri24HoursLine } from "react-icons/ri";
import { MdOutlineVerifiedUser } from "react-icons/md";
import React, { useRef,useEffect, useState } from 'react';
import './index.css'

function TravelFeature() {
 
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
      containerRef.current.scrollLeft -= 350; // Adjust the scroll distance as needed
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft += 350; // Adjust the scroll distance as needed
    }
  };

  return (
    <>
    <div className='services-container'>
        <div className='service-heading'> Travel kar lo guys please ,ek baar kar lo</div>
        <div className='service-para'>Travel karna chahiye chahe man kare ya na kare per karna chahiye  </div>
      <div className="aco" ref={containerRef}>
          <div className="stats-item">
              <div className='align-center'>
              <GiTakeMyMoney style={{color: "#00aff5",}} className='image' />
              </div>
              <h2 className="heading">Maje hi maje hein  dekhlo</h2> 
              <h6 className="text-[#6B7280] para">Time is money. Save both when you book with us.</h6>           
          </div>

          <div className="stats-item">
              <div className='align-center'>
              <TbZoomMoney style={{color: "#00aff5",}} className='image' />
              </div>
              <h2 className="heading">apko samosa bhi denge  </h2> 
              <h6 className="text-[#6B7280] para">Find a lower price and we'll match it. No questions asked. .</h6>           
          </div>

          <div className="stats-item">
              <div className='align-center'>
              <Ri24HoursLine  style={{color: "#00aff5",}} className='image' />
              </div>
              <h2 className="heading">24x7 Assistance</h2> 
              <h6 className="text-[#6B7280] para">If you have a doubt or a query, we’re always a call away.</h6>           
          </div>

          <div className="stats-item">
              <div className="align-center">
              <MdOutlineVerifiedUser style={{color: "#00aff5",}} className='image' />
              </div>
              <h2 className="heading">100% Verified samosa </h2> 
              <h6 className="text-[#6B7280] para">We promise to deliver what you see on the website.</h6>           
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

  </>
  )
}

export default TravelFeature
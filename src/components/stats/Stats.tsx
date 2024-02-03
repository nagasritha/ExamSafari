import React, {useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaCity } from "react-icons/fa";
import { RiCustomerService2Fill } from "react-icons/ri";
import { FaPeopleRoof } from "react-icons/fa6";
import './index.css'

const Stats: React.FC = () => {
  const [slidesToShow,setSlideToShow]=useState<number>(1)
  const [dots,setDots]=useState<boolean>(true)
  const [centerAlign,setCenterAlign]=useState<boolean>(true)
  const [centerPadding,setCenterPadding]=useState<number>(50)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 400) {
        setSlideToShow(1);
      } else if (window.innerWidth <= 1000) {
        setSlideToShow(2);
        setCenterPadding(10);
        setCenterAlign(false);
      } else {
        setSlideToShow(3);
        setDots(false);
        setCenterPadding(10);
        setCenterAlign(false);
      }
    };
  
    // Run handleResize initially
    handleResize();
  
    // Add event listener to handle window resize
    window.addEventListener('resize', handleResize);
  
    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Add window.innerWidth as dependency to rerun effect on resize
  

  const CustomPrevArrow = (props: any) => (
    <button onClick={props.onClick} className="custom-prev-arrow">
     &lt;
    </button>
  );
  
  const CustomNextArrow = (props: any) => (
    <button onClick={props.onClick} className="custom-next-arrow">
      &gt;
    </button>
  );

  const settings = {
    dots: dots,
    infinite: false,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    centerMode:centerAlign,
    centerPadding:`${centerPadding}px`,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  

  return (
    <div>
      <Slider {...settings}>
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
      </Slider>
    </div>
  );
};

export default Stats;

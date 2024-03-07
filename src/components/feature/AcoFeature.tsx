import React, {useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { GiTakeMyMoney } from "react-icons/gi";
import { TbZoomMoney } from "react-icons/tb";
import { Ri24HoursLine } from "react-icons/ri";
import { MdOutlineVerifiedUser } from "react-icons/md";
import './index.css'

const AcoFeature: React.FC = () => {
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
        setCenterPadding(20);
        setCenterAlign(false);
      } 
      else if (window.innerWidth <= 1200) {
        setSlideToShow(3);
        setCenterPadding(20);
        setCenterAlign(false);
      }else{
        setSlideToShow(4);
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
    <button onClick={props.onClick} className="custom-prev-arrow-feauture">
     &lt;
    </button>
  );
  
  const CustomNextArrow = (props: any) => (
    <button onClick={props.onClick} className="custom-next-arrow-feauture">
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

  const [data, setData] = useState({
    homeData: {
       
      acoFeautureHeading: "",
      acoFeautureDescription : "",
   
    }
  });

  useEffect(() => {
    fetch("https://example-na5m.onrender.com/home/home")
      .then((result) => result.json())
      .then((resp) => {
        // console.log("result", resp);
        setData(resp);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
      <div className="service-heading pb-2">{data?.homeData?.acoFeautureHeading}</div>
      <div className="service-para pb-4">{data?.homeData?.acoFeautureDescription}</div>
     <div className='mx-3 pt-6'> 
      <Slider {...settings}>

        <div className='mx-3 '>
          <div className="mx-4 p-3 transition-all rounded-xl duration-300 hover:bg-gradient-to-t hover:from-blue-300 hover:to-white-500">
          <div className='align-center'>
            <GiTakeMyMoney style={{color: "#00aff5",}} className='image' />
          </div>
          <h2 className="heading text-gray-800">Quick & easy bookings</h2> 
          <h6 className="text-[#6B7280] para">Time is money. Save both when you book with us.</h6>      
        </div>
        </div>
        <div className='mx-3'>
           <div className="mx-4 p-3 transition-all rounded-xl duration-300 hover:bg-gradient-to-t hover:from-blue-300 hover:to-white-500">
          <div className='align-center'>
            <TbZoomMoney style={{color: "#00aff5",}} className='image' />
          </div>
          <h2 className="text-gray-800 heading">Price Match Guarantee</h2> 
          <h6 className="text-[#6B7280] para">Find a lower price and we'll match it. No questions asked. .</h6>      
          </div>
        </div>
        <div className='mx-3'>
           <div className="mx-4 p-3 rounded-xl transition-all duration-300 hover:bg-gradient-to-t hover:from-blue-300 hover:to-white-500">
          <div className='align-center'>
            <Ri24HoursLine  style={{color: "#00aff5",}} className='image' />
          </div>
          <h2 className="text-gray-800 heading">24x7 Assistance</h2> 
          <h6 className="text-[#6B7280] para">If you have a doubt or a query, we’re always a call away.</h6>          
        </div> 
        </div> 
        <div className='mx-3'>
        <div className="mx-4 p-3 rounded-xl transition-all duration-300 hover:bg-gradient-to-t hover:from-blue-300 hover:to-white-500">
          <div className='align-center'>
            <MdOutlineVerifiedUser style={{color: "#00aff5",}} className='image' />
          </div>
          <h2 className="text-gray-800 heading">100% Verified Listings</h2> 
          <h6 className="text-[#6B7280] para">We promise to deliver what you see on the website.</h6>           
        </div>
        </div>  
      </Slider>
      </div>
    </div>
  );
};

export default AcoFeature;

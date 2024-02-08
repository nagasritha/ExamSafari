import React, {useEffect, useState } from 'react';
import Slider from 'react-slick';
import {Link} from 'react-router-dom'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './index.css'

const ExamCity: React.FC = () => {
  const [slidesToShow,setSlideToShow]=useState<number>(1)
  const [dots,setDots]=useState<boolean>(true)
  const [centerAlign,setCenterAlign]=useState<boolean>(true)
  const [centerPadding,setCenterPadding]=useState<number>(20)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 350) {
        setSlideToShow(1);
      }
      if (window.innerWidth <= 480) {
        setSlideToShow(1);
        setCenterPadding(80)
      } else if (window.innerWidth <= 1220) {
        setSlideToShow(2);
        setCenterAlign(false);
        setCenterPadding(50);
      } 
     else{
        setSlideToShow(3);
        setDots(false);
        setCenterPadding(0);
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

  

  return (
    <div>
       <h1 className='service-heading'>Services</h1>
      <p className='service-para'>Little text about services </p>
      <Slider {...settings}>
      <Link to="/examcitymain">
            <div className="services-item relative h-64 transition-all duration-300 hover:bg-gradient-to-t from-red-500 to-pink-500">
                <img className="h-[300px] w-auto rounded-[25px] p-2 service-image" src="./images/allahabad.png" alt="dummy-image"/>
                <button className="exams-item-btn">Allahabad..</button>
            </div>
            </Link>
          
            <Link to="/examcitymain">
            <div className="services-item relative h-64 transition-all duration-300 hover:bg-gradient-to-t from-red-500 to-pink-500">
                <img className="h-[300px] w-auto rounded-[25px] p-2 service-image" src="./images/lucknow.png" alt="dummy-image"/>
            <button className="exams-item-btn">Lucknow..</button>
            </div>
            </Link>

            <Link to="/examcitymain">
            <div className="services-item relative h-64 transition-all duration-300 hover:bg-gradient-to-t from-red-500 to-pink-500">
                <img className="h-[300px] w-auto rounded-[25px] p-2 service-image" src="./images/kanpur.png" alt="dummy-image"/>
                <button className="exams-item-btn">Kanpur..</button>
            </div>
            </Link>
        
      </Slider>
    </div>
  );
};

export default ExamCity;
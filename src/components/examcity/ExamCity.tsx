// import React, {useEffect, useState } from 'react';
// import Slider from 'react-slick';
import {Link} from 'react-router-dom'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './index.css'

const ExamCity: React.FC = () => {
  // const [slidesToShow,setSlideToShow]=useState<number>(1)
  // const [dots,setDots]=useState<boolean>(true)
  // const [centerAlign,setCenterAlign]=useState<boolean>(true)
  // const [centerPadding,setCenterPadding]=useState<number>(20)

  // useEffect(() => {
  //   const handleResize = () => {
  //     if (window.innerWidth <= 350) {
  //       setSlideToShow(1);
  //       setCenterAlign(false);
  //     }
  //     if (window.innerWidth <= 480) {
  //       setSlideToShow(1);
  //       setCenterPadding(50);
  //     } else if (window.innerWidth <= 1220) {
  //       setSlideToShow(2);
  //       setCenterAlign(false);
  //       setCenterPadding(50);
  //     } 
  //    else{
  //       setSlideToShow(3);
  //       setDots(false);
  //       setCenterPadding(0);
  //       setCenterAlign(false);
  //     }
  //   };
  
  //   // Run handleResize initially
  //   handleResize();
  
  //   // Add event listener to handle window resize
  //   window.addEventListener('resize', handleResize);
  
  //   // Cleanup function to remove event listener
  //   return () => {
  //     window.removeEventListener('resize', handleResize);
  //   };
  // }, []); // Add window.innerWidth as dependency to rerun effect on resize
  

  // const CustomPrevArrow = (props: any) => (
  //   <button onClick={props.onClick} className="custom-prev-arrow-feauture">
  //    &lt;
  //   </button>
  // );
  
  // const CustomNextArrow = (props: any) => (
  //   <button onClick={props.onClick} className="custom-next-arrow-feauture">
  //     &gt;
  //   </button>
  // );

  // const settings = {
  //   dots: dots,
  //   infinite: false,
  //   speed: 500,
  //   slidesToShow: slidesToShow,
  //   slidesToScroll: 1,
  //   centerMode:centerAlign,
  //   centerPadding:`${centerPadding}px`,
  //   prevArrow: <CustomPrevArrow />,
  //   nextArrow: <CustomNextArrow />,
  // };

  

  return (
    <div>
       <h1 className='service-heading'>Exam City</h1>
      <p className='service-para'>Little text about exam City </p>
      {/* <Slider {...settings}/> */}

      <div className='md:flex md:overflow-x-scroll HideScrollBar  md:flex-row grid grid-cols-3 gap pt-2 md:pl-4  '>
      <Link to="/examcitymain">
            <div className=" rounded-xl relative h-36 md:h-48  transition-all duration-300 hover:bg-gradient-to-t from-red-500 to-pink-500">
                <img className="md:h-48 h-36 aspect-square md:aspect-auto md:max-w-80  rounded-[25px] p-2 " src="./images/lucknow.png" alt="dummy-image"/>
            <button className="exams-item-btn px-4">Lucknow</button>
            </div>
            </Link> 
          
            <Link to="/examcitymain">
            <div className="rounded-xl relative  h-36 md:h-48 transition-all duration-300 hover:bg-gradient-to-t from-red-500 to-pink-500">
                <img className="md:h-48 h-36 aspect-square  md:aspect-auto md:max-w-80 rounded-[25px] p-2 " src="./images/lucknow.png" alt="dummy-image"/>
            <button className="exams-item-btn px-4">Lucknow</button>
            </div>
            </Link>

            

            <Link to="/examcitymain">
            <div className="rounded-xl relative h-36 md:h-48   transition-all duration-300 hover:bg-gradient-to-t from-red-500 to-pink-500">
                <img className=" md:h-48 h-36 aspect-square md:aspect-auto md:max-w-80  rounded-[25px] p-2 " src="./images/kanpur.png" alt="dummy-image"/>
                <button className="exams-item-btn px-4">Kanpur</button>
            </div>
            </Link>

            <Link to="/examcitymain">
            <div className="rounded-xl relative h-36 md:h-48   transition-all duration-300 hover:bg-gradient-to-t from-red-500 to-pink-500">
                <img className=" md:h-48 h-36 aspect-square md:aspect-auto md:max-w-80 rounded-[25px] p-2 " src="./images/kanpur.png" alt="dummy-image"/>
                <button className="exams-item-btn px-4 ">Kanpur</button>
            </div>
            </Link>

            <Link to="/examcitymain">
            <div className="rounded-xl relative md:h-48 h-36   transition-all duration-300 hover:bg-gradient-to-t from-red-500 to-pink-500">
                <img className="  md:h-48 h-36 aspect-square md:aspect-auto md:max-w-80 rounded-[25px] p-2 " src="./images/kanpur.png" alt="dummy-image"/>
                <button className="exams-item-btn px-4">Kanpur</button>
            </div>
            </Link>

            <Link to="/examcitymain">
            <div className="rounded-xl   relative md:h-48 h-36  transition-all duration-300 hover:bg-gradient-to-t from-red-500 to-pink-500">
                <img className="md:h-48 h-36 aspect-square md:aspect-auto md:max-w-80 rounded-[25px] p-2 " src="./images/kanpur.png" alt="dummy-image"/>
                <button className="exams-item-btn px-4">Kanpur</button>
            </div>
            </Link>
            </div>
        
      {/* </Slider> */}
    </div>
  );
};

export default ExamCity;
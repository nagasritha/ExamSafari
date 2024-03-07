// import React, {useEffect, useState } from 'react';
// import Slider from 'react-slick';
import {Link} from 'react-router-dom'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './index.css'
import { useEffect, useState } from 'react';

const ExamCity: React.FC = () => {
    const [data, setData] = useState({
        homeData: {
            examHeading: "",
            examDescription:"",
         
       
        }
      });
    
      useEffect(() => {
        fetch("https://example-na5m.onrender.com/home/home")
          .then((result) => result.json())
          .then((resp) => {
            console.log("result", resp);
            setData(resp);
          })
          .catch((error) => {
            console.error("Error fetching data:", error);
          });
      }, []);
    
  return (
    <div>
       <h1 className='service-heading'>{data.homeData.examHeading}</h1>
      <p className='service-para'> {data.homeData.examDescription} </p>
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

import { useRef,useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import './index.css'

function ExamCity() {
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
    <div className='services-container my-36'>
        <div className='service-heading'>Exam Cities</div>
        <div className='service-para'>Little text about Cities </div>
        <div className='services-items' ref={containerRef}>
            
            <Link to="/allahabad">
            <div className="services-item relative h-64 transition-all duration-300 hover:bg-gradient-to-t from-red-500 to-pink-500">
                <img className="h-[300px] w-auto rounded-[25px] p-2 service-image" src="./public/images/allahabad.png" alt="dummy-image"/>
                <a href="" className='absolute top-1 ml-2 text-2xl font-semibold text-neutral-50 pt-6 pl-4'></a>
                <button className="absolute bottom-2 left-3 bg-red-500 text-white p-2 rounded-[15px] hover:bg-blue-600 m-2">Allahabad..</button>
            </div>
            </Link>
          
            <Link to="/lucknow">
            <div className="services-item relative h-64 transition-all duration-300 hover:bg-gradient-to-t from-red-500 to-pink-500">
                <img className="h-[300px] w-auto rounded-[25px] p-2 service-image" src="./public/images/lucknow.png" alt="dummy-image"/>
                <a href="" className='absolute top-1 ml-2 text-2xl font-semibold uppercase text-neutral-50 pt-6 pl-4'></a>
            <button className="absolute bottom-2 left-3 bg-red-500 text-white p-2 rounded-[15px] hover:bg-blue-600 m-2">Lucknow..</button>
            </div>
            </Link>

            <Link to="/kanpur">
            <div className="services-item relative h-64 transition-all duration-300 hover:bg-gradient-to-t from-red-500 to-pink-500">
                <img className="h-[300px] w-auto rounded-[25px] p-2 service-image" src="./public/images/kanpur.png" alt="dummy-image"/>
                <a href="" className='absolute top-1 ml-2 text-2xl font-semibold text-neutral-50 pt-6 pl-4'></a>
                <button className="absolute bottom-2 left-3 bg-red-500 text-white p-2 rounded-[15px] hover:bg-blue-600 m-2">Kanpur..</button>
            </div>
            </Link>
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

export default ExamCity
import React, { useState } from 'react';
import { LuHome } from "react-icons/lu";
import { CgProfile } from "react-icons/cg";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { useNavigate, Navigate } from "react-router-dom";
import Cookies from 'js-cookie';
import './index.css';

interface SidebarProps {
  onSelect: (buttonLabel: any) => void;
}


const SideBar: React.FC<SidebarProps> = ({ onSelect }) => {
  const [selected, setSelected] = useState<string>('Dashboard');
  const handleClick = (buttonLabel: React.SetStateAction<string>) => {
    setSelected(buttonLabel);
    onSelect(buttonLabel);
  };
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleLogout = () => {
    Cookies.remove('jwt_token');
    navigate('/');
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  if (Cookies.get("jwt_token") === undefined) {
    return <Navigate to='/login' replace={true} />;
  }
  return (
    <>
      <div className='flex md:hidden sidebar-menu  md:py-0 pl-4' >
        <label className="burger">
          <input type="checkbox" className='' id="burger" onClick={toggleSidebar} />
          <span></span>
          <span></span>
          <span></span>
        </label>
      </div>

      <div className={`md:bg-white  md:py-12 bg-black bg-opacity-40 rounded-r-xl md:rounded-none md:bg-opacity-100 w-full md:w-full px-8 h-screen  pt-10 main-bar md:flex flex-col ${isSidebarOpen ? 'Flex' : 'hidden'}`}>
       

        <div className='flex flex-col justify-center items-center md:items-start md:gap-4 md:pt-4 md:pb-6'>
          <button onClick={() => handleClick('Dashboard')} className="flex items-center text-black gap-2 md:text-xl text-3xl font-semibold md:pt-0 py-5 md:py-2">
            <div>
              <LuHome />
            </div>
            <div>Dashboard</div>
          </button>
          <button onClick={() => handleClick('Profile')} className="flex items-center text-black gap-2 md:text-xl text-3xl  font-semibold py-5 md:py-2">
            <div>
              <CgProfile />
            </div>
            <div>Profile</div>
          </button>
          <button  onClick={() => handleClick('Booking')} className="flex items-center text-black gap-2 md:text-xl text-3xl font-semibold py-5 md:py-2">
            <div>
              <FaRegCalendarAlt />
            </div>
            <div>Booking</div>
          </button>
          <button onClick={() => handleClick('History')} className="flex items-center text-black gap-2 md:text-xl text-3xl font-semibold py-5 md:py-2">
            <div>
              <FaHeart />
            </div>
            <div>History</div>
          </button>
        </div>
        <div className='flex justify-center md:pt-2  '>
          <button onClick={handleLogout} className="relative py-4 px-14  md:py-2 md:px-8 text-black text-xl md:text-base font-bold nded-full overflow-hidden bg-white rounded-full transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-blue-500 before:to-blue-300 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-full hover:before:left-0">
            Logout
          </button>
        </div>
      </div>
    </>
  );
};

export default SideBar;

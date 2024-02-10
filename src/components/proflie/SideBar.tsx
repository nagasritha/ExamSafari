import { LuHome } from "react-icons/lu";
import { CgProfile } from "react-icons/cg";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { IoBookSharp } from "react-icons/io5";

const SideBar = () => {
  return (
    <div className="bg-blue-50 w-1/5 px-8 h-screen pt-10">
      <div className="flex flex-col items-center pb-4">
        <div className="flex items-center pb-4">
          <img src="/images/logo1.jpeg" className="w-32 " alt="" />
        </div>
        <div>
          <button className="relative py-2 px-8 mb-4 text-black text-base font-bold nded-full overflow-hidden bg-white rounded-full transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-blue-500 before:to-blue-300 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-full hover:before:left-0">
            Upload
          </button>
        </div>
        <div>
          <button className="relative py-2 px-8 text-black text-base font-bold nded-full overflow-hidden bg-white rounded-full transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-blue-500 before:to-blue-300 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-full hover:before:left-0">
            Edit
          </button>
        </div>
      </div>

      <div>
        <div className="flex items-center text-black gap-2 text-lg font-semibold py-2">
          <div>
            <LuHome />
          </div>
          <div>Dashboard</div>
        </div>
        <div className="flex items-center text-black gap-2 text-lg font-semibold py-2">
          <div>
            <CgProfile />
          </div>
          <div>Profile</div>
        </div>
        <div className="flex items-center text-black gap-2 text-lg font-semibold py-2">
          <div>
            <FaRegCalendarAlt />
          </div>
          <div>Booking</div>
        </div>
        <div className="flex items-center text-black gap-2 text-lg font-semibold py-2">
          <div>
            <FaHeart />
          </div>
          <div>Shortlist</div>
        </div>
        <div className="flex items-center text-black gap-2 text-lg font-semibold py-2">
          <div>
            <IoBookSharp />
          </div>
          <div>Rerfer and Earn</div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;

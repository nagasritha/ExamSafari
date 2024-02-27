import 'react-big-calendar/lib/css/react-big-calendar.css';
import { useState ,useEffect} from "react";
import { Disclosure, Menu } from "@headlessui/react";
import {BellIcon} from "@heroicons/react/24/outline";
import {FaSearch} from 'react-icons/fa'
import "../herosection/hero.css";
import { Link } from "react-router-dom";
import { LuLogIn } from "react-icons/lu";
import Cookies from 'js-cookie'
import "./index.css";


export default function Navbar() {
  const jwtToken=Cookies.get('jwt_token');
  function handleNotificationClick(
    _event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ): void {
    throw new Error("Function not implemented.");
  }
  const [isvisible, setIsvisible] = useState(false);
  function handleBellIconHover() {
    //alert('Bell Icon Hovered!');
    setIsvisible(true);
  }
  const [showSearchBar, setShowSearchBar] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 650) {
        setShowSearchBar(true);
      } else {
        setShowSearchBar(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Disclosure as="nav" className="nav-width h-16 pr-2">
      <div className="relative flex h-20 items-center justify-between">
        <div className='pb-5'>
          <Link to={"/"}>
            <img
              className="h-11 logo ml-1"
              src={"/images/logo.png"}
              alt="Your Company"
            />
            </Link>
        </div>
        <div className="flex items-center justify-end pb-2 md:pr-5">
          {showSearchBar && 
              <div className='flex items-center md:pl-2 md:pr-2 pr-1 pl-1 bg-white rounded nav-search-bar mr-1 md:mr-3 w-1/2 sm:w-full mb-2'>
                <FaSearch className='text-sm md:text-xl'/>
                <input type='text' placeholder="search here" className="home-input text-sm md:text-xl pl-1 md:pl-3"/>
              </div>
          }
          <div className="relative">
            <div className="group">
              <button
                type="button"
                className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                onMouseOver={handleBellIconHover}
              >
                <span className="absolute -inset-1.5" />
                <span className="sr-only">View notifications</span>
                <BellIcon className="h-7 w-7" aria-hidden="true" />
                {/* Pop-up notification */}
                <div
                  className={`absolute z-10 w-[400px] ${
                    isvisible ? "block" : "hidden"
                  } bg-[#c0ccdc] border-t-4 border-[#c0ccdc] rounded-b text-[#142d55] px-4 py-3 shadow-md transition-transform duration-300 ease-in-out transform scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 right-12 -top-4`}
                  role="alert"
                  onClick={handleNotificationClick}
                >
                  <div className="flex">
                    <div className="py-1">
                      <svg
                        className="fill-current h-6 w-6 text-[#142d55] mr-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-bold">
                        Our privacy policy has changed
                      </p>
                      <p className="text-sm">
                        Make sure you know how these changes affect you.
                      </p>
                    </div>
                  </div>
                </div>
              </button>
            </div>
          </div>
          {/* Profile dropdown */}
          <Menu as="div" className="relative ml-1 md:ml-3">
            <div>
            <div>
              {(jwtToken!==undefined) ? 
                 <Link to='/profile'>
                   <p className='profile'>E</p>
                 </Link>
              :
                <Link to='/Login'>
                  <LuLogIn className='text-2xl text-white'/>
                </Link>
              }
              </div>
            </div>
          </Menu>
        </div>
      </div>
    </Disclosure>
  );
}

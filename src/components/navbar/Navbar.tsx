import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from 'react-router-dom'



function Navbar() {
  return (
    <>
        <div className="w-full fixed z-10 ">
            <div className='bg-[#142d55]  flex justify-between px-4' >
                <div className='flex gap-2 p-2 md:ml-32 ' >
                <IoCall style={{color: "#e0e0e0",}} className=' h-6 w-6' />
                <p className=' hidden md:contents   items-center justify-center bg-[#04233b] px-4 text-sm font-medium text-white sm:px-6 lg:px-8'>Call: +91 9559652054</p>                    
                </div>
                <div className='flex gap-2 p-2 ' >
                <MdEmail style={{color: "#e0e0e0",}} className=' h-6 w-6' />
                <p className=' hidden md:contents   items-center justify-center bg-[#04233b] px-4 text-sm font-medium text-white sm:px-6 lg:px-8'>Email : examsafari@gmail.com</p>                    
                </div>
                <div className='flex gap-2 p-2 md:mr-32 ' >
                <FaLocationDot style={{color: "#e0e0e0",}} className=' h-6 w-6'/>
                <p className=' hidden md:contents items-center justify-center bg-[#04233b] px-4 text-sm font-medium text-white sm:px-6 lg:px-8'>Location</p>                    
                </div>           
             </div>

            <nav className="flex justify-between bg-white text-[#142d55] px-2 md:px-4 h-[70px]  ">
              <Link to="/">              
              <div>
                <img src="./images/logo.png" className="h-32 md:ml-32 md:h-12 md:mt-4" alt="" />
              </div>
              </Link>

              <Link to={'/login'}>
              <div  className="md:text-2xl font-semibold md:mr-32 border border-[#142d55] px-2 md:mt-4 py-1 rounded-[5px]">Login</div>
              </Link>

            </nav>        
       
      

        </div>
    </>
  )
}

export default Navbar
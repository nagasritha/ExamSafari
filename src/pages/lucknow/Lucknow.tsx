import Layout from '../../components/layout/Layout'
import { IoLocationOutline } from "react-icons/io5";
import { FaBookReader } from "react-icons/fa";
import { GiClothes } from "react-icons/gi";
import { RiMotorbikeFill } from "react-icons/ri";

function Lucknow() {
  return (
    <Layout>
    <>
    <div className='mt-[120px]'>
      <div className='text-2xl md:text-3xl font-bold text-[#374151] ml-4 mt-[50px] md:mt-[100px] md:mx-44  '>Heading</div>
      <div className='text-sm md:text-xl text-[#6B7280]  ml-28 md:ml-[170px] md:mt-2'>Subheading </div>    
      <div className='flex '>  
        <div className='w-1/2  h-[700px]  overflow-y-scroll overflow-hidden'>

          {/* card 1 */}
          <div className='flex m-4  p-2 rounded-[25px] shadow-2xl  '>
            <img src="/images/kanpur.jpeg" className='h-44 w-44 rounded-[15px] md:ml-4 md:m-4' alt="" />
            <div className='md:mt-4 gap-4'>
                <h1 className='text-xl font-bold text-[#6B7280] '>North Lodge, London</h1>
                <h6 className=' font-semibold text-[#6B7280] '>small text</h6>
                <div className='flex'>
                  <IoLocationOutline style={{color: "#6B7280",}} className=' h-6 w-6'  />
                  <h6 className=' text-sm font-semibold text-[#6B7280] '>Location of our center </h6>
                </div >
                <div className='flex gap-4'>
                    <div className='flex'>
                      <FaBookReader style={{color: "#6B7280",}} className=' '  />
                      <h6 className=' text-sm font-semibold text-[#6B7280] '>Study Area </h6>
                    </div>

                    <div className='flex'>
                      <GiClothes style={{color: "#6B7280",}} className=' '  />
                      <h6 className=' text-sm font-semibold text-[#6B7280] '>Laundry Facility</h6>
                    </div>

                    <div className='flex'>
                      <RiMotorbikeFill style={{color: "#6B7280",}} className=' '  />
                      <h6 className=' text-sm font-semibold text-[#6B7280] '>Location of our center </h6>
                    </div>
                </div>
                <div className='flex mt-10'>
                  <h6 className=' text-sm font-semibold text-[#6B7280] '>From $500</h6>
                  <div className=" md:ml-[400px] bg-red-500 text-white p-2 rounded-[15px] hover:bg-blue-600 m-2">
                    Enquire....                      
                  </div>  
                </div>
            </div>
          </div>

          {/* card 2 */}
          <div className='flex m-4  p-2 rounded-[25px] shadow-2xl  '>
            <img src="/images/kanpur.jpeg" className='h-44 w-44 rounded-[15px] md:ml-4 md:m-4' alt="" />
            <div className='md:mt-4 gap-4'>
                <h1 className='text-xl font-bold text-[#6B7280] '>North Lodge, London</h1>
                <h6 className=' font-semibold text-[#6B7280] '>small text</h6>
                <div className='flex'>
                  <IoLocationOutline style={{color: "#6B7280",}} className=' h-6 w-6'  />
                  <h6 className=' text-sm font-semibold text-[#6B7280] '>Location of our center </h6>
                </div >
                <div className='flex gap-4'>
                    <div className='flex'>
                      <FaBookReader style={{color: "#6B7280",}} className=' '  />
                      <h6 className=' text-sm font-semibold text-[#6B7280] '>Study Area </h6>
                    </div>

                    <div className='flex'>
                      <GiClothes style={{color: "#6B7280",}} className=' '  />
                      <h6 className=' text-sm font-semibold text-[#6B7280] '>Laundry Facility</h6>
                    </div>

                    <div className='flex'>
                      <RiMotorbikeFill style={{color: "#6B7280",}} className=' '  />
                      <h6 className=' text-sm font-semibold text-[#6B7280] '>Location of our center </h6>
                    </div>
                </div>
                <div className='flex mt-10'>
                  <h6 className=' text-sm font-semibold text-[#6B7280] '>From $500</h6>
                  <div className=" md:ml-[400px] bg-red-500 text-white p-2 rounded-[15px] hover:bg-blue-600 m-2">
                    Enquire....                      
                  </div>  
                </div>
            </div>
          </div>

            {/* card 3 */}
          <div className='flex m-4 p-2 rounded-[25px] shadow-2xl  '>
            <img src="/images/kanpur.jpeg" className='h-44 w-44 rounded-[15px] md:ml-4 md:m-4' alt="" />
            <div className='md:mt-4 gap-4'>
                <h1 className='text-xl font-bold text-[#6B7280] '>North Lodge, London</h1>
                <h6 className=' font-semibold text-[#6B7280] '>small text</h6>
                <div className='flex'>
                  <IoLocationOutline style={{color: "#6B7280",}} className=' h-6 w-6'  />
                  <h6 className=' text-sm font-semibold text-[#6B7280] '>Location of our center </h6>
                </div >
                <div className='flex gap-4'>
                    <div className='flex'>
                      <FaBookReader style={{color: "#6B7280",}} className=' '  />
                      <h6 className=' text-sm font-semibold text-[#6B7280] '>Study Area </h6>
                    </div>

                    <div className='flex'>
                      <GiClothes style={{color: "#6B7280",}} className=' '  />
                      <h6 className=' text-sm font-semibold text-[#6B7280] '>Laundry Facility</h6>
                    </div>

                    <div className='flex'>
                      <RiMotorbikeFill style={{color: "#6B7280",}} className=' '  />
                      <h6 className=' text-sm font-semibold text-[#6B7280] '>Location of our center </h6>
                    </div>
                </div>
                <div className='flex mt-10'>
                  <h6 className=' text-sm font-semibold text-[#6B7280] '>From $500</h6>
                  <div className=" md:ml-[400px] bg-red-500 text-white p-2 rounded-[15px] hover:bg-blue-600 m-2">
                    Enquire....                      
                  </div>  
                </div>
            </div>
          </div>

          {/* card 4 */}
          <div className='flex m-4 p-2 rounded-[25px] shadow-2xl  '>
            <img src="/images/kanpur.jpeg" className='h-44 w-44 rounded-[15px] md:ml-4 md:m-4' alt="" />
            <div className='md:mt-4 gap-4'>
                <h1 className='text-xl font-bold text-[#6B7280] '>North Lodge, London</h1>
                <h6 className=' font-semibold text-[#6B7280] '>small text</h6>
                <div className='flex'>
                  <IoLocationOutline style={{color: "#6B7280",}} className=' h-6 w-6'  />
                  <h6 className=' text-sm font-semibold text-[#6B7280] '>Location of our center </h6>
                </div >
                <div className='flex gap-4'>
                    <div className='flex'>
                      <FaBookReader style={{color: "#6B7280",}} className=' '  />
                      <h6 className=' text-sm font-semibold text-[#6B7280] '>Study Area </h6>
                    </div>

                    <div className='flex'>
                      <GiClothes style={{color: "#6B7280",}} className=' '  />
                      <h6 className=' text-sm font-semibold text-[#6B7280] '>Laundry Facility</h6>
                    </div>

                    <div className='flex'>
                      <RiMotorbikeFill style={{color: "#6B7280",}} className=' '  />
                      <h6 className=' text-sm font-semibold text-[#6B7280] '>Location of our center </h6>
                    </div>
                </div>
                <div className='flex mt-10'>
                  <h6 className=' text-sm font-semibold text-[#6B7280] '>From $500</h6>
                  <div className=" md:ml-[400px] bg-red-500 text-white p-2 rounded-[15px] hover:bg-blue-600 m-2">
                    Enquire....                      
                  </div>  
                </div>
            </div>
          </div>

          {/* card 5  */}
          <div className='flex m-4 p-2 rounded-[25px] shadow-xl  '>
            <img src="/images/kanpur.jpeg" className='h-44 w-44 rounded-[15px] md:ml-4 md:m-4' alt="" />
            <div className='md:mt-4 gap-4'>
                <h1 className='text-xl font-bold text-[#6B7280] '>North Lodge, London</h1>
                <h6 className=' font-semibold text-[#6B7280] '>small text</h6>
                <div className='flex'>
                  <IoLocationOutline style={{color: "#6B7280",}} className=' h-6 w-6'  />
                  <h6 className=' text-sm font-semibold text-[#6B7280] '>Location of our center </h6>
                </div >
                <div className='flex gap-4'>
                    <div className='flex'>
                      <FaBookReader style={{color: "#6B7280",}} className=' '  />
                      <h6 className=' text-sm font-semibold text-[#6B7280] '>Study Area </h6>
                    </div>

                    <div className='flex'>
                      <GiClothes style={{color: "#6B7280",}} className=' '  />
                      <h6 className=' text-sm font-semibold text-[#6B7280] '>Laundry Facility</h6>
                    </div>

                    <div className='flex'>
                      <RiMotorbikeFill style={{color: "#6B7280",}} className=' '  />
                      <h6 className=' text-sm font-semibold text-[#6B7280] '>Location of our center </h6>
                    </div>
                </div>
                <div className='flex mt-10'>
                  <h6 className=' text-sm font-semibold text-[#6B7280] '>From $500</h6>
                  <div className=" md:ml-[400px] bg-red-500 text-white p-2 rounded-[15px] hover:bg-blue-600 m-2">
                    Enquire....                      
                  </div>  
                </div>
            </div>
          </div>


    {/* card 6 */}
          <div className='flex m-4  p-2 rounded-[25px] shadow-xl  '>
            <img src="/images/kanpur.jpeg" className='h-44 w-44 rounded-[15px] md:ml-4 md:m-4' alt="" />
            <div className='md:mt-4 gap-4'>
                <h1 className='text-xl font-bold text-[#6B7280] '>North Lodge, London</h1>
                <h6 className=' font-semibold text-[#6B7280] '>small text</h6>
                <div className='flex'>
                  <IoLocationOutline style={{color: "#6B7280",}} className=' h-6 w-6'  />
                  <h6 className=' text-sm font-semibold text-[#6B7280] '>Location of our center </h6>
                </div >
                <div className='flex gap-4'>
                    <div className='flex'>
                      <FaBookReader style={{color: "#6B7280",}} className=' '  />
                      <h6 className=' text-sm font-semibold text-[#6B7280] '>Study Area </h6>
                    </div>

                    <div className='flex'>
                      <GiClothes style={{color: "#6B7280",}} className=' '  />
                      <h6 className=' text-sm font-semibold text-[#6B7280] '>Laundry Facility</h6>
                    </div>

                    <div className='flex'>
                      <RiMotorbikeFill style={{color: "#6B7280",}} className=' '  />
                      <h6 className=' text-sm font-semibold text-[#6B7280] '>Location of our center </h6>
                    </div>
                </div>
                <div className='flex mt-10'>
                  <h6 className=' text-sm font-semibold text-[#6B7280] '>From $500</h6>
                  <div className=" md:ml-[400px] bg-red-500 text-white p-2 rounded-[15px] hover:bg-blue-600 m-2">
                    Enquire....                      
                  </div>  
                </div>
            </div>
          </div>    

          
        </div>

          {/* maps section  */}

        <div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3485.1010132440783!2d78.24399037586804!3d29.13221086121403!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390b96ff929daa1b%3A0x6f84c5006226847c!2sRajkiya%20Engineering%20College%20Bijnor!5e0!3m2!1sen!2sin!4v1704631019011!5m2!1sen!2sin"
         className='h-[700px] w-[900px]'  loading="lazy" ></iframe>
        </div>

      </div>
      </div>
    </>

  </Layout>
  )
}

export default Lucknow
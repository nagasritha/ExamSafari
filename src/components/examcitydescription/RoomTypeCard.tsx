import { FaAngleRight } from "react-icons/fa6";

const RoomTypeCard = () => {
  return (
    <div>
      <div className="Room-Card px-6 py-4 ">
            <div className="flex card hover:bg-gray-50 pb-2 ">
              <button><img  className='w-28 h-28 rounded-lg' src="/images/HotelImage1.jpg" alt="" /></button>
              <div className="All-contant px-4">
                <div className="text-lg font-semibold">Twin Ensuite</div>
                <div className="text-sm font-semibold text-gray-500 flex py-1"> <div className="pr-4">£205 - £210/week</div>    <div className="pl-4 hidden md:flex"> | Available From: 24 Jan, 2024 </div></div>
                <div className="md:flex hidden">
                  <button className="p-2 text-sm pl-0"> Non Ensuite</button>
                  <button className="p-2 text-sm">Shared Room</button>
                  <button className="p-2 text-sm">Shared Bathroom</button>
                  <button className="p-2 text-sm">Shared Kitchen</button>
                </div>
                <div>
                  <button className="flex items-center font-semibold text-base py-2 gap-2 text-blue-600 hover:bg-gray-200 px-2 rounded-lg ">View More Details <FaAngleRight /></button>
                </div>
              </div>
              <div></div>
            </div>
            <hr className="text-gray-300 h-2"/>
            <div className="Booking flex justify-between pb-4">
              <div>
              <div className="flex py-2">
                <div className="flex mr-4"> <div className="text-sm mr-1">Duration:</div> <div className="text-sm font-semibold">31 week</div></div>
                <div className="md:flex hidden"><div className="text-sm mr-1">Move In :</div> <div className="text-sm font-semibold">Flexible</div></div>
              </div>
              <div className="text-xs text-gray-600">
              Note: Immediate Move Ins
              </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="text-sm">£205/week</div>
                <button className="text-white bg-blue-600 font-semibold px-4 py-1 rounded-md">book</button>
              </div>

            </div>
            <hr className="text-gray-300 h-2"/>
            <div className="Durations flex justify-between py-2 items-center flex-col md:flex-row">
              <div className="flex gap-1"> <div className="text-sm"> Duration:</div> <div className="text-sm font-semibold"> 46 week</div></div>
              <div className="flex items-center  ">
                <div className='flex '>
                <div className="bg-gray-200 px-2 rounded-md text-sm font-semibold text-gray-600">Sold out</div>
                <div className="text-sm px-3 text-gray-600">£205/week</div>
                </div> 
                <button className="text-sm font-semibold px-3 py-1 text-blue-500 border border-blue-500 rounded-md md:ml-0 ml-24">Join Waitlist</button>
              </div>
            </div>
            <hr className="text-gray-300 h-2"/>
            <div className="Durations flex justify-between py-2 items-center flex-col md:flex-row">
              <div className="flex gap-1"> <div className="text-sm"> Duration:</div> <div className="text-sm font-semibold"> 46 week</div></div>
              <div className="flex items-center  ">
                <div className='flex '>
                <div className="bg-gray-200 px-2 rounded-md text-sm font-semibold text-gray-600">Sold out</div>
                <div className="text-sm px-3 text-gray-600">£205/week</div>
                </div> 
                <button className="text-sm font-semibold px-3 py-1 text-blue-500 border border-blue-500 rounded-md md:ml-0 ml-24">Join Waitlist</button>
              </div>
            </div>
            
          </div>
    </div>
  )
}

export default RoomTypeCard

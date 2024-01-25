import React from 'react'
import RoomTypeCard from './RoomTypeCard'



const RoomType = () => {
  return (
    <div className='w-full'>
       <div className="Room-Type bg-white w-full border-gray-300 border mb-8 rounded-lg">
        <div className="mx-6 my-4">
          <h1 className="text-2xl font-bold">Room Type (3)</h1>
        </div>
        <hr className="text-gray-300" />
        <div className="Filters mx-6 my-4 mb-6 flex">
          <button className="px-8 py-2 border border-gray-300 rounded-lg text-sm mr-4 ">
            Stay Duration
          </button>
          <button className="px-8 py-2 border border-gray-300 rounded-lg text-sm mr-4">
            Move In Month
          </button>
          <button className="text-sm font-semibold text-blue-500">Clear</button>
        </div>
        <div>
            <hr className="h-2  bg-gray-200 border-0 dark:bg-gray-700" />
          </div>

          <RoomTypeCard/>
          <hr className="  bg-gray-200  dark:bg-gray-700" />
          <RoomTypeCard/>
      </div>
    </div>
  )
}

export default RoomType

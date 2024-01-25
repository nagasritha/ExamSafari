import React from 'react'
import { FaAngleRight } from "react-icons/fa6";
import { TiTick } from "react-icons/ti";

const WhatYouGet = () => {
  return (
    <div className='w-full'>
      <div className="what-you-Get border w-full border-gray-300 rounded-lg mb-8 bg-white">
        <div className="flex gap-3 flex-col  px-8 py-4  rounded-xl justify-center">
          <p className="text-xl font-bold">What will you get?</p>
          <div className="flex gap-3 flex-col">
            <p className="font-semibold">Bills Included</p>
            <div className="grid grid-cols-3">
              <div className="flex items-center gap-1">
                <TiTick color="blue" />
                <p>Wi-Fi</p>
              </div>
              <div className="flex items-center gap-1">
                <TiTick color="blue" />
                <p>Water</p>
              </div>
              <div className="flex items-center gap-1">
                <TiTick color="blue" />
                <p>Electric</p>
              </div>
              <div className="flex items-center gap-1">
                <TiTick color="blue" />
                <p>Heating</p>
              </div>
              <div className="flex items-center gap-1">
                <TiTick color="blue" />
                <p>Gas</p>
              </div>
            </div>
          </div>
          <hr className="border border-gray-100 border-1" />
          <div className="flex gap-3 flex-col">
            <p className="font-semibold">Common Amenities</p>
            <div className="grid grid-cols-3">
              <div className="flex items-center gap-1">
                <TiTick color="blue" />
                <p>Laundry</p>
              </div>
              <div className="flex items-center gap-1">
                <TiTick color="blue" />
                <p>Bike Storage</p>
              </div>
              <div className="flex items-center gap-1">
                <TiTick color="blue" />
                <p>Recycling</p>
              </div>
              <div className="flex items-center gap-1">
                <TiTick color="blue" />
                <p>Common Room Access</p>
              </div>
              <div className="flex items-center gap-1">
                <TiTick color="blue" />
                <p>Communal Social Space</p>
              </div>
            </div>
          </div>
          <hr className="border border-gray-100 border-1" />
        </div>

        <div>
          <button
            className="bg-white text-blue-600 py-2 px-4 hover:rounded-md mx-4 font-semibold my-2  hover:bg-gray-200 gap-2 flex items-center"
           
          >
            view all amenities <FaAngleRight />
          </button>
        </div>
      </div>
    </div>
  )
}

export default WhatYouGet

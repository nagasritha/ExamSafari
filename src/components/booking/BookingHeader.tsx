const BookingHeader = () => {
    return (
      <div className="flex justify-around h-16 items-center bg-white shadow-lg fixed w-full top-0 z-10">
  
  
        <div className="logo">
          <img src="/images/logo.png" alt="" />
        </div>
  
  
        <div className="process flex text-black gap-28">
              <div className="flex gap-2 items-center justify-center"> 
                  <div className="bg-gray-300 rounded-full px-3 py-1 border-2 border-green-600 text-sm font-semibold text-gray-600">1</div>
                  <div className="text-sm font-semibold">Details</div>
              </div>
              
  
              <div className="flex gap-2  items-center justify-center">
                  <div className="bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-600">2</div>
                  <div className="text-sm font-semibold">Payment</div>
              </div>
  
              <div className="flex gap-2  items-center justify-center">
                  <div className="bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-600">3</div>
                  <div className="text-sm font-semibold">processing</div>
              </div>
        </div>
      </div>
    )
  }
  
  export default BookingHeader
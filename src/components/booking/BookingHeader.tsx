import { Link } from "react-router-dom";

const BookingHeader = () => {
  return (
    <div className="flex justify-around h-16 items-center bg-white shadow-lg fixed w-full top-0 z-10">
      <Link to="/">
        <div className="logo p-0">
          <img src="/images/logo.png" alt="" />
        </div>
      </Link>

      <div className="process flex text-black md:gap-28 gap-4">
        <div className="flex md:gap-2 gap-1 items-center justify-center">
          <div className="bg-gray-300 rounded-full px-3 py-1 border-2 border-green-600 text-sm font-semibold text-gray-600">
            1
          </div>
          <div className="text-sm font-semibold">Details</div>
        </div>

        <div className="flex md:gap-2 gap-1  items-center justify-center">
          <div className="bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-600">
            2
          </div>
          <div className="text-sm font-semibold">Payment</div>
        </div>

        <div className="flex md:gap-2 gap-1  items-center justify-center">
          <div className="bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-600">
            3
          </div>
          <div className="text-sm font-semibold">processing</div>
        </div>
      </div>
    </div>
  );
};

export default BookingHeader;


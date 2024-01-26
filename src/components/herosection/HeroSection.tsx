import "./hero.css";
import { FaSearch } from "react-icons/fa";

function HeroSection() {
  return (
    <div>
      <img
        className=" h-[600px] w-full animatedImage"
        src="/images/bannar3.png"
        alt="dummy-image"
      />
      <div className="relative mt-10">
        <h2 className="absolute bottom-[550px] font left-[400px] md:text-5xl text-[#142d55] uppercase  font-semibold">
          travel your exam city with exam safari
        </h2>
        <div className="absolute bottom-[500px] left-[700px]">
          <div className="mt-2 rounded-md shadow-sm w-100">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 mr-3">
              <span className="text-gray-500 sm:text-sm pt-2">
                <FaSearch></FaSearch>
              </span>
            </div>
            <input
              type="text"
              className="rounded-full border-0 py-1.5 pl-7 pr-20 text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6 trans"
              placeholder="Search...."
            />
          </div>
        </div>
      </div>
      <div className="rounded-xl floating">Book Now</div>
    </div>
  );
}

export default HeroSection;

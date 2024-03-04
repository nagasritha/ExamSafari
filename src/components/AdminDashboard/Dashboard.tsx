import { FiShoppingCart } from "react-icons/fi";
import { PiCurrencyDollarSimple } from "react-icons/pi";
import { RiUser3Line } from "react-icons/ri"
const Dashboard = () => {
    

  return (
    <div className="flex flex-col p-4">
      <div className="flex flex-col gap-1">
        <div className="font-semibold text-2xl">Dashboard</div>
        <div className="flex text-xs font-semibold ">
          <div>Home /</div>
          <div>Dashboard</div>
        </div>
      </div>

      <div className="flex gap-6 py-4 flex-col md:flex-row">
        <div  className="Sales md:w-1/3 w-full flex flex-col  bg-gray-200 rounded-lg  px-4 md:h-28 py-3">
          <div className="flex gap-1 items-center">
            <div className="font-semibold">Sales</div>
            <div className="text-xs">| Today</div>
          </div>
          <div className="flex py-2 gap-6 items-center">
            <div >
            <FiShoppingCart size="2rem" />
            </div>
            <div className="flex flex-col ">
                <div className="text-lg font-semibold">141</div>
                <div className="text-xs font-semibold text-green-600">12% increase</div>
            </div>
          </div>
        </div>
        <div className="Revanue  md:w-1/3 w-full flex flex-col bg-gray-200 rounded-lg  px-4 py-3 md:h-28">
          <div className="flex gap-1 items-center">
            <div className="font-semibold">Revenue</div>
            <div className="text-xs">| This Month</div>
          </div>
          <div className="flex py-2 gap-6 items-center">
            <div >
            <PiCurrencyDollarSimple size="2rem" />
            </div>
            <div className="flex flex-col ">
                <div className="text-lg font-semibold">$3,264</div>
                <div className="text-xs text-green-600 font-semibold">8% increase</div>
            </div>
          </div>
        </div>
        <div className="Customers md:w-1/3 w-full flex flex-col bg-gray-200 rounded-lg px-4 md:h-28 py-3">
          <div className="flex gap-1 items-center">
            <div className="font-semibold">Customers</div>
            <div className="text-xs">| This Year</div>
          </div>
          <div className="flex py-2 gap-6 items-center">
            <div >
            <RiUser3Line size="2rem" />
            </div>
            <div className="flex flex-col ">
                <div className="text-lg font-semibold">1244</div>
                <div className="text-xs font-semibold text-red-600">12% decrease</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

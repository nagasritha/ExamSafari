import { FiShoppingCart } from "react-icons/fi";
import { PiCurrencyDollarSimple } from "react-icons/pi";
import { RiUser3Line } from "react-icons/ri";
import { FaBus } from "react-icons/fa";

const Dashboard = () => {
  // Sample data in JSON format
  const data = [
    {
      title: "Sales",
      icon: <FiShoppingCart size="2rem" />,
      value: 141,
      change: "12% increase",
      timeframe: "Today",
    },
    {
      title: "Revenue",
      icon: <PiCurrencyDollarSimple size="2rem" />,
      value: "$3,264",
      change: "8% increase",
      timeframe: "This Month",
    },
    {
      title: "Customers",
      icon: <RiUser3Line size="2rem" />,
      value: 1244,
      change: "12% decrease",
      timeframe: "This Year",
    },
    {
      title: "service",
      icon: <FaBus  size="2rem" />,
      value: 3,
      change: "10% increase",
      timeframe: "",
    },
  ];

  return (
    <div className="flex flex-col p-4">
      <div className="flex flex-col gap-1">
        <div className="font-semibold text-2xl">Dashboard</div>
        <div className="flex text-xs font-semibold ">
          <div>Home /</div>
          <div>Dashboard</div>
        </div>
      </div>

      <div className="flex gap-10 pt-10 flex-col md:flex-row flex-wrap  justify-center ">
        {data.map((item, index) => (
          <div key={index} className="md:w-1/4 w-full flex flex-col bg-gray-200 rounded-lg px-4 md:h-28 py-3">
            <div className="flex gap-1 items-center">
              <div className="font-semibold">{item.title}</div>
              <div className="text-xs">| {item.timeframe}</div>
            </div>
            <div className="flex py-2 gap-6 items-center">
              <div>{item.icon}</div>
              <div className="flex flex-col">
                <div className="text-lg font-semibold">{item.value}</div>
                <div className={`text-xs font-semibold ${item.change.includes('increase') ? 'text-green-600' : 'text-red-600'}`}>{item.change}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;

import { Link } from "react-router-dom";
import { CgShoppingCart } from "react-icons/cg";
import { PieChart } from '@mui/x-charts/PieChart';

const Dashboard = () => {
  // Define JSON data for blocks
  const blockData = [
    { title: "Total no of projects", value: 145 },
    { title: "Total no of clients", value: 35 },
    { title: "Total no of customers", value: 1244 }
  ];

  return (
    <div className="py-4 px-4">
      <div className="flex gap-2 font-semibold py-4">
        <Link to={"/"}>
          <div>Home </div>
        </Link>
        <div>/ Dashboard</div>
      </div>

      <div className="main-box h-screen flex-col gap-6 md:flex-row  overflow-hidden flex">
        <div className="left-con md:w-3/5 w-full flex md:flex-row flex-col gap-8 ">
          {/* Map over block data */}
          {blockData.map((block, index) => (
            <div className="blocks md:w-1/3 w-full h-32 rounded-md flex flex-col bg-white shadow-lg" key={index}>
              <div className="flex justify-center py-4">
                {/* Use block title */}
                <div className="text-md font-medium text-blue-900">{block.title}</div>
              </div>
              <div className="flex px-8 gap-10 justify-center md:justify-start pt-2  items-center">
                <div className="text-3xl">
                  <CgShoppingCart />
                </div>
                {/* Use block value */}
                <div className="font-bold text-lg">{block.value}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="right-con md:w-2/5 w-full px-8 bg-white h-fit py-2 rounded-md shadow-md flex flex-col gap-2 ">
          <div className=" flex justify-center" >
            <div className="text-lg font-semibold">Our Growth</div>
            </div>
          <div className="pi-chart ">
          <PieChart
      series={[
        {
          data: [
            { id: 0, value: 10, label: ' Email' },
            { id: 1, value: 15, label: 'Union Ads' },
            { id: 2, value: 20, label: 'Video Ads' },
          ],
        },
      ]}
      width={300}
      height={150}
    />
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

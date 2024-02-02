import ExamCityCard from "./ExamCityCard";
import "@/index.css"
 

import { properties } from "@/constants/ExamCityData";
import Pagination from "./Pagination";

const ExamCityHome = () => {
  return (
    <div className="app px-10 py-4 w-full  ">
      <div className="flex left-box">
              <div className="font-semibold text-blue-600">India </div> /
              <div className="font-semibold text-blue-600">Uttar Pradesh </div> /
              <div className="font-semibold text-blue-600">Allahbad</div>
            </div>
      <div className=" overflow-y-scroll h-screen HideScrollBar ">
      <ExamCityCard properties={properties} />
      </div>
    <div className="flex justify-center mt-4">
      <Pagination/>
      </div>
    </div>
  );
};

export default ExamCityHome;
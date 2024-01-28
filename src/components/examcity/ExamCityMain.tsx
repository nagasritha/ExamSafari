import Accordion from "../examcitydescription/Accordion"
import ExamCityHome from "./ExamCityHome"
import ExamCityMap from "./ExamCityMap"

const ExamCityMain = () => {
  return ( 
    <div className=" bg-gray-100">
    <div className="flex main-section  mb-4" >
        <div className="md:w-1/2 w-full">
      <ExamCityHome/>
      </div>
      <div className="w-1/2 hidden md:block ">
      <ExamCityMap/>
      </div>
    </div>
    <div className="mx-8 my-4">
    <Accordion/>
    </div>
    
    </div>
  )
}

export default ExamCityMain

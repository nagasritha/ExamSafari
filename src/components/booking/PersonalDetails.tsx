import { FaCircleCheck } from "react-icons/fa6";


const PersonalDetails = () => {
  return (
    <div className="w-4/6 outline">
    <div className="upper-div flex justify-between pb-6">
        <div className="text-2xl font-bold">Booking Form</div>
        <div className="flex gap-2">
            <div className="">Need help, we are here</div>
            <div className="font-bold underline">  Contact us</div>
        </div>
    </div>
      
            
    <div className="Accommodation Details w-full h-40 py-6 px-6 pl-8 rounded-lg outline mb-4 bg-white">
        <div className="flex items-center gap-2 pb-4">
            <div className="Check-box">
            <FaCircleCheck style={ { color: "green", fontSize: "2.5em" }}/>
            </div>
            <div className="flex flex-col ">
                <div className="font-semibold text-lg">Accommodation Details</div>
                <div className="font-normal">Tell us about your ideal accommodation!</div>
            </div>
        </div>
        <div><hr className="text-gray-600"/></div>

        <div className="flex justify-between py-4 items-center"> 
            <div className="flex gap-2 text-sm">
                <div>Studio</div>
                <div>7 Sep, 2024 to 12 Jul, 2025</div>
                <div>44 week</div>
            </div>
            <div>
                <button className="py-1 px-6  text-sm rounded-md border border-gray-500">Edit</button>
            </div>
        </div>
    </div>

    <div className="Personal Details outline bg-white mb-2 pl-8 ">
        <div className="upper-Portion flex py-4 pl-0 pb-2 px-4 items-center">
            <div className="flex">
            <div className="border border-green-500  rounded-full py-3 ml-0 m-4 px-4 items-center justify-center text-sm font-bold ">2</div>
            </div>
            <div>
                <div className="font-semibold text-lg">Personal Details</div>
                <div>To create a legal/accommodation contract we need your personal information.</div>
            </div>
        </div>

        <div className="mb-4"><hr /></div>

        <div className="heading-1 font-bold  text-blue-500 pb-4"> Personal Details </div>
    </div>

    </div>
  )
}

export default PersonalDetails

import { GiTakeMyMoney } from "react-icons/gi";
import { TbZoomMoney } from "react-icons/tb";
import { Ri24HoursLine } from "react-icons/ri";
import { MdOutlineVerifiedUser } from "react-icons/md";

function TravelFeature() {
  return (
    <>
    <div>
        <div className='text- md:text-3xl font-bold text-[#374151] md:mt-[50px] mt-10 ml-16 md:ml-44 pt-6 md:pt-20 '> Travel kar lo guys please ,ek baar kar lo</div>
        <div className='text-sm md:text-xl text-[#6B7280]  px-6 text-center md:text-left md:px-0  md:ml-[170px] md:mt-2'>Travel karna chahiye chahe man kare ya na kare per karna chahiye  </div>
        <div className="scroll-smooth  text-[10px] md:flex gap-8 justify-between  px-2 md:px-4 pt-6 md:pt-14 md:mx-32">
          <div className=" ">
              <GiTakeMyMoney style={{color: "#00aff5",}} className='h-20 w-20 ml-32 ' />
              <h2 className="text-[#374151] font-bold text-xl ml-16 md:ml-24">Maje hi maje hein  dekhlo</h2> 
              <h6 className="text-[#6B7280] text-[15px] md:text-sm md:mt-2 ml-2">Time is money. Save both when you book with us.</h6>           
          </div>

          <div className=" mt-10 md:mt-0">
              <TbZoomMoney style={{color: "#00aff5",}} className='h-20 w-20 ml-32 ' />
              <h2 className="text-[#374151] font-bold text-xl ml-20 md:ml-24">apko samosa bhi denge  </h2> 
              <h6 className="text-[#6B7280] text-[15px] md:text-sm md:mt-2 ml-2">Find a lower price and we'll match it. No questions asked. .</h6>           
          </div>

          <div className=" mt-10 md:mt-0">
              <Ri24HoursLine  style={{color: "#00aff5",}} className='h-20 w-20 ml-32 ' />
              <h2 className="text-[#374151] font-bold text-xl ml-24 md:ml-24">24x7 Assistance</h2> 
              <h6 className="text-[#6B7280] text-[15px] md:text-sm md:mt-2 ml-2">If you have a doubt or a query, we’re always a call away.</h6>           
          </div>

          <div className=" mt-10 md:mt-0">
              <MdOutlineVerifiedUser style={{color: "#00aff5",}} className='h-20 w-20 ml-32 ' />
              <h2 className="text-[#374151] font-bold text-xl ml-20 md:ml-24">100% Verified samosa </h2> 
              <h6 className="text-[#6B7280] text-[15px] md:text-sm md:mt-2 ml-2">We promise to deliver what you see on the website.</h6>           
          </div>                 

  </div>



    </div>

  </>
  )
}

export default TravelFeature
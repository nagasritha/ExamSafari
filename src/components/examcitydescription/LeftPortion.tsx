import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import { GoShare } from "react-icons/go";
import { CiHeart } from "react-icons/ci";
import { IoCameraOutline } from "react-icons/io5";
import { IoPlayCircleOutline } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import { MdOutlineLocalOffer } from "react-icons/md";
import { FaMapMarkerAlt,FaAngleRight } from "react-icons/fa";
import { MdElectricBolt } from "react-icons/md";
import Modal from 'react-modal'
import EnquireModal from '@/components/ModalComponents/EnquireModal';
import ThankyouModal from '@/components/ModalComponents/ThankyouModal';
import HotelDescription from "./HotelDescription";
import Cookies from "js-cookie"

Modal.setAppElement('#root');

const LeftPortion: React.FC = () => {
  const token=Cookies.get("jwt_token");
  const navigate=useNavigate();
  const [enquireIsOpen, setEnquire] = useState(false);
  const [thankyou,setThankyou] = useState(false);
  const [failure,setFailure]=useState<boolean>(false);

  const EnquireFalse=(value:boolean)=>{
    closeEnquire();
    setThankyou(true);
    setFailure(value);
  }

  const closeEnquire=()=>{
    setEnquire(false);
  }
  const closeThankyou=()=>{
    setThankyou(false);
    console.log("called");
  }
  const enquireSetup=()=>{
    if(token!==undefined){
      setEnquire(true)
    }else{
      navigate("/login");
    }
  }
  
  return (
    <div className="MainContainer md:w-4/6 w-full items-center flex flex-col justify-center mt-4   md:ml-10 md:mr-3 mx-2  rounded-lg">
      <div className="border w-full border-gray-300  my-4 mt-0 bg-white rounded-lg">
        <div className="m-4 ">
          <div className="flex flex-wrap sm:no-wrap justify-between top-container mt-4 items-center">
            <div className="flex left-box">
              <div className="font-semibold text-blue-600">India </div> /
              <div className="font-semibold text-blue-600">Uttar Pradesh </div> /
              <div className="font-semibold text-blue-600">Allahbad</div>
            </div>

            <div className="Right-box flex mt-2 sm:mt-0">
              <button className="flex items-center text-blue-600 font-semibold mr-1 gap-1">
                <GoShare />
                Share
              </button>
              <button className="flex items-center text-blue-600 font-semibold pl-2 gap-1">
                <CiHeart />
                Shortlist
              </button>
            </div>
          </div>

          <div className="Picture-box">
            <div className="flex mt-4">
              <div className="big_img w-3/4 mr-2">
                <img
                  className=" rounded-2xl"
                  src="/images/HotelImage1.jpg"
                  alt=""
                />
              </div>
              <div className="w-1/4 gap-1">
                <div>
                  <img
                    className="pb-1 rounded-2xl"
                    src="/images/HotelImage2.jpg"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    className="pb-1 rounded-2xl"
                    src="/images/HotelImage3.jpg"
                    alt=""
                  />
                </div>
                <div>
                  <button>
                    <img
                      className="pb-1 rounded-2xl"
                      src="/images/HotelImage4.jpg"
                      alt=""
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="rectangle-box flex flex-wrap sm:no-wrap justify-between items-center my-3">
            <div className="buttons flex  ">
              <button className="photo flex items-center px-5 py-2 mr-2 border font-semibold border-gray-500 text-sm rounded-xl ">
                <IoCameraOutline size={20} style={{ marginRight: "5px" }} />
                Photos
              </button>
              <button className="videos flex items-center px-5 py-2 mr-2 font-semibold border border-gray-500 rounded-xl text-sm ">
                <IoPlayCircleOutline size={20} style={{ marginRight: "5px" }} />
                Videos
              </button>
            </div>

            <div className='mt-2 sm:mt-0'>
              <button className="flex items-center px-5 py-2 mr-2 font-semibold border border-gray-500 rounded-xl text-sm bg-blue-50">
                <FaStar style={{ color: "blue" }} />{" "}
                <div className="ml-1">5.0</div>{" "}
                <div className="text-gray-500 ml-1">(3+ reviews)</div>
              </button>
            </div>
          </div>

          <div className="my-6">
           
            <hr />
          </div>

          <div className="Name-Box  my-4 ">
            <div className="flex">
              <div className="text-2xl font-bold mr-3">Arbour House, London</div>
              <button className="bg-blue-600 text-white rounded-3xl px-2 flex items-center">
                <MdOutlineLocalOffer />2 offers
              </button>
            </div>
            <div className="text-sm font-normal text-gray-500">
              Sebastian St, London, EC1V 0HF, United Kingdom
            </div>
            <div className="flex items-center my-2">
              <FaMapMarkerAlt style={{ color: "blue" }} />
              2.1 mi from City Center{" "}
              <button className="text-blue-600 font-medium ml-2">
                View on map
              </button>
            </div>
          </div>

          <div className="key-points-buttons flex">
            <button className="bg-gray-200 flex items-center mr-2 gap-1 rounded px-1 ">
              <MdElectricBolt />
              Laundry Facility
            </button>
            <button className="bg-gray-200 flex items-center mr-2 gap-1 rounded px-1 ">
              {" "}
              <MdElectricBolt />
              Bike Storage
            </button>
            <button className="bg-gray-200 flex items-center mr-2 gap-1 rounded px-1 ">
              <MdElectricBolt />
              Recycling
            </button>
          </div>
          <hr className='mt-4'/>
          <button
              className="md:hidden text-blue-600 flex items-center gap-1  hover:bg-gray-200  font-medium hover:rounded-md text-sm py-2 px-4 mx-4 my-2 text-center "
              type="button"
              onClick={enquireSetup} 
            >
              Enquire Now <FaAngleRight />
            </button>
        </div>
      </div>
      <Modal
        isOpen={enquireIsOpen}
        onRequestClose={() => setEnquire(false)}
        className="custom-modal shadow-cyan-500/50"
        overlayClassName="custom-overlay"
      >
       <EnquireModal closeEnquire={closeEnquire} enquireFalse={EnquireFalse}/>
          </Modal>
          <Modal
            isOpen={thankyou}
            onRequestClose={closeThankyou}
            overlayClassName="custom-overlay"
            className="thankyou-modal-container"
          >
          <ThankyouModal message={failure ?"Form Submitted Successfully" :"Something Went wrong, Try Again"} closeThankyou={closeThankyou} failure={failure}/>
          </Modal>
    <HotelDescription/>
    </div>
  );
};

export default LeftPortion;

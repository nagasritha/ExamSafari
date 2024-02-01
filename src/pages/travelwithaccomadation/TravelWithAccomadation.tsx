import {useState} from 'react'
import { FaFireAlt } from "react-icons/fa"
import { GoVerified } from "react-icons/go";
import { RxCross2 } from "react-icons/rx";
import { BiSolidHomeSmile } from "react-icons/bi";
import { CiLocationOn,CiCamera } from "react-icons/ci";
import { BsFillLightningChargeFill } from "react-icons/bs"
import { TiTick } from "react-icons/ti";
import { IoMdStar } from "react-icons/io";
import { FaRegCirclePlay } from "react-icons/fa6";
import Modal from "react-modal";
import Layout from "@/components/layout/Layout"
import EnquireForm from "../../components/EnquireForm"
import './index.css'

Modal.setAppElement('#root');

function TravelWithAccomadation() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [enquireIsOpen, setEnquire] = useState(false);
  const [thankyou,setThankyou] = useState(false);

  const EnquireFalse=()=>{
    setEnquire(false);
    setThankyou(true);
  }

  return (
    <Layout>
      <div style={{paddingTop:'10vh'}} className='accomadation-container'>
  
        <div>
        <div className='accomadation-card mb-10'>
        <div className="Picture-box">
          <div className="flex mt-4 items-center">
            <div className="big_img w-3/4 mr-2">
              <img src='https://res.cloudinary.com/dkredoejm/image/upload/v1705821960/bed_zzry0x.png' width='100%' className='rounded-2xl'/>
            </div>
            <div className="w-1/4 gap-1">
       
                <img src='https://res.cloudinary.com/dkredoejm/image/upload/v1705839124/bed-5_sdwvta.png' className='pb-2 lg:pb-4 rounded-xl'/>
           
                <img src='https://res.cloudinary.com/dkredoejm/image/upload/v1705839124/bed-5_sdwvta.png' className='pb-2 lg:pb-4 rounded-xl'/>
           
                <img src='https://res.cloudinary.com/dkredoejm/image/upload/v1705839124/bed-5_sdwvta.png' className='pb-2 lg:pb-4 rounded-xl'/>

            </div>
          </div>
         </div> 
          <div className='flex flex-wrap md:flex-nowrap justify-between'>
            <div className='feature-buttons mb-5 mt-3'>
            <button className='flex items-center my-3 text-sm md:text-xl feauture-button photo md:p-3'><CiCamera className='mr-2' />Photos</button>
            <button className='flex items-center my-3 text-sm md:text-xl feauture-button photo md:p-3'><FaRegCirclePlay className='mr-2'/>Videos</button>
            </div>
            
            <div>
            <button className='flex items-center my-3 text-xl feauture-button ratings p-3'><IoMdStar size='25px' color="#47c97b"/><b>5.0</b>(300+ reviews)</button>
            </div>
          </div>
          <hr/>
          <h1 className='font-semibold text-xl md:text-3xl mt-10'>Bull Inn Court, London</h1>
          <p className='text-xl'>Bull Inn Ct, London, United Kingdom</p>
          <p className='flex items-center my-3 text-xl'><CiLocationOn className='mr-2' size='30px' color='red'/>location</p>
          <div className='feature-buttons mb-5'>
            <p className='feauture-button flex items-center'><BsFillLightningChargeFill className='mr-2' color='red'/>Verified Property</p>
            <p className='feauture-button flex items-center'><BsFillLightningChargeFill className='mr-2' color='red'/>Free services</p>
            <p className='feauture-button flex items-center'><BsFillLightningChargeFill className='mr-2' color='red'/>Free services</p>
          </div>
          <hr className='lg:none'/> 
          <button className='samples font-semibold sm-enquire-button p-3 rounded mb-3' style={{color:'red'}} onClick={()=>setEnquire(true)}>Enquire Now &gt;</button>
        </div>
        <div className='mt-10 mb-10 accomadation-card'>
        <h1 className='text-3xl mb-5 font-semibold'>Description</h1>
        <p className='text-sm md:text-xl mb-16'>Make yourself at home at Bull Inn Court, the luxurious student accommodation in London, United Kingdom. It offers a two-bedroom luxury apartment,  in an amazing Covent Garden location, with several amenities. There are many famous universities which are close by like The London Film School, only 7 minutes away on foot. Similarly, the London School of Economics and Science, King’s College London (Strand Campus) is also 8 minutes away. </p>
        <hr/>
        <button className='text-xl mt-5 mb-3 font-semibold' style={{color:'red'}} onClick={() => setModalIsOpen(true)}>View More &gt;</button>
        <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        className="custom-modal custom-modal-padding"
        overlayClassName="custom-overlay"
      >
       <div className='flex justify-between items-center -mt-5 -ml-5 rounded-t p-3' style={{backgroundColor:"rgb(248, 61, 92)"}}>
       <h1 className='text-xl md:text-3xl font-semibold'>Description</h1>
        <RxCross2 className='text-xl md:text-3xl' onClick={()=>setModalIsOpen(false)}/>
       </div>
        <hr/>
        <div className='model-overflow'>
        
        <h1 className='text-3xl my-5 font-semibold'>About</h1>
        <p className='text-xl mb-16'>Make yourself at home at Bull Inn Court, the luxurious student accommodation in London, 
        United Kingdom. It offers a two-bedroom luxury apartment,  in an amazing Covent Garden location, with several amenities. 
        There are many famous universities which are close by like The London Film School, only 7 minutes away on foot. Similarly,
         the London School of Economics and Science, King’s College London (Strand Campus) is also 8 minutes away. </p>
        <h1 className='text-3xl my-5 font-semibold'>Feautures</h1>
        <p className='text-xl mb-16'>This apartment offers comfortable beds and has two bathrooms with walk-in showers, a bathtub, an open kitchen, 
        a spacious living area, and access through private elevators. With two tables, five seats, a stand-alone light, and a couch bed, 
        this room is ideal for lounging while still being large and accommodating enough to host friends and family visitations. 
        There is also a smart TV, high-speed internet, and several laptop study places.
         with a fully equipped kitchen and housekeeping service once a week, which makes your stay easy and hassle-free. All bills are included in the rent.</p>
        <h1 className='text-3xl my-5 font-semibold'>Location and What's Hot?</h1>
        <p className='text-xl mb-16'>Blue Inn Court is located in one of the most desirable locations in London, the famous Covent Garden, 
        which is regarded worldwide as an unrivalled shopping destination and recreational hub, besides hosting the most fascinating and inventive 
        restaurants, and renowned cultural organizations in London. Tucked away in lush vegetation, with its charming cobblestone lanes and huge  Piazza,
        the apartment is in a traditional English residential neighbourhood. The Royal Opera and the National Gallery, in the neighbourhood, ought to 
        incentive your house-hunting. Besides, it is close to several Universities and colleges accessible through trains and buses that ply in high frequency throughout the area.</p>
        <div className='text-center lg:text-right'>
        <button className='feauture-button enquire mb-3' onClick={() => setModalIsOpen(false)}>Close Modal</button>
        </div>
      
        </div>
      </Modal>

        </div>
        </div>
        <div className='accomadation-sub-conatainer2 accomadation-card'>
          <h4 className='text-xl mb-5 font-semibold'>Starting from £2975/week</h4>
          <hr className='line-break'/>
          <div className='feature-buttons'>
            <p className='feauture-button flex items-center'><GoVerified className='mr-2' color='red'/>Verified Property</p>
            <p className='feauture-button flex items-center'><BiSolidHomeSmile className='mr-2' color='red'/>Free services</p>
          </div> 
          <p className='text-xl mb-10 flex items-start mt-6'><span><FaFireAlt className='mr-3' color='red'/></span>64 students viewed this property in last 24 hours</p>
          <div className='ml-3'>
          <button className='accomadation-container2-button view font-semibold'>View Rooms</button>
          <button className='accomadation-container2-button enquire font-semibold' onClick={()=>setEnquire(true)}>Enquire Now &gt;</button>
          <Modal
        isOpen={enquireIsOpen}
        onRequestClose={() => setEnquire(false)}
        className="custom-modal"
        overlayClassName="custom-overlay"
      >
       <div className='flex justify-between items-center text-white -mt-5 rounded-t p-3' style={{backgroundColor:"#00c0df"}}>
       <h1 className='text-xl md:text-3xl font-semibold'>Enquire</h1>
        <RxCross2 className='text-xl md:text-3xl' onClick={()=>setEnquire(false)}/>
       </div>
        <hr/>
        <div className='Enqire-popup model-overflow'>
        <div className="lg:w-1/2 size-full enquire-section-form order-2 lg:order-1">
        <EnquireForm enquire={EnquireFalse} />
        </div>
        <div className='lg:w-1/2 lg:ml-1 p-3 lg:p-5 text-white size-full order-1 lg:order-2 welcome-enquire'>
          <h1 className='my-5 font-semibold animated-text'>Welcome to Examsafari</h1>
          <p className='text-box'>|</p>
          <p className='text-xl my-8 para1'>Embark on a worry-free exam. Journey with ExamSafari! Offering buget-friendly transport, accommodation, and exclusive
                                            Travel+accommodation packages for students across cities. </p>
          <p className='text-xl mb-8 para2'>Prioritizing safety, especially for female aspirents, our services guarantee a secure and comfortable experience. Trust ExamSafari to make your exam travels stress-free and affordable.</p>
            </div>
        </div>
        <div className='text-center lg:text-right'>
          <hr/>
        <button className='feauture-button close mb-3' onClick={() => setEnquire(false)}>Close Modal</button>
        </div>
      </Modal>
      <Modal
        isOpen={thankyou}
        onRequestClose={() => setThankyou(false)}
        className="thankyou-popup custom-modal-padding"
        overlayClassName="custom-overlay"
      >
       <RxCross2 className='ml-auto mb-auto text-3xl mr-3' onClick={()=>setThankyou(false)}/>
       <h1 className='tick'><TiTick color="white"/></h1>
       <p className='pt-3 text-2xl'><b>Your form submitted successfuly!</b></p>
       <h3 className="thanks-text">Thanks for visiting</h3>
       <h1 className='text-examSafari'><img
                      width="150px"
                      src={"/images/logo.png"}
                      alt="Your Company"
                    /></h1>
      </Modal>
       
          </div>
          </div>
    
      </div>  
    </Layout>
  
  )
}

export default TravelWithAccomadation
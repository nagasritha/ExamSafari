import {useState} from 'react'
import { FaFireAlt } from "react-icons/fa"
import { GoVerified } from "react-icons/go";
import { RxCross2 } from "react-icons/rx";
import { BiSolidHomeSmile } from "react-icons/bi";
import { CiLocationOn,CiCamera } from "react-icons/ci";
import { BsFillLightningChargeFill } from "react-icons/bs"
import { IoMdStar } from "react-icons/io";
import { FaRegCirclePlay } from "react-icons/fa6";
import Modal from "react-modal";
import Layout from "@/components/layout/Layout"
import Navbar from "@/components/navbar/Navbar"
import './index.css'
function Accomadation() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <Layout>
      <div style={{paddingTop:'10vh'}} className='accomadation-container'>
  
        <div>
        <div className='accomadation-card mb-10'>
          <div className='flex justify-evenly'>
            <div>
              <img src='https://res.cloudinary.com/dkredoejm/image/upload/v1705821960/bed_zzry0x.png' width='100%' className='accomadation-wallpaper'/>
            </div>
            <div className='flex-none flex-wrap'>
              <img src='https://res.cloudinary.com/dkredoejm/image/upload/v1705839124/bed-5_sdwvta.png' className='pic'/>
              <img src='https://res.cloudinary.com/dkredoejm/image/upload/v1705839124/bed-5_sdwvta.png' className='pic'/>
              <img src='https://res.cloudinary.com/dkredoejm/image/upload/v1705839124/bed-5_sdwvta.png' className='pic'/>
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
        </div>
        <div className='mt-10 mb-10 accomadation-card'>
        <h1 className='text-3xl mb-5 font-semibold'>Description</h1>
        <p className='text-sm md:text-xl mb-16'>Make yourself at home at Bull Inn Court, the luxurious student accommodation in London, United Kingdom. It offers a two-bedroom luxury apartment,  in an amazing Covent Garden location, with several amenities. There are many famous universities which are close by like The London Film School, only 7 minutes away on foot. Similarly, the London School of Economics and Science, King’s College London (Strand Campus) is also 8 minutes away. </p>
        <hr/>
        <button className='text-xl mt-5 mb-3 font-semibold' style={{color:'red'}} onClick={() => setModalIsOpen(true)}>View More &gt;</button>
        <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        className="custom-modal"
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
          <button className='accomadation-container2-button enquire font-semibold'>Enquire Now &gt;</button>
       
          </div>
          </div>
    
      </div>  
    </Layout>
  
  )
}

export default Accomadation
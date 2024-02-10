import React from "react"
import {RxCross2} from 'react-icons/rx'
import './index.css'

interface DescriptionModalProps{
    closeModal: ()=>void
}

const DescriptionModal:React.FC<DescriptionModalProps> = ({closeModal})=>{
return <div>
    <div className='flex justify-between items-center -mt-5 -ml-5 rounded-t p-3' style={{backgroundColor:"#00c0df"}}>
       <h1 className='text-xl md:text-3xl font-semibold text-white'>Description</h1>
        <RxCross2 className='text-xl md:text-3xl text-white' onClick={closeModal}/>
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
        <button className='feauture-button close mb-3' onClick={closeModal}>Close Modal</button>
        </div>
      
        </div>
</div>
}

export default DescriptionModal
import React from 'react'
import {RxCross2} from 'react-icons/rx'
import EnquireForm from '../EnquireForm'
import './index.css'

interface EnquireModalProps{
    closeEnquire: ()=>void,
    enquireFalse: (value:boolean)=>void
}

const EnquireModal:React.FC<EnquireModalProps>=({closeEnquire,enquireFalse})=>{
    
    return <div className='rounded-t-xl'>
      
        <div className='flex justify-between items-center text-white -mt-5 rounded-t-xl p-3' style={{backgroundColor:"#0c356a"}}>
       <h1 className='text-xl md:text-3xl font-semibold'>Enquire</h1>
        <RxCross2 className='text-xl md:text-3xl' onClick={closeEnquire}/>
       </div>
        <hr/>
        <div className='Enqire-popup model-overflow flex'>
    
        <div className="md:w-1/2 size-full enquire-section-form order-2 lg:order-1">
        
        <EnquireForm enquire={enquireFalse} />
        </div>
        <div className='hidden md:flex w-1/2'>
          <img src='https://res.cloudinary.com/dkredoejm/image/upload/v1708855379/form_submission_r3crii.png' className='w-full h-full'/>
        </div>
          
        </div>
        <div className='text-center lg:text-right relative z-20 rounded-b-xl' style={{backgroundColor:'#0c356a', marginBottom:'-33px', marginRight:'-1px'}}>
          <hr/>
          <button className='feauture-button close mb-3 rounded' onClick={closeEnquire}>Close Modal</button>
        </div>
        </div>
}

export default EnquireModal
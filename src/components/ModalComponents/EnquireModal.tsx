import React from 'react'
import {RxCross2} from 'react-icons/rx'
import EnquireForm from '../EnquireForm'
import './index.css'

interface EnquireModalProps{
    closeEnquire: ()=>void,
    enquireFalse: ()=>void
}

const EnquireModal:React.FC<EnquireModalProps>=({closeEnquire,enquireFalse})=>{
    
    return <div>
        <div className='flex justify-between items-center text-white -mt-5 rounded-t p-3' style={{backgroundColor:"#00c0df"}}>
       <h1 className='text-xl md:text-3xl font-semibold'>Enquire</h1>
        <RxCross2 className='text-xl md:text-3xl' onClick={closeEnquire}/>
       </div>
        <hr/>
        <div className='Enqire-popup model-overflow'>
        <div className="lg:w-1/2 size-full enquire-section-form order-2 lg:order-1">
        <EnquireForm enquire={enquireFalse} />
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
        <button className='feauture-button close mb-3' onClick={closeEnquire}>Close Modal</button>
        </div>
        </div>
}

export default EnquireModal
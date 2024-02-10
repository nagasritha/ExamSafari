import React from 'react'
import { RxCross2 } from 'react-icons/rx'
import {TiTick} from 'react-icons/ti'
import './index.css'

interface ThankyouModalProps{
   closeThankyou: ()=>void
}

const ThankyouModal:React.FC<ThankyouModalProps>=({closeThankyou})=>{
    return <div className="thankyou-popup custom-modal-padding">
         <RxCross2 className='ml-auto mb-auto text-3xl mr-3' onClick={closeThankyou}/>
       <h1 className='tick'><TiTick color="white"/></h1>
       <p className='pt-3 text-2xl'><b>Your form submitted successfuly!</b></p>
       <h3 className="thanks-text">Thanks for visiting</h3>
       <h1 className='text-examSafari'><img
                      width="150px"
                      src={"/images/logo.png"}
                      alt="Your Company"
                    /></h1>
    </div>
}

export default ThankyouModal
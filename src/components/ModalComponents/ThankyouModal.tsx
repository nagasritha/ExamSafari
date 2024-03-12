import React from 'react'
import './index.css'

interface ThankyouModalProps{
  failure:boolean,
  closeThankyou: ()=>void,
  message :string
 
}

const ThankyouModal:React.FC<ThankyouModalProps>=({closeThankyou,failure,message})=>{
  console.log(failure)
  console.log("thank you page");
    return <div className="thankyou-popup custom-modal-padding">
      <div className='mt-20'>
        <div className='flex justify-center items-center'>
        {failure? <img src="https://res.cloudinary.com/dkredoejm/image/upload/v1708696518/sorry-removebg-preview_kbgrnm.png" className='w-2/5 sm:w-1/3'/>:<img src='https://res.cloudinary.com/dkredoejm/image/upload/v1708694310/done-removebg-preview_pfy4jl.png' width='50%'/>}
        </div>
       
      <p className='pt-3 text-2xl text-black'>{failure ? <b>Sorry!</b>:<b>Hurrey!</b>}</p>
       <h3 className="pt-3 text-2xl text-black">{message}</h3>
        <button onClick={closeThankyou} className='bg-green-600 mt-10 relative py-2 px-8 text-black text-base font-bold nded-full overflow-hidden rounded-full transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-blue-500 before:to-blue-300 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-full hover:before:left-0'>Ok</button>
      </div>
    </div>
}

export default ThankyouModal
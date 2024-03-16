import React from 'react'
import {RxCross2} from 'react-icons/rx'
import './index.css'

interface FormResultProps{
    closeModal : ()=>void,
    message : String
}

const FormResult : React.FC<FormResultProps> = ({message,closeModal})=>{
    return <div className='loader-card card-animations bg-lime-500 text-white w-1/2'>
    <div className='flex justify-between text-right'>
    <p>{message}</p>
    <button onClick={closeModal} className='ml-auto hover:bg-gray-300 hover:p-1 rounded-full'>
      <RxCross2 />
    </button>
</div>
      
 </div>
}

export default FormResult
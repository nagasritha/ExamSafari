import React from 'react'
import { FaChevronCircleRight } from 'react-icons/fa';

interface NewCardProps{
    history :{
    name: string;
    whatsappNumber: string;
    city: string;
    address: string;
    busStop: string;
    exam: string;
    examCity: string;
    examCenter: string;
    examDate: string;
    admitCard: string;
    serviceType: string;
    requestStatus: string;
    }
}
const NewCard:React.FC<NewCardProps> = ({history}) => { 
    const { name, whatsappNumber, city, address, busStop, exam, examCity, examCenter, examDate, admitCard, serviceType, requestStatus } = history

    return <div className='m-3 rounded md:w-2/3 shadow-lg'>
        <div className='bg-emerald-300 md:flex md:justify-around md:items-center p-3 rounded-t-xl pb-10'>
            <div className='text-center'>
                <img src="https://res.cloudinary.com/dkredoejm/image/upload/v1710229823/enquire-removebg-preview_rgwbjs.png"/>
                <h1 className='text-xl font-bold'>{name}</h1>
                <h1 className='text-cyan-900 font-bold'>{whatsappNumber}</h1>
            </div>
            <div className='mt-7 flex flex-col gap-4'>
               <div className='flex gap-3 items-start'>
               <div className="h-8 w-8 rounded bg-gradient-to-r from-sky-500 to-indigo-500"></div>
                <div className='text-left'><p><b>Address</b></p>
                <p>{address}</p></div>
               </div>
               <div className='flex gap-3 items-start'>
               <div className="h-8 w-8 rounded bg-gradient-to-r from-sky-500 to-indigo-500"></div>
                <div className='text-left'><p><b>Nearby Bus stop</b></p>
                <p>{busStop}</p></div>
               </div>
               <div className='flex gap-3 items-start'>
               <div className="h-8 w-8 rounded bg-gradient-to-r from-sky-500 to-indigo-500"></div>
                <div className='text-left'><p><b>City</b></p>
                <p>{city}</p></div>
               </div>
            </div>
        </div>
        <div className='relative text-center'>
        <h1 className='absolute inset-x-0 top-0 z-50 bg-blue-700 rounded-xl h-10 flex items-center justify-center font-bold w-2/3 mx-auto -mt-5 text-white'>Exam Details</h1>
        </div>
        <div className='bg-cyan-400 p-3 rounded-b-xl pb-10 pt-10'>
           <div className='md:flex md:justify-around md:items-center'>
           <div className='flex flex-col gap-5'>
               <div className='flex gap-3 items-start'>
               <div className="h-8 w-8 rounded bg-gradient-to-r from-sky-500 to-indigo-500"></div>
                <div className='text-left'><p><b>Exam</b></p>
                <p>{exam}</p></div>
               </div>
               <div className='flex gap-3 items-start'>
               <div className="h-8 w-8 rounded bg-gradient-to-r from-sky-500 to-indigo-500 "></div>
                <div className='text-left'><p><b>Exam Date</b></p>
                <p>{examDate}</p></div>
               </div>
            </div>
           
            <div className='flex flex-col gap-5'>
              
               <div className='flex gap-3 items-start'>
               <div className="h-8 w-8 rounded bg-gradient-to-r from-sky-500 to-indigo-500"></div>
                <div className='text-left'><p><b>Exam City</b></p>
                <p>{examCity}</p></div>
               </div>
               <div className='flex gap-3 items-startr'>
               <div className="h-8 w-8 rounded bg-gradient-to-r from-sky-500 to-indigo-500"></div>
                <div className='text-left'><p><b>Exam Center</b></p>
                <p>{examCenter}</p></div>
               </div>
            </div>
           </div>
            <div className='bg-blue-700/70 rounded-lg text-white text-center p-4 sm:mx-5 mt-8'>
                <a href={admitCard} className='flex justify-between items-center'>
                    <h1 className='font-bold'>Admit Card</h1>
                    <FaChevronCircleRight />
                </a>
            </div>
            <div className='bg-blue-700/70 rounded-lg text-white text-center p-4 sm:mx-5 md:flex md:justify-between items-center my-2 font-bold'>
                <h1>Service</h1>
                <h1>{serviceType}</h1>
            </div>
            <div className='text-center sm:text-right'>
                <button className={`rounded-lg px-6 py-2 text-white font-bold ${requestStatus === 'Pending' ? 'bg-yellow-500' : requestStatus === 'Approved' ? 'bg-green-500' : requestStatus === 'Rejected' ? 'bg-red-500' : ''}`}>
                    {requestStatus}
                </button>
            </div>
        </div>
    </div>
}

export default NewCard
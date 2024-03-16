import React from 'react'
import { FaChevronCircleRight } from 'react-icons/fa';
interface CardProps{
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
const Card:React.FC<CardProps> = ({history}) => {
    const { name, whatsappNumber, city, address, busStop, exam, examCity, examCenter, examDate, admitCard, serviceType, requestStatus } = history
    return (
        <div className='p-5 bg-white rounded-lg shadow-lg'>
            <div className="text-center text-2xl font-bold mb-6">
                Your Enquiry
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                    <div className='mb-5'>
                        <p className='font-bold'>Name:</p>
                        <p>{name}</p>
                    </div>
                    <div className='mb-5'>
                        <p className='font-bold'>Number:</p>
                        <p>{whatsappNumber}</p>
                    </div>
                    <div className='mb-5'>
                        <p className='font-bold'>City:</p>
                        <p>{city}</p>
                    </div>
                    <div className='mb-5'>
                        <p className='font-bold'>Address:</p>
                        <p>{address}</p>
                    </div>
                    <div className='mb-5'>
                        <p className='font-bold'>Nearby Bus Stop:</p>
                        <p>{busStop}</p>
                    </div>
                </div>
                <div>
                    <div className='mb-5'>
                        <p className='font-bold'>Exam:</p>
                        <p>{exam}</p>
                    </div>
                    <div className='mb-5'>
                        <p className='font-bold'>Exam City:</p>
                        <p>{examCity}</p>
                    </div>
                    <div className='mb-5'>
                        <p className='font-bold'>Exam Center:</p>
                        <p>{examCenter}</p>
                    </div>
                    <div className='mb-5'>
                        <p className='font-bold'>Exam Date:</p>
                        <p>{examDate}</p>
                    </div>
                </div>
            </div>
            <div className='bg-yellow-500 rounded-lg text-white text-center p-4 mb-4'>
                <a href={admitCard} className='flex justify-between items-center'>
                    <h1 className='font-bold'>Admit Card</h1>
                    <FaChevronCircleRight />
                </a>
            </div>
            <div className='bg-orange-500 rounded-lg text-white text-center p-4 mb-4'>
                <h1 className='font-bold'>Service</h1>
                <h1>{serviceType}</h1>
            </div>
            <div className='text-right'>
                <button className={`rounded-lg px-6 py-2 text-white font-bold ${requestStatus === 'Pending' ? 'bg-yellow-500' : requestStatus === 'Approved' ? 'bg-green-500' : requestStatus === 'Rejected' ? 'bg-red-500' : ''}`}>
                    {requestStatus}
                </button>
            </div>
        </div>
    );
};

export default Card;

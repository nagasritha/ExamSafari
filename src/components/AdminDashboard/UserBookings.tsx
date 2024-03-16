import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import Loading from '../Loading/loading';
import {Link} from 'react-router-dom';
import Modal from "react-modal";
import FormModal from '../ModalComponents/FormModal';
import FormResult from '../ModalComponents/StatusFormResult';
import Empty from '../Empty';
import Failure from '../Failure';

const UserBookings: React.FC = () => {
    const data= {
        initial :'INITIAL',
        loading : 'LOADER',
        success : 'SUCCESS',
        failure : 'FAILURE',
        empty : 'EMPTY',
    }
    const [state,setState] = useState<string>(data.initial);
    const [history, setHistory] = useState([]);
    const [id , setId] = useState<string>('');
    const [FormIsOpen,setForm] = useState<boolean>(false);
    const [message,setMessage] = useState<String>('')
    const [result,setResult] =useState<boolean>(false);

    useEffect(() => {
        getData();
    }, []);
     
    const updateMessage = (msg :string)=>{
        setMessage(msg);
        setResult(true);
        setForm(false);
    }

     const modal = ()=>{
        return  <>   
            <Modal
            isOpen={FormIsOpen}
            onRequestClose={() => setForm(false)}
            className="loader-container"
            overlayClassName="custom-overlay"
        >
        <FormModal closeModal={()=>setForm(false)} setMessage={updateMessage} id={id}/>
            </Modal>
            <Modal isOpen={result}
            onRequestClose={() => setResult(false)}
            className="loader-container"
            overlayClassName="custom-overlay">
                <FormResult closeModal={()=>setResult(false)} message={message}/>
            </Modal>
           </>
     }

    const getData = async () => {
        const token = Cookies.get("jwt_token");
        console.log("called");
        setState(data.loading);
        try {
            const response = await fetch('https://example-na5m.onrender.com/api/booking-history', {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${token}`, // Add the authorization header
                }
            });
            if (response.ok) {
                const jsonData = await response.json();
                console.log(jsonData);
                setHistory(jsonData.Enquire);
                if(jsonData.Enquire.length === 0){
                    setState(data.empty);
                }else{
                    setState(data.success);
                }
            }else{
                setState(data.failure);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
            setState(data.failure);
        }
    };

    const block=()=>{
        switch (state){
            case data.loading:
                return <Loading/>
            case data.success:
                return table()
            case data.failure:
                return <Failure/>
                case data.empty:
                    return <Empty/>
            default :
            return null;        
        }
    }
    
    const callModal = (id:string)=>{
        setId(id);
        setForm(true);
    }

    const table = ()=>{
        return <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            service
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Status
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Details
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {history.map((item, index) => {
                        const {_id,name,serviceType,requestStatus}=item
                        return <tr key={_id} className={`${index % 2 === 0 ? 'even:bg-gray-50 even:dark:bg-gray-800' : 'odd:bg-white odd:dark:bg-gray-900'} border-b dark:border-gray-700`}>
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white text-lg">
                                {name}
                            </th>
                            <td className="px-6 py-4">
                                {serviceType}
                            </td>
                            <td className="px-6 py-4">
                                <button className='bg-sky-400 rounded p-2 text-white' onClick={()=>callModal(_id)}>{requestStatus}</button>
                            </td>
                            <td className="px-6 py-4">
                                <Link to={`/admin/${_id}`} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">View &gt;</Link>
                            </td>
                        </tr>
    })}
                </tbody>
            </table>
        </div>
    }
    return (
        <div className='p-5 bg-white'>
            {block()}
            {modal()}
        </div>
    );
};

export default UserBookings;

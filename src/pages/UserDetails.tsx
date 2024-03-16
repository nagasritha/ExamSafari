import React , {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import Loading from '@/components/Loading/loading';
import Cookies from 'js-cookie'
import NewCard from '@/components/proflie/NewCard';
import Failure from '@/components/Failure';

const UserDetails:React.FC = ()=>{ 
    const [history, setHistory] = useState({
        name: '',
        whatsappNumber: '',
        city: '',
        address: '',
        busStop: '',
        exam: '',
        examCity: '',
        examCenter: '',
        examDate: '',
        admitCard: '',
        serviceType: '',
        requestStatus: ''
      });
      const data = {
        loading : "LOADING",
        success : "SUCCESS",
        failure : "FAILURE",
     }
      const [state,setState] = useState<string>(data.loading);

 const {id} = useParams();
 console.log(id); 

 useEffect(()=>{getData()},[])

 const getData = async () => {
    const token = Cookies.get("jwt_token");
    console.log("called");
    setState(data.loading);
    try {
        const response = await fetch(`https://example-na5m.onrender.com/api/user-history/${id}`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${token}`, // Add the authorization header
            }
        });
        if (response.ok) {
            const jsonData = await response.json();
            console.log(jsonData);
            setHistory(jsonData.Enquire);
            setState(data.success);
        }else{
            setState(data.failure);
        }
    } catch (error) {
        console.error('Error fetching data:', error);
        setState(data.failure);
    } finally {
        setLoader(false);
    }
};

const block=()=>{
    switch (state){
        case data.loading:
            return <Loading/>
        case data.success:
            return <div className='flex flex-col justify-center items-center bg-gray-100'><NewCard history={history}/></div>
        case data.failure:
            return <Failure/>
        default :
        return null;        
    }
}

 return <>
 {block()}</>
}
export default UserDetails
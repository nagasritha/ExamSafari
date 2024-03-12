import React , {useState} from 'react'
import Loading from '../Loading/loading';
import Cookies from 'js-cookie';

interface FormModalProps{
    closeModal : ()=>void,
    id:string
}

const FormModal:React.FC<FormModalProps> = ({closeModal,id})=>{
    console.log(id);
    const url=`https://example-na5m.onrender.com/api/submit-enquire/${id}`;
    console.log(url)
    const [loader,setLoader] = useState<boolean>(false);
    const [formData,setFormData]=useState<{
    requestStatus:string;
    message:string
   }>({
    requestStatus : '',
    message : ''
   })
   const [errors,setError]=useState({
    requestStatus : false,
    message :false
   });
   

   const fieldChange =(e:React.ChangeEvent<HTMLSelectElement | HTMLTextAreaElement>)=>{
    const {name,value}=e.target;
    
    setFormData(prevState=>({...prevState,[name]:value}));
    setError(prevErrors => ({
        ...prevErrors,
        [name]: value === '' ? true : false,
      }));
   }

   const handleSubmit = async (e: React.FormEvent<HTMLElement>)=>{
     e.preventDefault();
     setLoader(true);
     const token = Cookies.get("jwt_token");
     const data = {
        "requestStatus": formData.requestStatus
    }
     const options = {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${token}`, // Add the authorization header
        },
        body: JSON.stringify(data),
      };
      
      const response = await fetch(`https://example-na5m.onrender.com/api/submit-enquire/${id}`, options);
    setLoader(false);
    const jsonResponse = await response.json();
    console.log(jsonResponse);
    console.log(response);
    }
    const {message}=formData;

    return (
    <div>
    {loader && <Loading/>}
    <form onSubmit={handleSubmit}>
           <div className="form-group">
          <label htmlFor="requestStatus" className='font-bold'>Approval *</label>
          <select
            id="requestStatus"
            className='p-2'
            name="requestStatus"
            onChange={fieldChange}
            required
          >
            <option value="">Select an exam</option>
            <option value="Approved">Approve</option>
            <option value="Rejected">Reject</option>
            <option value="Pending">Pending</option>
          </select>
          {errors.requestStatus && <p className="text-red-500">Please select Status</p>}
      </div>
      <div className="form-group">
          <label htmlFor="message" className='font-bold'>Current Address *</label>
          <textarea
            id="message"
            name="message"
            value={message}
            onChange={fieldChange}
            placeholder="Give your Comment"
            required
          ></textarea>
          {errors.message && <p className="text-red-500">message required</p>}
        </div>
        <button type="submit">Submit</button>
    </form>
    <button onClick={closeModal}>Ok</button>
    </div>)
}

export default FormModal
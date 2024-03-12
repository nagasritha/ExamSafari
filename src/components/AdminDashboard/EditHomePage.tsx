import React,{useState,useEffect} from 'react'
import Loading from '../Loading/loading'
import Cookies from 'js-cookie'
import Modal from "react-modal";
import ThankyouModal from '../ModalComponents/ThankyouModal'
import './index.css'

const EditHomePage:React.FC = () => {
  
  useEffect(()=>{
  getData();
  },[]);

    const token= Cookies.get('jwt_token');
    const [loader,setLoader]=useState<boolean>(false);
    const [thankyou,setThankYou]=useState<boolean>(false);
    const [failure,setFailure] = useState<boolean>(false);
    const [message,setMessage] =useState<string>('');

    const [formData, setFormData] = useState<{
      backgroundText: string;
      serviceHeading: string;
      serviceDescription: string;
      examHeading: string;
      examDescription: string;
      acoFeautureHeading : string;
      acoFeautureDescription : string;
      travelFeautureHeading : string;
      travelFeautureDescription: string;
      faqHeading : string;
      faqDescription : string;
      bannerUrl :File | null;
      backgroundUrlLg : File | null;
      backgroundUrlSm: File | null; // Explicitly specify admitCard can be null or File
    }>({
        backgroundText: '',
        serviceHeading: '',
        serviceDescription: '',
        examHeading: '',
        examDescription: '',
        acoFeautureHeading : '',
        acoFeautureDescription : '',
        travelFeautureHeading : '',
        travelFeautureDescription: '',
        faqHeading : '',
        faqDescription : '',
        bannerUrl : null,
        backgroundUrlLg :  null,
        backgroundUrlSm: null
    });

   const getData=async ()=>{
      setLoader(true)
      const response = await fetch('https://example-na5m.onrender.com/home/home', {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`, // Add the authorization header
        }
      });
      setLoader(false);
      if(response.ok){
        const jsonData=await response.json()
        const details=jsonData.homeData;
        setFormData({
          backgroundText: details.backgroundText,
          serviceHeading: details.serviceHeading,
          serviceDescription: details.serviceDescription,
          examHeading: details.examHeading,
          examDescription: details.examDescription,
          acoFeautureHeading: details.acoFeautureHeading,
          acoFeautureDescription: details.acoFeautureDescription,
          travelFeautureHeading: details.travelFeautureHeading,
          travelFeautureDescription: details.travelFeautureDescription,
          faqHeading: details.faqHeading,
          faqDescription: details.faqDescription,
          bannerUrl: null, // Assuming formData is your existing state object
  backgroundUrlLg: null,
  backgroundUrlSm: null
        });
      }
    }
  
    const [errors, setErrors] = useState({
        backgroundText: false,
        serviceHeading: false,
        serviceDescription: false,
        examHeading: false,
        examDescription: false,
        acoFeautureHeading : false,
        acoFeautureDescription : false,
        travelFeautureHeading : false,
        travelFeautureDescription: false,
        faqHeading : false,
        faqDescription : false,
        bannerUrl : false,
        backgroundUrlLg :  false,
        backgroundUrlSm: false
    });
  
    const [deactivate, setActivate] = useState(false);

    const areAllPropertiesFilled = () => {

      const {backgroundUrlSm,backgroundUrlLg,backgroundText,serviceHeading,serviceDescription,examHeading,examDescription,acoFeautureHeading,acoFeautureDescription,travelFeautureHeading,travelFeautureDescription,bannerUrl,faqHeading,faqDescription}=formData
      console.log(backgroundText!=="" && backgroundUrlLg !== null && backgroundUrlSm!== null && serviceHeading!=="" && serviceDescription!=="" && examHeading!=="" && examDescription!=='' && acoFeautureHeading !== '' && acoFeautureDescription!=='' && 
      bannerUrl!==null && travelFeautureDescription!=='' && travelFeautureHeading !== '' && faqHeading!== '' && faqDescription!=='');
      if(backgroundText!=="" && backgroundUrlLg !== null && backgroundUrlSm!== null && serviceHeading!=="" && serviceDescription!=="" && examHeading!=="" && examDescription!=='' && acoFeautureHeading !== '' && acoFeautureDescription!=='' && 
        bannerUrl!==null && travelFeautureDescription!=='' && travelFeautureHeading !=="" && faqHeading!== '' && faqDescription!==''){
        setActivate(true);
      }else{
        setActivate(false);
      }
    };
  
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setFormData(prevState => ({
        ...prevState,
        [name]: value,
      }));
      setErrors(prevErrors => ({
        ...prevErrors,
        [name]: value === '' ? true : false,
      }));
      areAllPropertiesFilled()
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setLoader(true);
      try {
        const { backgroundUrlSm,backgroundUrlLg,backgroundText,serviceHeading,serviceDescription,examHeading,examDescription,acoFeautureHeading,acoFeautureDescription,travelFeautureHeading,travelFeautureDescription,bannerUrl,faqHeading,faqDescription } = formData;
        const formFields = {
        backgroundText,serviceHeading,serviceDescription,examHeading,examDescription,acoFeautureHeading,acoFeautureDescription,travelFeautureHeading,travelFeautureDescription,faqHeading,faqDescription
        };
  
        const formDataToSend = new FormData();
        if (backgroundUrlSm) {
            formDataToSend.append('backgroundUrlSm', backgroundUrlSm);
          }
          if (backgroundUrlLg) {
            formDataToSend.append('backgroundUrlLg', backgroundUrlLg);
          }
          if (bannerUrl) {
            formDataToSend.append('bannerUrl', bannerUrl);
          }
   
  
        // Append other form fields as well
        Object.entries(formFields).forEach(([key, value]) => {
          formDataToSend.append(key, value);
        });
        const options = {
          method: 'PUT',
          headers: {
            Authorization: `Bearer ${token}`, // Add the authorization header
          },
          body: formDataToSend,
        };
  
        const response = await fetch('https://example-na5m.onrender.com/home/home', options);
        
        console.log(response.ok)
        setLoader(false);
        setThankYou(true);
        if (response.ok) {
          const data = await response.json();
          setFailure(false);
          console.log(data);
          getData();setMessage(data.message);
        } else {
          setFailure(true);
          const errorData = await response.json();
          console.log("error called");
          console.error(errorData);
          setMessage(errorData.message);
        }
      } catch (error) {
        console.error(error);
      }
    };
  
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.files && e.target.files.length > 0) {
        const file = e.target.files[0];
        const {name} = e.target
        setFormData((prevFormData) => ({
          ...prevFormData,
         [name] : file,
        }));
      }
    };
  
const {backgroundText,serviceHeading,serviceDescription,examHeading,examDescription,acoFeautureHeading,acoFeautureDescription,travelFeautureHeading,travelFeautureDescription,faqHeading,faqDescription } = formData;
     
  return (
    <div>
        <div className="flex justify-center">
      <div className="font-bold text-xl">
        Edit Home Page
      </div>
      </div>
      {loader && <Loading/>}
      <form className="px-6 py-6" onSubmit={handleSubmit}>
      <div className="mb-5">
      <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="backgroundUrlSm">background Url Sm</label>
      <input required type="file" id="backgroundUrlSm" name="backgroundUrlSm" onChange={handleFileChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
  </div>
  <div className="mb-5">
      <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="backgroundUrlLg">background Url Lg</label>
      <input required type="file" name="backgroundUrlLg" onChange={handleFileChange} id="backgroundUrlLg" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
  </div>
  <div className="mb-5">
      <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="backgroundText">background Text</label>
      <input required type="text" name="backgroundText" id="backgroundText" onChange={handleChange} value={backgroundText} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
  </div>
  <div className="mb-5">
      <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="serviceHeading">service Heading</label>
      <input required name="serviceHeading" onChange={handleChange} type="text" id="serviceHeading" value={serviceHeading} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
  </div>
  <div className="mb-5">
      <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="serviceDescription">service Description</label>
      <input required type="text" id="serviceDescription" name="serviceDescription" onChange={handleChange} value={serviceDescription} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
  </div>
  <div className="mb-5">
      <label  htmlFor="examHeading" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">exam Heading</label>
      <input required type="text" id="examHeading" name="examHeading" onChange={handleChange} value={examHeading} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
  </div>
  <div className="mb-5">
      <label  htmlFor="examDescription" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">exam Description</label>
      <input required type="text" id="examDescription" name="examDescription" onChange={handleChange} value={examDescription} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
  </div>

  <div className="mb-5">
      <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor='acoFeautureHeading'>aco Feauture Heading</label>
      <input required type="text" id="acoFeautureHeading" name="acoFeautureHeading" onChange={handleChange} value={acoFeautureHeading} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
  </div>
  <div className="mb-5">
      <label htmlFor="acoFeautureDescription" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">aco Feauture Description</label>
      <input required type="text" id="acoFeautureDescription" name="acoFeautureDescription" onChange={handleChange} value={acoFeautureDescription} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
  </div>
  <div className="mb-5">
      <label  htmlFor="bannerUrl" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">banner Url</label>
      <input required type="file" id="bannerUrl" name="bannerUrl" onChange={handleFileChange} accept='.png,.jpg' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
  </div>
  <div className="mb-5">
      <label  htmlFor="travelFeautureHeading" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">travel Feauture Heading</label>
      <input required type="text" id="travelfeautureHeading" name="travelFeautureHeading" onChange={handleChange} value={travelFeautureHeading} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
  </div>
  <div className="mb-5">
      <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="travelFeautureDescription">travel Feauture Description</label>
      <input required type="text" id="travelFeautureDescription" name="travelFeautureDescription" onChange={handleChange} value={travelFeautureDescription} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
  </div>
  <div className="mb-5">
      <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="faqHeading">faq Heading</label>
      <input required type="text" id="faqHeading" name="faqHeading" onChange={handleChange} value={faqHeading} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
  </div>
  <div className="mb-5">
      <label  htmlFor="faqDescription" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">faq Description</label>
      <input required type="text" id="faqDescription" name="faqDescription" onChange={handleChange} value={faqDescription} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
  </div>

  <div>
  <button type="submit" className={deactivate ? 'submit p-2' : "submit p-2 opacity-80"}>Submit</button>
  </div>


      </form>
          <Modal
            isOpen={thankyou}
            onRequestClose={()=>setThankYou(false)}
            overlayClassName="custom-overlay"
            className="thankyou-modal-container"
          >
          <ThankyouModal closeThankyou={()=>setThankYou(false)} failure={failure} message={message}/>
          </Modal>
    
    </div>
  )
}

export default EditHomePage

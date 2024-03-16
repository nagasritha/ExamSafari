
import React, { useState } from 'react';
import './index.css'; // Assuming you have a CSS file for styling
import Cookies from 'js-cookie'
import Loading from '../Loading/loading';
interface FormProps {
  enquire: (value:boolean) => void;
}

const Form: React.FC<FormProps> = ({ enquire }) => {
  const token=Cookies.get('jwt_token');
  const [image,setImage]=useState<string>('');
  const [loader,setLoader]=useState<boolean>(false);
  const [formData, setFormData] = useState<{
    fullName: string;
    whatsappNumber: string;
    currentAddress: string;
    examCity: string;
    examCenter: string;
    busStop : string;
    exam : string;
    examDate : string;
    serviceType : string;
    admitCard: File | null; // Explicitly specify admitCard can be null or File
  }>({
    fullName: '',
    whatsappNumber: '',
    currentAddress: '',
    examCity: '',
    examCenter: '',
    admitCard: null,
    exam : '',
    busStop:'',
    examDate : '',
    serviceType : '',
  });

  const loaderSetup = ()=>{
    setLoader(!loader);
  }
  

  const [errors, setErrors] = useState({
    fullName: false,
    whatsappNumber: false,
    currentAddress: false,
    examCity: false,
    examCenter: false,
    admitCard: false,
    busStop: false,
    exam: false,
    examDate : false,
    serviceType : false,
  });

  const [deactivate, setActivate] = useState(false);
  console.log(deactivate);

  const areAllPropertiesFilled = () => {
    const { fullName, whatsappNumber, examCenter, examCity, currentAddress, admitCard,exam,busStop,examDate, serviceType}=formData
    if(fullName!=="" && whatsappNumber.length!==10 && examCity!=="" && examCenter!=="" && currentAddress!=="" && admitCard!==null && exam!=='' && busStop !== '' && examDate!=='' && serviceType!==''){
      setActivate(true);
    }else{
      setActivate(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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

  const viewData = async () => {
    const apiUrl = "https://examsafaribackend.onrender.com/formDetails";
    const jwtToken = Cookies.get("jwt_token");
    const token  = `Bearer ${jwtToken}`;
    console.log(token);

    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: "GET",
    };
    const response = await fetch(apiUrl, options);
    if (response.ok === true) {
      const fetchedData = await response.json();
      console.log(fetchedData);
      setImage(fetchedData.EnquireDetails[4].admit_card_path)

    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    loaderSetup();
    console.log(loader);
    try {
      const { fullName, whatsappNumber, currentAddress, examCity, examCenter, admitCard, exam, busStop,examDate, serviceType} = formData;
      console.log(exam)
      const formFields = {
        name: fullName,
        whatsappNumber,
        address: currentAddress,
        examCity,
        examCenter,
        busStop,
        exam,
        examDate,
        serviceType
      };

      const formDataToSend = new FormData();
      if(admitCard){
        formDataToSend.append('admitCard', admitCard); // Append the file to the FormData
      }
 

      // Append other form fields as well
      Object.entries(formFields).forEach(([key, value]) => {
        formDataToSend.append(key, value);
      });
      const options = {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`, // Add the authorization header
        },
        body: formDataToSend,
      };

      const response = await fetch('https://example-na5m.onrender.com/api/submit-enquire', options);
      
      console.log(response.ok)
      if (response.ok) {
        const data = await response.json();
        loaderSetup();
        console.log(loader);
        console.log(data);
       enquire(false);
        setFormData({
          fullName: '',
          whatsappNumber: '',
          currentAddress: '',
          examCity: '',
          examCenter: '',
          admitCard: null, 
          exam:'',
          busStop: '',
          examDate : '',
          serviceType : '',
        });
      } else {
        loaderSetup();
        const errorData = await response.json();
        enquire(true);
        console.log("error called");
        console.error(errorData);
      }
    } catch (error) {
      console.error(error);
      enquire(true);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      setFormData((prevFormData) => ({
        ...prevFormData,
        admitCard: file,
      }));
    }
  };

  console.log(image)
  return (
    <div className="form-container lg:fixed">
      {loader && <Loading/>}
      <form onSubmit={handleSubmit} className="form xl:ml-10 z-10">
        <div className="form-group">
        <h1 onClick={viewData}>Enquire Form</h1>
        {image!=='' && <img src={image}/>}
          <label htmlFor="fullName"  className='font-bold'>Full Name *</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Enter your full name"
            required
          />
          {errors.fullName && <p className="text-red-500">Full Name is required</p>}
        </div>
        <div className="form-group">
          <label htmlFor="whatsappNumber" className='font-bold'>WhatsApp Number *</label>
          <input
            type="tel"
            pattern="[0-9]{10}"
            id="whatsappNumber"
            name="whatsappNumber"
            value={formData.whatsappNumber}
            onChange={handleChange}
            placeholder="Enter your WhatsApp number"
            required
          />
          {errors.whatsappNumber && <p className="text-red-500">WhatsApp Number is required</p>}
        </div>

        <div className="form-group">
          <label htmlFor="currentAddress" className='font-bold'>Current Address *</label>
          <textarea
            id="currentAddress"
            name="currentAddress"
            value={formData.currentAddress}
            onChange={handleChange}
            placeholder="Enter your current address"
            required
          ></textarea>
          {errors.currentAddress && <p className="text-red-500">Current Address is required</p>}
        </div>
        <div className="form-group">
        <label htmlFor="busStop" className='font-bold'>Nearby Bus-stop *</label>
        <input
          type="text"
          id="busStop"
          name="busStop"
          onChange={handleChange}
          placeholder="Enter your near by bus-stop"
          required
        />
      {errors.busStop && <p className="text-red-500">Bus stop is required</p>}
        </div>
        <div className="form-group">
          <label htmlFor="exam" className='font-bold'>Select Exam *</label>
          <select
            id="exam"
            className='p-2'
            name="exam"
            onChange={handleChange}
            required
          >
            <option value="">Select an exam</option>
            <option value="UPSC">UPSC</option>
            <option value="JEE">JEE</option>
            <option value="CAT">CAT</option>
          </select>
          {errors.exam && <p className="text-red-500">Please select an exam</p>}
      </div>
      <div className="form-group">
        <label htmlFor="examDate" className='font-bold'>Select Exam Date *</label>
        <input
          id="examDate"
          name="examDate"
          onChange={handleChange}
          required 
          type='date'
        />
        
        {errors.examDate && <p className="text-red-500">Please select an exam Date</p>}
        </div>
        <div className="form-group">
          <label htmlFor="examCity" className='font-bold'>Exam City *</label>
          <input
            type="text"
            id="examCity"
            name="examCity"
            value={formData.examCity}
            onChange={handleChange}
            placeholder="Enter your exam city"
            required
          />
          {errors.examCity && <p className="text-red-500">Exam City is required</p>}
        </div>
        <div className="form-group">
          <label htmlFor="examCenter" className='font-bold'>Exam Center *</label>
          <input
            type="text"
            id="examCenter"
            name="examCenter"
            value={formData.examCenter}
            onChange={handleChange}
            placeholder="Enter your exam center"
            required
          />
          {errors.examCenter && <p className="text-red-500">Exam Center is required</p>}
        </div>
        <div className="form-group">
          <label htmlFor="serviceType" className='font-bold'>Select Required Service *</label>
          <select
            id="serviceType"
            name="serviceType"
            onChange={handleChange}
            className='p-2'
            required
          >
            <option value="">Select service</option>
            <option value="Travel">Travel</option>
            <option value="Accomadation">Accomodation</option>
            <option value="Travel+Accomadation">Travel+Accomadation</option>
          </select>
          {errors.exam && <p className="text-red-500">Please select an exam</p>}
        </div>
        <div className="form-group">
          <label htmlFor="admitCard" className='font-bold'>Upload Admit Card *</label>
          <input
            type="file"
            id="admitCard"
            name="admitCard"
            accept=".pdf,.jpg,.png"
            onChange={handleFileChange}
            required
            className='font-bold'
          />
          {errors.admitCard && <p className="text-red-500">Admit Card is required</p>}
        </div>
        <div style={{ textAlign: 'right' }}>
          <button type="submit" className={deactivate ? 'submit p-2' : "submit p-2 opacity-80"}>Submit</button>
        </div>
      </form>
      
    </div>
  );
};

export default Form;

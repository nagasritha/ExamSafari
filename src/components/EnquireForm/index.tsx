import React, { useState } from 'react';
import './index.css'; // Assuming you have a CSS file for styling

interface FormProps {
  enquire: () => void;
}

const Form: React.FC<FormProps> = ({ enquire }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    whatsappNumber: '',
    currentAddress: '',
    examCity: '',
    examCenter: '',
    admitCard: '',
  });

  const [errors, setErrors] = useState({
    fullName: false,
    whatsappNumber: false,
    currentAddress: false,
    examCity: false,
    examCenter: false,
    admitCard: false,
  });

  const [deactivate, setActivate] = useState(false);
  console.log(deactivate);

  const areAllPropertiesFilled = () => {
    const { fullName, whatsappNumber, examCenter, examCity, currentAddress, admitCard}=formData
    if(fullName!=="" && whatsappNumber.length!==10 && examCity!=="" && examCenter!=="" && currentAddress!=="" && admitCard!==""){
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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    enquire();
    console.log('Form submitted:', formData);
  };
  const {fullName}=formData;
  console.log(fullName);

  return (
    <div className="form-container lg:fixed">
      <form onSubmit={handleSubmit} className="form xl:ml-10">
        <div className="form-group">
          <label htmlFor="fullName">Full Name *</label>
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
          <label htmlFor="whatsappNumber">WhatsApp Number *</label>
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
          <label htmlFor="currentAddress">Current Address *</label>
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
          <label htmlFor="examCity">Exam City *</label>
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
          <label htmlFor="examCenter">Exam Center *</label>
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
          <label htmlFor="admitCard">Upload Admit Card *</label>
          <input
            type="file"
            id="admitCard"
            name="admitCard"
            accept=".pdf,.jpg,.png"
            onChange={handleChange}
            required
          />
          {errors.admitCard && <p className="text-red-500">Admit Card is required</p>}
        </div>
        <div style={{ textAlign: 'right' }}>
          <button type="submit" className={deactivate ? 'submit p-2' : "submit p-2 opacity-70"}>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Form;

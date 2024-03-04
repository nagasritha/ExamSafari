
import React, { useState,useEffect } from 'react';
import './index.css'; // Assuming you have a CSS file for styling
import Cookies from 'js-cookie'

const profileForm: React.FC = () => {
  const token=Cookies.get('jwt_token');
  const [formData, setFormData] = useState<{
  name: string;
  educationStatus: string;
  about: string;
  phoneNumber: string;
  address: string;
  country: string;
  state: string;
  instaProfile: string;
  twitterProfile: string;
  facebookProfile: string;
  linkedinProfile: string;
  imageUrl: File | string; // Explicitly specify admitCard can be null or File
  }>({
   imageUrl: 'images/image2.PNG',
    name: "Kevin Anderson",
    educationStatus: "degree",
    about: "Sunt est soluta temporibus accusantium neque nam maiores cumque temporibus. Tempora libero non est unde veniam est qui dolor. Ut sunt iure rerum quae quisquam autem eveniet perspiciatis odit. Fuga sequi sed ea saepe at unde.",
    phoneNumber: "6565656565",
    address: "A108 Adam Street, New York, NY 535022",
    country: "India",
    state: "AP",
    instaProfile: "https://instagram.com/#",
    twitterProfile: "https://twitter.com/#",
    facebookProfile: "https://facebook.com/#",
    linkedinProfile: "https://linkedin.com/#"
  });
  
  useEffect(() => {
    // Fetch profile data when the page loads
    fetchProfileData();
  }, []);

  const fetchProfileData = async () => {
    try {
      const response = await fetch("https://example-na5m.onrender.com/api/eachProfile", {
        method: "GET",
        headers: {
          "Authorization": `Bearer ${token}`
        }
      });
      if (response.ok) {
        const data = await response.json();
        // Update formData only if fetched data is not empty
        if (Object.keys(data).length !== 0){
          const {UserDetails} = data;
          const UserProfiles = UserDetails
          setFormData({
            imageUrl: UserProfiles.image_url,
    name: UserProfiles.name,
    educationStatus: UserProfiles.education_status,
    about: UserProfiles.about,
    phoneNumber: UserProfiles.phone_number,
    address: UserProfiles.address,
    country: UserProfiles.country,
    state: UserProfiles.state,
    instaProfile: UserProfiles.insta_profile,
    twitterProfile: UserProfiles.twitter_profile,
    facebookProfile: UserProfiles.facebook_profile,
    linkedinProfile: UserProfiles.linkedin_profile,
          })
        }
      } else {
        console.error("Failed to fetch profile data");
      }
    } catch (error) {
      console.error("Error fetching profile data:", error);
    }
  };

  const [errors, setErrors] = useState({
    name: false,
  educationStatus: false,
  about: false,
  phoneNumber: false,
  address: false,
  country: false,
  state: false,
  instaProfile: false,
  twitterProfile: false,
  facebookProfile: false,
  linkedinProfile: false,
  imageUrl: false 
  });

  const [deactivate, setActivate] = useState(false);
  console.log(deactivate);
  const { name,
    educationStatus,
    about,
    phoneNumber,
    address,
    country,
    state,
    instaProfile,
    twitterProfile,
    facebookProfile,
    linkedinProfile,
    imageUrl }=formData
  const areAllPropertiesFilled = () => {
    if(name!=="" && educationStatus!=='' && phoneNumber.length!==10 && country!=="" && state!=="" && address!=="" && imageUrl!==null && about!=='' && instaProfile!=='' && linkedinProfile!=='' && twitterProfile!=='' && facebookProfile!==''){
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
    try {

      const formFields = {
    name,
    educationStatus,
    about,
    phoneNumber,
    address,
    country,
    state,
    instaProfile,
    twitterProfile,
    facebookProfile,
    linkedinProfile
      };

      const formDataToSend = new FormData();
      if(imageUrl){
        formDataToSend.append('profileUrl', imageUrl); // Append the file to the FormData
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

      const response = await fetch('https://example-na5m.onrender.com/api/submit-profile', options);
      
      console.log(response.ok)
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        
      } else {
        const errorData = await response.json();
        console.log("error called");
        console.error(errorData);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      setFormData((prevFormData) => ({
        ...prevFormData,
        imageUrl: file,
      }));
    }
  };
  return (
    <div className="form-container">
     
      <form onSubmit={handleSubmit} className="form z-10">
        <div className="form-group">
          <label htmlFor="name"  className='font-bold'>Full Name *</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={handleChange}
            placeholder="Enter your full name"
            required
          />
          {errors.name && <p className="text-red-500">Full Name is required</p>}
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber" className='font-bold'>Phone Number *</label>
          <input
            type="tel"
            pattern="[0-9]{10}"
            id="phoneNumber"
            name="phoneNumber"
            value={phoneNumber}
            onChange={handleChange}
            placeholder="Enter your phone number"
            required
          />
          {errors.phoneNumber && <p className="text-red-500">Phone Number is required</p>}
        </div>
        <div className="form-group">
          <label htmlFor="about" className='font-bold'>About *</label>
          <textarea
            id="about"
            name="about"
            value={about}
            onChange={handleChange}
            placeholder="Enter your current address"
            required
          ></textarea>
          {errors.about && <p className="text-red-500">About is required</p>}
        </div>
        <div className="form-group">
          <label htmlFor="address" className='font-bold'>Current Address *</label>
          <input
            type="text"
            id="adddress"
            name="address"
            value={address}
            onChange={handleChange}
            placeholder="Enter your address"
            required
          />
          {errors.address && <p className="text-red-500">Address is required</p>}
        </div>
        <div className="form-group">
          <label htmlFor="country" className='font-bold'>Country *</label>
          <input
            type="text"
            id="country"
            name="country"
            value={country}
            onChange={handleChange}
            placeholder="Enter your country"
            required
          />
          {errors.country && <p className="text-red-500">Country is required</p>}
        </div>
        <div className="form-group">
          <label htmlFor="state" className='font-bold'>State *</label>
          <input
            type="text"
            id="state"
            name="state"
            value={state}
            onChange={handleChange}
            placeholder="Enter your state"
            required
          />
          {errors.state && <p className="text-red-500">State is required</p>}
        </div>
        <div className="form-group">
          <label htmlFor="imageUrl" className='font-bold'>Upload image *</label>
          <input
            type="file"
            id="imageUrl"
            name="imageUrl"
            accept=".jpg,.png"
            onChange={handleFileChange}
            required
            className='font-bold'
          />
          {errors.imageUrl && <p className="text-red-500">Image is required</p>}
        </div>
         <div className="form-group">
         <label htmlFor="instaProfile" className='font-bold'>Instagram Profile *</label>
         <input
           type="text"
           id="instaProfile"
           name="instaProfile"
           value={instaProfile}
           onChange={handleChange}
           placeholder="Enter your insta Profile"
           required
         />
         {errors.instaProfile && <p className="text-red-500">Insta profile is required</p>}
       </div>
       <div className="form-group">
         <label htmlFor="facebookProfile" className='font-bold'>Facebook Profile *</label>
         <input
           type="text"
           id="facebookProfile"
           name="facebookProfile"
           value={facebookProfile}
           onChange={handleChange}
           placeholder="Enter your facebook profile"
           required
         />
         {errors.facebookProfile && <p className="text-red-500">Facebook profile is required</p>}
       </div>
       <div className="form-group">
         <label htmlFor="twitterProfile" className='font-bold'>Twitter Profile *</label>
         <input
           type="text"
           id="twitterProfile"
           name="twitterProfile"
           value={twitterProfile}
           onChange={handleChange}
           placeholder="Enter your twitter profile"
           required
         />
         {errors.twitterProfile && <p className="text-red-500">twitter is required</p>}
       </div>
       <div className="form-group">
         <label htmlFor="linkedinProfile" className='font-bold'>Linkedin Profile *</label>
         <input
           type="text"
           id="lnkedinProfile"
           name="linkedinProfile"
           value={linkedinProfile}
           onChange={handleChange}
           placeholder="Enter your linkedin profile"
           required
         />
         {errors.linkedinProfile && <p className="text-red-500">Linkedin profile is required</p>}
       </div>
        <div style={{ textAlign: 'right' }}>
          <button type="submit" className={deactivate ? 'submit p-2' : "submit p-2 opacity-80"}>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default profileForm;
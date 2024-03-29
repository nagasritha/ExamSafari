import React, { useRef, useState,useEffect, ChangeEvent } from 'react';
import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';

interface OTPInputProps{
email: string,
timer: number,
sendOtp:()=>void,
loaderSetup : ()=>void,
loadersetupFalse:()=>void
}

const OTPInput: React.FC<OTPInputProps>= ({email,timer,sendOtp,loaderSetup,loadersetupFalse}) => {

  const [otp, setOTP] = useState<string>('');
  const otpRefs = Array.from({ length: 6 }, () => useRef<HTMLInputElement>(null));
  const [error, setError]=useState<string>('');

  useEffect(() => {
    if (otpRefs[0].current) {
      otpRefs[0].current.focus();
    }
  }, []);
 
  const navigate=useNavigate();

  const handleChange = (index: number, e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const newOTP = otp.slice(0, index) + value + otp.slice(index + 1);
    setOTP(newOTP);

    if (value.length === 1 && index < otpRefs.length - 1) {
      otpRefs[index + 1].current?.focus();
    }
  };

  
  const handleFormLogin =(e: { preventDefault: () => void }) => {
    e.preventDefault();
    loaderSetup();
    verification();
  };

  const verification=async ()=>{
    const userDetails = {
      'email': email,
      'otp':otp
  };
  const options = {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(userDetails) // Changed JSON.parse to JSON.stringify
  };
  const url = "https://example-na5m.onrender.com/verifyOtp";
  const response = await fetch(url, options);
  const jsonData=await response.json();
  loadersetupFalse();
  if(response.ok){
    addToken(jsonData.token);
  }else{
    failure(jsonData.message);
  }
  console.log(jsonData);
  }

  const addToken=(token:string)=>{
    Cookies.set('jwt_token',token,{expires:15});
    navigate('/myprofile');
  }
  
  const failure=(message:string)=>{
    setError(message);
  }

  const resend=()=>{
    sendOtp();
    setError('');
    setOTP('');
    otpRefs.forEach(ref => {
      if (ref.current) {
        ref.current.value = '';
      }
    });
    
    // Focus on the first OTP input field
    //done
  if (otpRefs[0].current) {
    otpRefs[0].current.focus();
  }
  }

  return (
    <div>
    <form className="flex flex-col" onSubmit={handleFormLogin}>
       <label
        className="mb-2 text-lg font-semibold"
        htmlFor="emial"
       >
        Email Address
      </label>
      <input
        className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 w-full"
        type="text"
        id="email"
        defaultValue={email}
        readOnly
      />
      <label htmlFor="otp" className="mb-2 mt-3 text-lg font-semibold">Enter OTP:</label>
      <div className="flex space-x-2 items-center">
        {otpRefs.map((ref, index) => (
          <input
            key={index}
            type="text"
            id={`otp${index + 1}`}
            name={`otp${index + 1}`}
            maxLength={1}
            pattern="[0-9]"
            required
            ref={index === 0 ? otpRefs[0] : ref}
            onChange={(e) => handleChange(index, e)}
            className="w-12 h-12 text-2xl text-center border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            value={otp[index]}
          />
        ))}
      </div>
      <div className="timer h-[20px] w-max">
        <b>Time Remaing: </b>0 min : {timer} sec
      </div>
      <div className="otp-resend my-3">
        Didn’t get the code ?{" "}
        <a href='#' onClick={resend} className="text-blue-400 underline">
          Resend
        </a>{" "}
        or Call Us
      </div>
      {error!=='' && <p className='text-red m-3 text-center' style={{color:'red'}}>{error}</p>}
      <button
      onKeyDown={handleFormLogin}
        type="submit"
        className={`bg-gray-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600 ${
          email!=='' && otp.length===6
            ? ""
            : "cursor-not-allowed opacity-50"
        }`}>
        Login
      </button>
             
      
    </form>
    </div>
  );
};

export default OTPInput;

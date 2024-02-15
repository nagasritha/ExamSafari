import React, { useRef, useState, useEffect, ChangeEvent } from 'react';
import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';

interface OTPInputProps{
email: string,
sendOtp:()=>void
}

const OTPInput: React.FC<OTPInputProps>= ({email,sendOtp}) => {
  const otpRefs = Array.from({ length: 6 }, () => useRef<HTMLInputElement>(null));
  const [error, setError]=useState<string>('');
  const [otp, setOTP] = useState<string>('');
  const [timer, setTimer] = useState<number>(60); // Set timer to 60 seconds (1 minute)
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const navigate=useNavigate();
  

  useEffect(() => {
    // Start the timer when component mounts
    startTimer();

    // Clean up timer when component unmounts
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, []);

  const startTimer = () => {
    // Clear any existing timer
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }

    // Start a new timer
    timerRef.current = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer === 0) {
          // Reset timer to initial value when it reaches 0
          clearInterval(timerRef.current!);
          return 0;
        } else {
          return prevTimer - 1;
        }
      });
    }, 1000);
  };

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
    console.log('called login form');
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
  const url = "https://examsafaribackend.onrender.com/login";
  const response = await fetch(url, options);
  const jsonData=await response.json();
  if(response.ok){
    addToken(jsonData.token);
  }else{
    failure(jsonData.message);
  }
  console.log(jsonData);
  }

  const addToken=(token:string)=>{
    Cookies.set('jwt_token',token,{expires:15});
    navigate('/profile');
  }
  
  const failure=(message:string)=>{
    setError(message);
  }

  const resend=()=>{
    setTimer(60);
    startTimer();
    sendOtp();
    setError('');
    setOTP('');
    otpRefs.forEach(ref => {
      if (ref.current) {
        ref.current.value = '';
      }
    });
    
    // Focus on the first OTP input field
  if (otpRefs[0].current) {
    otpRefs[0].current.focus();
  }
  }

  return (
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
        type="submit"
        className={`bg-gray-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600 ${
          email!=='' && otp.length===6
            ? ""
            : "cursor-not-allowed opacity-50"
        }`}>
        Login
      </button>
             
      
    </form>
  );
};

export default OTPInput;

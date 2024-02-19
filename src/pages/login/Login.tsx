import "./login.css";
import Banner from "/images/bannar3-modified.png";
import { useState, useRef} from "react";
//import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import OTPInput from "@/components/FormOTP/OTPInput";
import {Navigate} from 'react-router-dom'
import Cookies from 'js-cookie'

function Login() {
  const [isSubmitClicked, setIsSubmitClicked] = useState(false);
  const [email, setPhoneEmail] = useState("");
  const [error,setError]=useState<string>('');
  const [timer, setTimer] = useState<number>(60); // Set timer to 60 seconds (1 minute)
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const startTimer = () => {
    console.log('called')
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

  const handleEmail = (e: { target: { value: any } }) => {
    const newEmail = e.target.value;
    setPhoneEmail(newEmail);
  };

  const failure=()=>{
    setError('Invalid email address');
  }
 
  const handleFormSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    sendOTP();
};
  const sendOTP=async ()=>{
    setTimer(0);
    const userDetails = {
      'email': email
  };
  const options = {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(userDetails) // Changed JSON.parse to JSON.stringify
  };
  const url = "https://examsafaribackend.onrender.com/sendOTP";
  const response = await fetch(url, options);
  const jsonData=await response.json();
  if(response.ok){
    setIsSubmitClicked(true);
    setTimer(60);
    startTimer();
    console.log(jsonData);
  }else{
    failure();
  }
 
  }
  if(Cookies.get('jwt_token')!==undefined){
    return <Navigate to='/profile' replace={true}/>
  }
  return (
    <Layout>
      <div
        className="flex flex-col justify-center items-center h-screen"
        style={{
          backgroundImage: `url(${Banner})`,
          backgroundSize: "cover",
          //backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="flex bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl w-full">
          <div className="hidden lg:block lg:w-1/2 bg-cover bgImage"></div>
          <div className="w-full p-16 lg:w-1/2">
            <h2 className="text-3xl font-semibold text-gray-700 text-center">
              Exam Safari!
            </h2>
            <p className="text-xl text-gray-600 text-center">Welcome back!</p>
            {!isSubmitClicked && <form id='login' onSubmit={handleFormSubmit} className="mt-4 mb-2">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="phone"
              >
                Email Address
              </label>
              <input
                className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 w-full"
                type="text"
                name="phone"
                id="phone"
                value={email}
                onChange={handleEmail}
               
                title="Please enter a email address"
              />
              {error!=='' && <p className='text-red m-3' style={{color:'red'}}>{error}</p>}
              <div className="flex items-center justify-center mt-4">
                <button
                  type="submit"
                  className={`bg-gray-700 text-white font-bold py-2 px-4 rounded hover:bg-gray-600 ${
                    email!=="" ? "" : "cursor-not-allowed opacity-50"
                  }`}

                >
                  Submit
                </button>
              </div>
            </form>}
           {isSubmitClicked &&  <div className=" h-max ">
              <div
                className={`card scale-90 pb-3`}
              >
                <OTPInput email={email} timer={timer} sendOtp={sendOTP} />
              </div>
            </div>}
          </div>
        </div>
      </div>
    </Layout>
      
  );
}

export default Login;
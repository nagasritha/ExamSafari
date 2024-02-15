import "./login.css";
import Banner from "/images/bannar3-modified.png";
import { useState, useEffect } from "react";
//import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import OTPInput from "@/components/FormOTP/OTPInput";


function Login() {
  const initialTimer = 1 * 60;
  const [timer, setTimer] = useState(initialTimer);
  const [isSubmitClicked, setIsSubmitClicked] = useState(false);
  const [email, setPhoneEmail] = useState("");
const [error,setError]=useState<string>('');

  const handleEmail = (e: { target: { value: any } }) => {
    const newEmail = e.target.value;
    setPhoneEmail(newEmail);
  };

  const failure=()=>{
    setError('Invalid email address');
  }
  
  useEffect(() => {
    let intervalId: string | number | NodeJS.Timeout | undefined;
    if (isSubmitClicked && timer > 0) {
      intervalId = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [timer, isSubmitClicked]);
 
  const handleFormSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    sendOTP();
};

  const sendOTP=async ()=>{
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
  const jsonData=await response.json()
  if(response.ok){
    setIsSubmitClicked(true);
  }else{
    failure();
  }
  console.log(jsonData);
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
          <div className="w-full p-8 lg:w-1/2">
            <h2 className="text-2xl font-semibold text-gray-700 text-center">
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
            <div className=" h-max ">
              <div
                className={`card scale-90 pb-3 ${
                  isSubmitClicked ? `block` : "hidden"
                }`}
              >
                <OTPInput email={email} sendOtp={sendOTP}/>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
      
  );
}

export default Login;
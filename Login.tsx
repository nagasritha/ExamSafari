import Navbar from "@/components/navbar/Navbar";
import "./login.css";
import Banner from "/public/images/bannar3-modified.png";
import { useState, useEffect } from "react";

function Login() {
  const initialValues = {
    otp: [
      { digit: "" },
      { digit: "" },
      { digit: "" },
      { digit: "" },
      { digit: "" },
      { digit: "" },
    ],
  };

  const initialTimer = 5 * 60;
  const [timer, setTimer] = useState(initialTimer);
  const [isSubmitClicked, setIsSubmitClicked] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isValidPhoneNumber, setIsValidPhoneNumber] = useState(false);

  const handlePhoneNumberChange = (e: { target: { value: any; }; }) => {
    const newPhoneNumber = e.target.value;
    setPhoneNumber(newPhoneNumber);

    // Validate the phone number (add your validation logic here)
    const isValid = /^[0-9]{10}$/.test(newPhoneNumber);
    setIsValidPhoneNumber(isValid);
  };

  const handleFormSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setIsSubmitClicked(true);
  };

  useEffect(() => {
    let intervalId: NodeJS.Timeout | undefined;

    if (isSubmitClicked && timer > 0) {
      intervalId = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [timer, isSubmitClicked]);

  const minutes = Math.floor(timer / 60);
  const seconds = timer % 60;

  return (
    <>
      <Navbar />
      <div
        className="py-16 relative inset-0"
        style={{
          backgroundImage: `url(${Banner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
          <div className="hidden lg:block lg:w-1/2 bg-cover bgImage"></div>
          <div className="w-full p-8 lg:w-1/2">
            <h2 className="text-2xl font-semibold text-gray-700 text-center">
              Exam Safari!
            </h2>
            <p className="text-xl text-gray-600 text-center">Welcome back!</p>
            <a
              href="#"
              className="flex items-center justify-center mt-4 text-white rounded-lg shadow-md hover:bg-gray-100"
            >
              <div className="px-4 py-3">
                <svg className="h-6 w-6" viewBox="0 0 40 40">
                  <path
                    d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                    fill="#FFC107"
                  />
                  <path
                    d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z"
                    fill="#FF3D00"
                  />
                  <path
                    d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z"
                    fill="#4CAF50"
                  />
                  <path
                    d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                    fill="#1976D2"
                  />
                </svg>
              </div>
              <h1 className="px-4 py-3 w-5/6 text-center text-gray-600 font-bold">
                Sign in with Google
              </h1>
            </a>
            <div className="mt-4 flex items-center justify-between">
              <span className="border-b w-1/5 lg:w-1/4"></span>
              <a
                href="#"
                className="text-xs text-center text-gray-500 uppercase"
              >
                or login with phone number
              </a>
              <span className="border-b w-1/5 lg:w-1/4"></span>
            </div>
            <form onSubmit={handleFormSubmit} className="mt-4 mb-2">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="phone"
              >
                Phone Number
              </label>
              <input
                className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 w-full"
                type="tel"
                name="phone"
                value={phoneNumber}
                onChange={handlePhoneNumberChange}
                pattern="[0-9]{10}"
                title="Please enter a valid 10-digit phone number"
              />
              <div className="flex items-center justify-center mt-4">
                <button
                  type="submit"
                  className={`bg-gray-700 text-white font-bold py-2 px-4 rounded hover:bg-gray-600 ${
                    isValidPhoneNumber ? "" : "cursor-not-allowed opacity-50"
                  }`}
                  disabled={!isValidPhoneNumber}
                >
                  Submit
                </button>
              </div>
            </form>
            <div className=" h-max">
              <div className="card scale-90 pb-3">
                {/* <div className="card-header">
                  <img src="./smartphone-2.svg" alt="smartphone" />
                  <div className="header-text">Two-Factor Verification</div>
                  <div className="header-subtext">
                    Enter the verification code we sent to
                  </div>
                  <div className="verification-number">******789</div>
                </div> */}
                <form className="otp-conatiner">
                  <div className="otp-subtext">
                    Type your 6 digit security code
                  </div>
                  <div className="otp-inputs">
                    {initialValues.otp.map((_item, index) => {
                      return (
                        <input
                          className="otp-input"
                          type="text"
                          inputMode="numeric"
                          autoComplete="one-time-code"
                          maxLength={1}
                          key={index}
                        />
                      );
                    })}
                  </div>
                  <div className="timer h-[20px] w-max">
                    {isSubmitClicked && timer > 0
                      ? `Time Remaining: ${minutes} min ${seconds} sec`
                      : ""}
                  </div>
                </form>
                <div className="otp-resend">
                  Didn’t get the code ?{" "}
                  <a href="#" className="text-blue-400 underline">
                    Resend
                  </a>{" "}
                  or Call Us
                </div>
              </div>
            </div>
            <div className="mt-">
              <button className="bg-gray-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600">
                Login
              </button>
            </div>
            {/* <div className="mt-4 flex items-center justify-between">
              <span className="border-b w-1/5 md:w-1/4"></span>
              <a href="#" className="text-xs text-gray-500 uppercase">
                or sign up
              </a>
              <span className="border-b w-1/5 md:w-1/4"></span>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;

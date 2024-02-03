import { useState } from "react";
import { FaCircleCheck } from "react-icons/fa6";



const PersonalDetails = () => {
  const [additional, setAdditional] = useState<boolean>(false);
  const toggleAdditional = () => {
    setAdditional(!additional);
   
  };

  return (
    <div className="w-4/6 ">
      <div className="upper-div flex justify-between pb-6">
        <div className="text-2xl font-bold">Booking Form</div>
        <div className="flex gap-2">
          <div className="">Need help, we are here</div>
          <div className="font-bold underline"> Contact us</div>
        </div>
      </div>

      <div className="Accommodation Details w-full h-40 py-6 px-6 pl-8 rounded-lg  mb-4 bg-white">
        <div className="flex items-center gap-2 pb-4">
          <div className="Check-box">
            <FaCircleCheck style={{ color: "green", fontSize: "2.5em" }} />
          </div>
          <div className="flex flex-col ">
            <div className="font-semibold text-lg">Accommodation Details</div>
            <div className="font-normal">
              Tell us about your ideal accommodation!
            </div>
          </div>
        </div>
        <div>
          <hr className="text-gray-600" />
        </div>

        <div className="flex justify-between py-4 items-center">
          <div className="flex gap-2 text-sm">
            <div>Studio</div>
            <div>7 Sep, 2024 to 12 Jul, 2025</div>
            <div>44 week</div>
          </div>
          <div>
            <button className="py-1 px-6  text-sm rounded-md border border-gray-500">
              Edit
            </button>
          </div>
        </div>
      </div>

      <div className="Personal Details  bg-white pb-4 mb-2 px-8 rounded-lg ">
        <div className="upper-Portion flex py-4 pl-0 pb-2 px-4 items-center">
          <div className="flex">
            <div className="border border-green-500  rounded-full py-3 ml-0 m-4 px-4 items-center justify-center text-sm font-bold ">
              2
            </div>
          </div>
          <div>
            <div className="font-semibold text-lg">Personal Details</div>
            <div>
              To create a legal/accommodation contract we need your personal
              information.
            </div>
          </div>
        </div>

        <div className="mb-4">
          <hr />
        </div>

        <div className="heading-1 font-bold  text-blue-500 pb-4">
          Personal Details
        </div>

        <div className="form">
          <div className="First-row flex">
            <div className="Full-Name flex w-full">
              <div className="max-w-sm w-full pr-4">
                <label
                  htmlFor="website-admin"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Full Name
                </label>
                <div className="flex">
                  <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                    <svg
                      className="w-4 h-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                    </svg>
                  </span>
                  <input
                    type="text"
                    id="website-admin"
                    className="rounded-none rounded-e-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Bonnie Green"
                  />
                </div>
              </div>
            </div>

            <div className="Dob flex w-full">
              <div className="mb-5 w-full">
                <label
                  htmlFor="dob-input"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Date of Birth
                </label>
                <div>
                  <input
                    type="date"
                    id="dob-input"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="Second-row flex">
            <div className="Gender w-1/2 pr-4">
              <label
                htmlFor="Gender"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Gender
              </label>
              <select
                id="Gender"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            </div>

            <div className="Mobile number w-1/2">
              <div className="mb-5">
                <label
                  htmlFor="mobile-number"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Mobile Number
                </label>
                <input
                  type="tel" // Use "tel" type for mobile numbers
                  id="mobile-number"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter your mobile number"
                />
              </div>
            </div>
          </div>

          <div className="Third-row flex mb-4">
            <div className="Email w-1/2 pr-4">
              <div className="max-w-sm ">
                <label
                  htmlFor="email-address-icon"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                    <svg
                      className="w-4 h-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 16"
                    >
                      <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                      <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                    </svg>
                  </div>
                  <input
                    type="text"
                    id="email-address-icon"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@abc.com"
                  />
                </div>
              </div>
            </div>

            <div className="Alternate Email w-1/2">
              <div className="max-w-sm mx-auto">
                <label
                  htmlFor="email-address-icon"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Alternate Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                    <svg
                      className="w-4 h-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 16"
                    >
                      <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                      <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                    </svg>
                  </div>
                  <input
                    type="text"
                    id="email-address-icon"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@abc.com"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="Fourth-row">
            <div className="Address">
              <div className="mb-5">
                <label
                  htmlFor="address-input"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Address Line
                </label>
                <input
                  type="text"
                  id="address-input"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter your address"
                />
              </div>
            </div>
          </div>

          <div className="Fifth-row flex">
            <div className="Country w-1/2 mr-4">
              <div className="mb-5">
                <label
                  htmlFor="country-input"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Country
                </label>
                <input
                  type="text"
                  id="country-input"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter your country"
                />
              </div>
            </div>

            <div className="State w-1/2 ">
              <div className="mb-5 w-full ">
                <label
                  htmlFor="state-input"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  State/Province
                </label>
                <input
                  type="text"
                  id="state-input"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter your state or province"
                />
              </div>
            </div>
          </div>

          <div className="sixth-row flex">
            <div className="City w-1/2">
              <div className="mb-5 w-full pr-4">
                <label
                  htmlFor="city-input"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  City
                </label>
                <input
                  type="text"
                  id="city-input"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter your city"
                />
              </div>
            </div>

            <div className="Zipcode/Pincode w-1/2">
              <div className="mb-5 w-full">
                <label
                  htmlFor="zipcode-input"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Zipcode/Pincode
                </label>
                <input
                  type="text"
                  id="zipcode-input"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter your zipcode/pincode"
                />
              </div>
            </div>
          </div>

          <div className="checkbox">
            <div className="flex items-center mb-4">
              <input
                id="checkbox-2"
                onClick={toggleAdditional}
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="checkbox-2"
                className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                I have some medical conditions
              </label>
            </div>
          </div>

          {additional && (
            <div className="Additional Information">
              <div className="mb-5">
                <label
                  htmlFor="additional-info-input"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Additional Information
                </label>
                <input
                  type="text"
                  id="additional-info-input"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter additional information"
                />
              </div>
            </div>
          )}

          <div className="heading-1 font-bold  text-blue-500 pb-4">
            University Details
          </div>

          <div className="Seventh-row flex">
            <div className="University Name w-1/2 pr-4">
              <div className="mb-5">
                <label
                  htmlFor="university-name-input"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  University Name
                </label>
                <input
                  type="text"
                  id="university-name-input"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter university name"
                />
              </div>    
            </div>

            <div className="Course Name w-1/2">
            <div className="mb-5 ">
      <label htmlFor="course-name-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Course Name</label>
      <input
        type="text"
        id="course-name-input"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Enter course name"
      />
    </div>
            </div>
          </div>

          <div className="eighth-row pb-6">
            <div className="Enrolment Status w-1/2 pr-4">
            <div className="">
      <label htmlFor="enrollment-status" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enrollment Status</label>
      <select
        id="enrollment-status"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option>First Year Undergraduate</option>
        <option>Second Year Undergraduate</option>
        <option>Third Year Undergraduate</option>
        <option>Fourth Year Undergraduate or Above</option>
        <option>Post Graduate</option>
        <option>Non Student</option>

      </select>
    </div>
            </div>
          </div>

          <div className="pb-6">
            <hr />
          </div>

          <div className="Next-button">
          <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-base px-12 py-4  me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Save and Next</button>
          </div>
        </div>
      </div>

      <div className="Emergency Details bg-white rounded-lg px-8">
      <div className="upper-Portion flex py-4 pl-0 pb-2 px-4 items-center">
          <div className="flex">
            <div className="border border-green-500  rounded-full py-3 ml-0 m-4 px-4 items-center justify-center text-sm font-bold ">
              3
            </div>
          </div>
          <div>
            <div className="font-semibold text-lg">Emergency Details</div>
            <div>
            Your safety is our priority! Please mention a contact we can reach out to in case of emergencies
            </div>
          </div>
        </div>
        <div className="mb-4">
          <hr />
        </div>
        <form className="form  ">

        <div className="First-row flex">
            <div className="Full-Name flex w-full">
              <div className="max-w-sm w-full pr-4">
                <label
                  htmlFor="website-admin"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Full Name
                </label>
                <div className="flex">
                  <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                    <svg
                      className="w-4 h-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                    </svg>
                  </span>
                  <input
                    type="text"
                    id="website-admin"
                    className="rounded-none rounded-e-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Bonnie Green"
                  />
                </div>
              </div>
            </div>

            <div className="Dob flex w-full">
              <div className="mb-5 w-full">
                <label
                  htmlFor="dob-input"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Date of Birth
                </label>
                <div>
                  <input
                    type="date"
                    id="dob-input"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="Second-row flex">
          <div className="Email w-1/2 pr-4">
              <div className="max-w-sm ">
                <label
                  htmlFor="email-address-icon"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                    <svg
                      className="w-4 h-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 16"
                    >
                      <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                      <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                    </svg>
                  </div>
                  <input
                    type="text"
                    id="email-address-icon"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@abc.com"
                  />
                </div>
              </div>
            </div>

            <div className="Mobile number w-1/2">
              <div className="mb-5">
                <label
                  htmlFor="mobile-number"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Mobile Number
                </label>
                <input
                  type="tel" // Use "tel" type for mobile numbers
                  id="mobile-number"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter your mobile number"
                />
              </div>
            </div>
          </div>

          <div className="Third-row flex">
            <div className="Relation w-1/2 pr-4 ">
            <div className="mb-5">
      <label htmlFor="relation-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Relation *</label>
      <input
        type="text"
        id="relation-input"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Enter your relation"
        required
      />
    </div>
            </div>
          </div>

          <div className="Heading-Contact ">
            <div className="font-bold ">Address for Emergency contact </div>
             </div>

        <div></div>
        </form>

      </div>
    </div>
  );
};

export default PersonalDetails;
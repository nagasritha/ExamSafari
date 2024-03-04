//import React from 'react';

import { useState } from "react";

const EditProfileForm = () => {
  const [overview, setOverview] = useState<boolean>(true);

  const handleToggle = () => {
    setOverview(!overview);

   
  };

  

  return (
    <div className="bg-gray-100 shadow-md rounded p-8  ">
      <div className="text-2xl font-semibold "> Profile</div>
      <div className="flex">
        <div className="font-semibold text-gray-600">Home / </div>
        <div className="text-gray-600 pl-1 font-semibold"> Profile</div>
      </div>
      <div className="flex flex-col gap-6 md:flex-row mt-6">
        <div className="left-div md:w-1/3 w-full shadow-lg rounded-md py-4  justify-center items-center flex flex-col h-full">
          <div className="img">
            <img
              className="w-32 my-4 rounded-full aspect-square"
              src="/images/profile.jpg"
              alt=""
            />
          </div>
          <div className="Name font-semibold text-2xl">Kevin Anderson</div>
          <div className="text-lg">Web Designer</div>
        </div>
        <div className="right-div md:w-2/3 w-full shadow-lg rounded-md px-4">
          <div className="navbar-head flex py-2 gap-4 ">
            <button onClick={handleToggle} className="font-semibold">
              Overview
            </button>

            <button onClick={handleToggle} className="font-semibold"> Edit Profile</button>
          </div>
          <div className="pb-2">
            <hr />
          </div>
{overview? (
          <div className="About-Section " >
            <div className="main-body">
              <div className="text-xl font-semibold">About</div>
              <div className="py-2 text-sm">
                Sunt est soluta temporibus accusantium neque nam maiores cumque
                temporibus. Tempora libero non est unde veniam est qui dolor. Ut
                sunt iure rerum quae quisquam autem eveniet perspiciatis odit.
                Fuga sequi sed ea saepe at unde.
              </div>
              <div className="text-xl font-semibold py-2">Profile Details</div>
              <div className="flex gap-16 pb-4">
                <div className="flex flex-col gap-3 py-2  text-gray-500 font-semibold">
                  <div className="">Full Name</div>
                  <div className="">Job</div>
                  <div className="">Country</div>
                  <div className="">City</div>
                  <div className="">Address</div>
                  <div className="">Phone</div>
                  <div className="">Email</div>
                </div>
                <div className="flex gap-3  flex-col py-2">
                  <div className="">Kevin Anderson</div>
                  <div className="">Web Designer</div>
                  <div className="">India</div>
                  <div>Delhi</div>
                  <div className="">A108 Adam Street, Delhi, NY 535022</div>
                  <div className="">(436) 486-3538 x29071</div>
                  <div className="">k.anderson@example.com</div>
                </div>
              </div>
            </div>
          </div>
          ):(

          <div className="Edit-Profile-Section py-4  ">
            <div className="flex gap-20 ">
              <div className="left-side flex flex-col gap-8 items-center">
                <div className="font-bold  text-gray-700 pt-2">
                  Profile Image{" "}
                </div>
                <div className="font-bold text-gray-700">Full Name</div>
                <div className="font-bold text-gray-700 pt-2">About</div>
                <div className="font-bold text-gray-700 pt-3">Country</div>
                <div className="font-bold text-gray-700 ">City</div>
                <div className="font-bold text-gray-700 ">Address</div>
                <div className="font-bold text-gray-700 pt-2 ">
                  Phone Number
                </div>
                <div className="font-bold text-gray-700 ">Email Address</div>
              </div>
              <div className="right-side flex flex-col gap-4">
                <div className="1st">
                  <div className="max-w-lg mx-auto">
                    <input
                      className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                      aria-describedby="user_avatar_help"
                      id="user_avatar"
                      type="file"
                    />
                  </div>
                </div>

                <div className="2nd">
                  <input
                    type="text"
                    id="base-input"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>

                <div className="3ed">
                  <textarea
                    id="message"
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    
                  ></textarea>
                </div>

                <div className="4th">
                  <input
                    type="text"
                    id="base-input"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>

                <div className="5th">
                  <input
                    type="text"
                    id="base-input"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>

                <div className="6th">
                  <input
                    type="text"
                    id="base-input"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>

                <div className="7th">
                  <input
                    type="text"
                    id="base-input"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>

                <div className="8th">
                  <input
                    type="text"
                    id="base-input"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-center pt-6">
            <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Save Changes</button>
            </div>
          </div>
          )
          }

          
        </div>
      </div>
    </div>
  );
};

export default EditProfileForm;

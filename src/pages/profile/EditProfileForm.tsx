//import React from 'react';

import { useState } from "react";

const EditProfileForm = () => {

    const [overview , setOverview] = useState<boolean>(true) ;

    const handleToggle =()=>{
        setOverview (!overview) }

  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8  ">
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
            <button onClick={handleToggle} className="font-semibold">Overview</button>

            <button className="font-semibold"> Edit Profile</button>
          </div>
          <div className="pb-2">
            <hr />
          </div>

          <div className="About-Section ">
         
          
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

       <div className="Edit-Profile-Section"></div>
      
      </div>
      </div>
    </div>
  );

  
  }
 
;



export default EditProfileForm;

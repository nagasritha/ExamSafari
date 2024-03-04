import React from 'react'

interface OverViewProps{
formData:{
    name: string,
    educationStatus: string,
    about: string,
    phoneNumber: string,
    address: string,
    country: string,
    state: string,
    email: string,
}
}

const OverView:React.FC<OverViewProps> = ({formData})=>{
    const {name,educationStatus,about,phoneNumber,address,country,state,email}=formData
return (
    <div className="main-body">
    <div className="text-xl font-semibold">About</div>
    <div className="py-2 text-sm">
      {about}
    </div>
    <div className="text-xl font-semibold py-2">Profile Details</div>
    <div className="flex gap-16 pb-4">
    <div className="flex flex-col gap-3 py-2  text-gray-500 font-semibold">
        <div className="">Full Name</div>
        <div className="">Education Status</div>
        <div className="">Country</div>
        <div className="">State</div>
        <div className="">Address</div>
        <div className="">Phone</div>
        <div className="">Email</div>
        
    </div>
    <div className="flex gap-3 flex-col py-2">
    <div className="">{name}</div>        
        <div className="">{educationStatus}</div>
        <div className="">{country}</div>
        <div>{state}</div>
        <div className="">{address}</div>
        <div className="">{phoneNumber}</div>
        <div className="">{email}</div>
    </div>
    </div>
   
   
  </div>
)
}
export default OverView
import MainContainer from "./MainContainer"
import ProfileHeader from "./ProfileHeader"
import SideBar from "./SideBar"
import  { useState } from 'react';




 const MyProfile = () => {

  const [selectedButton, setSelectedButton] = useState<string>('profile');

  const handleSidebarClick = (buttonLabel: string) => {
    setSelectedButton(buttonLabel);
  };
  return (
    <div className="flex flex-col">
    <div className="">
      <ProfileHeader/>
    </div>
    <div className="flex  ">
      <div className="md:w-[20%] w-full relative z-2">
      <SideBar  onSelect={handleSidebarClick}/>
      </div>
      <div className="w-full md:w-[80%] relative z-1">
      <MainContainer  selected={selectedButton}/>
      </div>
    </div>
    </div>
  )
}

export default MyProfile

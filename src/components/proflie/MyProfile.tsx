import MainContainer from "./MainContainer"
import ProfileHeader from "./ProfileHeader"
import SideBar from "./SideBar"
import  { useState } from 'react';




 const MyProfile = () => {

  const [selectedButton, setSelectedButton] = useState<string>('Dashboard');

  const handleSidebarClick = (buttonLabel: string) => {
    setSelectedButton(buttonLabel);
  };
  return (
    <div className="flex flex-col">
    <div className="">
      <ProfileHeader selected={selectedButton}/>
    </div>
    <div className="flex">
      <div className="w-[20%]">
      <SideBar  onSelect={handleSidebarClick}/>
      </div>
      <div className="w-[80%]">
      <MainContainer  selected={selectedButton}/>
      </div>
    </div>
    </div>
  )
}

export default MyProfile

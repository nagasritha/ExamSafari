import MainContainer from "./MainContainer"
import ProfileHeader from "./ProfileHeader"
import SideBar from "./SideBar"

 const MyProfile = () => {
  return (
    <div className="flex flex-col">
    <div className="">
      <ProfileHeader/>
    </div>
    <div>
      <SideBar/>
      <MainContainer/>
    </div>
    </div>
  )
}

export default MyProfile

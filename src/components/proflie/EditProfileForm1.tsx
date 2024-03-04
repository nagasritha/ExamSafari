import { useState, useEffect } from "react";
import OverView from "./OverView";
import ProfileForm from "./ProfileForm";
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import Cookies from 'js-cookie';

interface FormData {
  imageUrl: string;
  name: string;
  educationStatus: string;
  about: string;
  phoneNumber: string;
  address: string;
  country: string;
  state: string;
  email: string;
  instaProfile: string;
  twitterProfile: string;
  facebookProfile: string;
  linkedinProfile: string;
}

const EditProfileForm: React.FC = () => {
  const token = Cookies.get('jwt_token');
  const [tab, setTab] = useState<string>('overView');
  const [formData, setFormData] = useState<FormData>({
    imageUrl: "https://examsafaribackend.onrender.com/uploads/3dof.PNG",
    name: "Kevin Anderson",
    educationStatus: "degree",
    about: "Sunt est soluta temporibus accusantium neque nam maiores cumque temporibus. Tempora libero non est unde veniam est qui dolor. Ut sunt iure rerum quae quisquam autem eveniet perspiciatis odit. Fuga sequi sed ea saepe at unde.",
    phoneNumber: "6565656565",
    address: "A108 Adam Street, New York, NY 535022",
    country: "India",
    state: "AP",
    email: "k.anderson@example.com",
    instaProfile: "https://instagram.com/#",
    twitterProfile: "https://twitter.com/#",
    facebookProfile: "https://facebook.com/#",
    linkedinProfile: "https://linkedin.com/#"
  });

  const handleToggle = (tab: string) => {
    setTab(tab);
    if(tab==="overView"){
      fetchProfileData();
    }
  };

  const { imageUrl, name, educationStatus, linkedinProfile, instaProfile, facebookProfile, twitterProfile } = formData;

  const fetchProfileData = async () => {
    try {
      const response = await fetch("https://example-na5m.onrender.com/api/eachProfile", {
        method: "GET",
        headers: {
          "Authorization": `Bearer ${token}`
        }
      });
      if (response.ok) {
        const data = await response.json();
        // Update formData only if fetched data is not empty
        if (Object.keys(data).length !== 0){
          const {UserDetails} = data;
          const UserProfiles =UserDetails
          setFormData({
            imageUrl: UserProfiles.image_url,
    name: UserProfiles.name,
    educationStatus: UserProfiles.education_status,
    about: UserProfiles.about,
    phoneNumber: UserProfiles.phone_number,
    address: UserProfiles.address,
    country: UserProfiles.country,
    state: UserProfiles.state,
    email: UserProfiles.email,
    instaProfile: UserProfiles.insta_profile,
    twitterProfile: UserProfiles.twitter_profile,
    facebookProfile: UserProfiles.facebook_profile,
    linkedinProfile: UserProfiles.linkedin_profile,
          })
        }
      } else {
        console.error("Failed to fetch profile data");
      }
    } catch (error) {
      console.error("Error fetching profile data:", error);
    }
  };

  useEffect(() => {
    // Fetch profile data when the page loads
    fetchProfileData();
  }, []); // Empty dependency array ensures it only runs once when the component mounts

  useEffect(() => {
    // Fetch profile data again when the "Overview" tab is triggered
    if (tab === "overView") {
      fetchProfileData();
    }
  }, [tab]); // Dependency on tab state

  const tabContent = () => {
    switch (tab) {
      case "overView":
        return <OverView formData={formData} />;
      case "editProfile":
        return <ProfileForm />;
      default:
        return null;
    }
  };

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
              src={imageUrl}
              alt='profile'
            />
          </div>
          <div className="Name font-semibold text-2xl">{name}</div>
          <div className="text-lg">{educationStatus}</div>
          <div className='flex'>
            <a href={twitterProfile} className='p-3'><FaTwitter /></a>
            <a href={facebookProfile} className='p-3'><FaFacebook /></a>
            <a href={instaProfile} className='p-3'><FaInstagram /></a>
            <a href={linkedinProfile} className='p-3'><FaLinkedin /></a>
          </div>

        </div>
        <div className="right-div md:w-2/3 w-full shadow-lg rounded-md px-4">

          <div className="navbar-head flex py-2 gap-4 ">
            <button onClick={() => handleToggle('overView')} className="font-semibold">Overview</button>
            <button className="font-semibold" onClick={() => handleToggle('editProfile')}> Edit Profile</button>
          </div>
          <div className="pb-2">
            <hr />
          </div>

          <div className="About-Section ">
            {tabContent()}
          </div>

          <div className="Edit-Profile-Section"></div>

        </div>
      </div>
    </div>
  );

}

export default EditProfileForm;
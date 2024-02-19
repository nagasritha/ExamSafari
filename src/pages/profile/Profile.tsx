import React, { useState} from "react";
import Profilesidebar from "./Profilesidebar";
import Cookies from 'js-cookie';
import Dashboard from "./Accordian"
import {Navigate} from 'react-router-dom'

function Profile() { // Initialize useHistory hook

  const [profileData, setProfileData] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    history: [
      {
        id: 1,
        date: "2022-01-01",
        activity: "Booking #123",
        status: "Completed",
      },
      {
        id: 2,
        date: "2022-02-01",
        activity: "Booking #456",
        status: "Pending",
      },
      // Add more history entries as needed
    ],
    profilePhoto: "images/logo1.jpeg",
  });

  const [userName, setUserName] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(event.target.value);
  };

  const handleEditProfile = () => {
    setEditMode(true);
  };

  const handleSaveProfile = () => {
    setProfileData({ ...profileData, name: userName });
    setEditMode(false);
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleUploadPhoto = () => {
    if (selectedFile) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfileData({
          ...profileData,
          profilePhoto: e.target?.result as string,
        });
      };
      reader.readAsDataURL(selectedFile);
    }
  };

 if(Cookies.get('jwt_token')===undefined){
    return <Navigate to='/login' replace={true}/>
 }
  return (
    <div className="container mx-auto p-8 flex">
      <Profilesidebar

  profileData={profileData}
  editMode={editMode}
  userName={userName}
  handleUploadPhoto={handleUploadPhoto}
  handleFileChange={handleFileChange}
  handleInputChange={handleInputChange}
  handleEditProfile={handleEditProfile}
  handleSaveProfile={handleSaveProfile}
/>
      <div className="w-full z-50 ml-64">
        <Dashboard />
      </div>
    </div>
  );
}

export default Profile;

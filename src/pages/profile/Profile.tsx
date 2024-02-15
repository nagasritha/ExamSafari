import React, { useState, useEffect } from "react";
import ProfileSidebar from "./Profilesidebar";
import ProfileContent from "./Profilecontent";
import Accordian from "./Accordian";
import Cookies from 'js-cookie';
import {useNavigate} from 'react-router-dom'

function Profile() { // Initialize useHistory hook
  const jwtToken = Cookies.get('jwt_token');
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
const navigate=useNavigate();
  const handleLogout = () => {
    console.log("Logging out");
    Cookies.remove('jwt_token');
    navigate('/login'); // Redirect to login page
  };

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

  useEffect(() => {
    if (!jwtToken) {
      // If JWT token doesn't exist, navigate to login page
      window.location.href='/login';
    }
  }, [jwtToken]);

  return (
    <div className="container mx-auto p-8 flex">
      <ProfileSidebar
  profileData={profileData}
  editMode={editMode}
  userName={userName}
  handleUploadPhoto={handleUploadPhoto}
  handleFileChange={handleFileChange}
  handleInputChange={handleInputChange}
  handleEditProfile={handleEditProfile}
  handleSaveProfile={handleSaveProfile}
  handleLogout={handleLogout}
/>
      <div className="w-full z-50">
        <ProfileContent  />
        <div className="ml-64"><Accordian /></div>
      </div>
    </div>
  );
}

export default Profile;

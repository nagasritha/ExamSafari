import React, { useState } from "react";
import ProfileSidebar from "./Profilesidebar";
import EditProfileForm from "./EditProfileForm";
import Layout from "@/components/layout/Layout";

function EditProfile() {

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
        profilePhoto: "public/images/logo1.jpeg",
    });

    const [userName, setUserName] = useState("");
    const [editMode, setEditMode] = useState(false);
    const [selectedFile, setSelectedFile] = useState<File | null>(null);

    const handleLogout = () => {
        console.log("Logging out");
        window.location.href = "/login";
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

    const handleDashboard = () => {

    }

    return (
<<<<<<< HEAD
        <div className="container mx-auto p-8 pb-0 flex">
=======
       <Layout>
        <div className="container mx-auto p-8 flex">
>>>>>>> 37b9988599042ae38f6362ab0110f3270a9f4fa6
            <ProfileSidebar
                profileData={profileData}
                editMode={editMode}
                userName={userName}
                handleUploadPhoto={handleUploadPhoto}
                handleFileChange={handleFileChange}
                handleInputChange={handleInputChange}
                handleEditProfile={handleEditProfile}
                handleDashboard={handleDashboard}
                handleSaveProfile={handleSaveProfile}
                handleLogout={handleLogout} /* Include handleLogout prop */
            />
            <div className="w-full z-50 ml-64 mt-11">
                <EditProfileForm />
            </div>
        </div>
        </Layout> 
    );
}

export default EditProfile;
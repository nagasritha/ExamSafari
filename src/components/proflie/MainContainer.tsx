import React from 'react';
import BookingPage from "../booking/BookingPage"; // Assuming BookingPage is a component

import EditProfileForm from '@/components/proflie/EditProfileForm1';
import HistoryPage from "@/components/proflie/HistoryPage"

interface MainContainerProps {
  selected: string;
}

const MainContainer: React.FC<MainContainerProps> = ({ selected }) => {
  const renderContent = () => {
    switch (selected) {
      case 'Dashboard':
        return (
          <div className="dashboard">
            Dashboard Content
          </div>
        );
      case 'Profile':
        return (
          <div className="">
           <EditProfileForm/>
          </div>
        );
      case 'Booking':
        return (
          <div className="booking">
            <BookingPage />
          </div>
        );
      case 'History':
        return (
          <div className="history">
            <HistoryPage/>
          </div>
        );
      default:
        return null;
    }
  };

  return <div className="main-container bg-gray-100">{renderContent()}</div>;
};

export default MainContainer;
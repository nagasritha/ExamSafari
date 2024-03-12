import React from 'react';
import BookingPage from "../booking/BookingPage"; // Assuming BookingPage is a component

import EditProfileForm1 from '@/components/proflie/EditProfileForm1';
import HistoryPage from "@/components/proflie/HistoryPage"
import Dashboard from './Dashboard';
import BookingHistory from './bookingHistory';

interface MainContainerProps {
  selected: string;
}

const MainContainer: React.FC<MainContainerProps> = ({ selected }) => {
  const renderContent = () => {
    switch (selected) {
      case 'Dashboard':
        return (
          <div className="Dashboard">
            <Dashboard/>

          </div>
        );
      case 'profile':
        return (
          <div className="">
           <EditProfileForm1/>
          </div>
        );
      case 'Booking':
        return (
          <div className="booking">
            <BookingHistory />
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

  return <div className="main-container bg-gray-100" style={{marginTop:'11vh'}}>{renderContent()}</div>;
};

export default MainContainer;
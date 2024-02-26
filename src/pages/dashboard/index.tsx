import React from "react";
import "./index.css";
import Sidebar from "@/components/DashboardComponents/Sidebar/sidebar";
import DashboardNavbar from "@/components/DashboardComponents/dashboardNavbar";
import Widget from "@/components/Widget";
import Featured from "@/components/DashboardComponents/feautured";
import Chart from "@/components/DashboardComponents/Charts";
import List from "@/components/DashboardComponents/Table";

const AdminDashboard: React.FC = () => {
    return (
      <div>
          <DashboardNavbar/>
          <div className="home">
           <div className="hidden lg:flex">
           <Sidebar />
           </div>
            <div className="homeContainer">
                
                <div className="widgets-container w-full md:w-4/5">
                    <Widget type="user" />
                    <Widget type="order" />
                    <Widget type="earning" />
                    <Widget type="balance" />
                    
                </div>
                <div className="charts flex-col md:flex-row">
                    <div className="w-full md:w-1/2">
                    <Featured />
                    </div>
                    <div className='w-full md:w-1/2'>
                    <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} />
                    </div>
                </div>
                <div className="listContainer">
                    <div className="listTitle">Updates on Exam Cities</div>
                    <List />
                </div>
            </div>
        </div>
      </div>
    );
};

export default AdminDashboard;

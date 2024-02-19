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
        <div className="home">
            <Sidebar />
            <div className="homeContainer">
                <DashboardNavbar />
                <div className="widgets">
                    <Widget type="user" />
                    <Widget type="order" />
                    <Widget type="earning" />
                    <Widget type="balance" />
                </div>
                <div className="charts">
                    <Featured />
                    <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} />
                </div>
                <div className="listContainer">
                    <div className="listTitle">Updates on Exam Cities</div>
                    <List />
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;

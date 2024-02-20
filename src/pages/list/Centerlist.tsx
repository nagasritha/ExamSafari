import React from "react";
import "./centerlist.scss";
import Sidebar from "../../components/DashboardComponents/Sidebar/index";
import Navbar from "../../components/DashboardComponents/dashboardNavbar/index";
import CenterDatatable from "../../components/DashboardComponents/datatable/CenterDatatable";

const CenterList: React.FC = () => {
    return (
        <div className="list">
            <Sidebar />
            <div className="listContainer">
                <Navbar />
                <CenterDatatable />
            </div>
        </div>
    );
}

export default CenterList;

import React from "react";
import "./citylist.scss";
import Sidebar from "../../components/DashboardComponents/Sidebar/index";
import Navbar from "../../components/DashboardComponents/dashboardNavbar/index";
import CityDatatable from "../../components/DashboardComponents/datatable/CityDatatable";

const CityList: React.FC = () => {
    return (
        <div className="list">
            <Sidebar />
            <div className="listContainer">
                <Navbar />
                <CityDatatable />
            </div>
        </div>
    );
}

export default CityList;

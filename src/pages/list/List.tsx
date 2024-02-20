import React from "react";
import "./list.scss";
import Sidebar from "../../components/DashboardComponents/Sidebar/index";
import Navbar from "../../components/DashboardComponents/dashboardNavbar/index";
import Datatable from "../../components/DashboardComponents/datatable/Datatable";

const List: React.FC = () => {
    return (
        <div className="list">
            <Sidebar />
            <div className="listContainer">
                <Navbar />
                <Datatable />
            </div>
        </div>
    );
}

export default List;

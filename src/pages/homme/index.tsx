import React from "react";
import "./home.scss";
import Sidebar from "../../components/DashboardComponents/Sidebar/index";
import Navbar from "../../components/DashboardComponents/Sidebar/index";
import Widget from "../../components/DashboardComponents/Widget/index";
import Featured from "../../components/DashboardComponents/feautured/index";
import Chart from "../../components/DashboardComponents/Charts/index";
import List from "../../components/DashboardComponents/Table/index";


const Home: React.FC = () => {
    return (
        <div className="home">
            <Sidebar />
            <div className="homeContainer">
                <Navbar />
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

export default Home;

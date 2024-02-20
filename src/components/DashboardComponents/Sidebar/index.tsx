import React, { useContext } from "react";
import "./index.scss";
import DashboardIcon from '@mui/icons-material/Dashboard';

import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import MiscellaneousServicesOutlinedIcon from '@mui/icons-material/MiscellaneousServicesOutlined';
import LocationCityOutlinedIcon from '@mui/icons-material/LocationCityOutlined';
import ApartmentOutlinedIcon from '@mui/icons-material/ApartmentOutlined';
import AssessmentIcon from '@mui/icons-material/Assessment';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SystemSecurityUpdateGoodSharpIcon from '@mui/icons-material/SystemSecurityUpdateGoodSharp';
import EventIcon from '@mui/icons-material/Event';
import SettingsIcon from '@mui/icons-material/Settings';
import Person2Icon from '@mui/icons-material/Person2';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { Link } from "react-router-dom";
import { DarkModeContext } from "@/context/darkModeContext";

const Sidebar: React.FC = () => {
    const { dispatch } = useContext(DarkModeContext);

    return (
        <div className="sidebar">
            <div className="top">
                <Link to="/" style={{ textDecoration: "none" }}>
                    <span className="logo">examsafari</span>
                </Link>
            </div>
            <hr />
            <div className="center">
                <ul>
                    <p className="title">MAIN</p>
                    <li>
                        <DashboardIcon className="icon" />
                        <span>Dashboard</span>
                    </li>
                    <p className="title">LISTS</p>
                    <Link to="/users" style={{ textDecoration: "none" }}>
                        <li>
                            <AccountCircleOutlinedIcon className="icon" />
                            <span>Users </span>
                        </li>
                    </Link>
                    <Link to="/services" style={{ textDecoration: "none" }}>
                        <li>
                            <MiscellaneousServicesOutlinedIcon className="icon" />
                            <span>Service</span>
                        </li>
                    </Link>
                    <Link to="/examcity" style={{ textDecoration: "none" }}>
                        <li>
                            <LocationCityOutlinedIcon className="icon" />
                            <span>Exam Cities</span>
                        </li>
                    </Link>
                    <Link to="/examcitycenter" style={{ textDecoration: "none" }}>
                        <li>
                            <ApartmentOutlinedIcon className="icon" />
                            <span>Exam City Centers</span>
                        </li>
                    </Link>
                    <p className="title">USEFUL</p>
                    <li>
                        <AssessmentIcon className="icon" />
                        <span>Stats</span>
                    </li>
                    <li>
                        <NotificationsIcon className="icon" />
                        <span>Notifications</span>
                    </li>
                    <p className="title">SERVICE</p>
                    <li>
                        <SystemSecurityUpdateGoodSharpIcon className="icon" />
                        <span>System Health</span>
                    </li>
                    <li>
                        <EventIcon className="icon" />
                        <span>Logs</span>
                    </li>
                    <li>
                        <SettingsIcon className="icon" />
                        <span>Settings</span>
                    </li>
                    <p className="title">USER</p>
                    <li>
                        <Person2Icon className="icon" />
                        <span>Profile</span>
                    </li>
                    <li>
                        <LogoutOutlinedIcon className="icon" />
                        <span>Logout</span>
                    </li>
                </ul>
            </div>
            <div className="bottom">
                <div className="colorOption" onClick={() => dispatch({ type: "LIGHT" })}></div>
                <div className="colorOption" onClick={() => dispatch({ type: "DARK" })}></div>
            </div>
        </div>
    );
};

export default Sidebar;

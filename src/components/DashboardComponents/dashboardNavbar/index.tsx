import React, { useContext,useState } from "react";
import "./index.scss";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import { DarkModeContext } from "@/context/darkModeContext";
import Sidebar from "../Sidebar/sidebar";

const DashboardNavbar: React.FC = () => {
    const { dispatch } = useContext(DarkModeContext);
    const [sidebar,setSideBar]=useState<boolean>(false);
    
    

    return (
        <div className="navbar">
            <div className="wrapper">
                <div className="item" onClick={()=>setSideBar(!sidebar)} >
                    <ListOutlinedIcon className="icon flex md:hidden" />
                   
                </div>
                <div className="search">
                    <input type="text" placeholder="Search..." />
                    <SearchOutlinedIcon />
                </div>
                <div className="items">
                    <div className="item">
                        <LanguageOutlinedIcon className="icon" />
                        English
                    </div>
                    <div className="item" onClick={() => dispatch({ type: "TOGGLE" })}>
                        <DarkModeOutlinedIcon className="icon" />
                    </div>
                    <div className="item">
                        <FullscreenExitOutlinedIcon className="icon" />
                    </div>
                    <div className="item">
                        <NotificationsNoneOutlinedIcon className="icon" />
                        <div className="counter">1</div>
                    </div>
                    <div className="item">
                        <ChatBubbleOutlineOutlinedIcon className="icon" />
                        <div className="counter">2</div>
                    </div>
                    <div className="item">
                        <ListOutlinedIcon className="icon" />
                    </div>
                    <div className="item">
                        <img src="/images/logo.png" alt="" className="avatar" />
                    </div>
                    {sidebar && <div className='top-0 left-0'><Sidebar/></div>}
                </div>
            </div>
        </div>
    );
};

export default DashboardNavbar;

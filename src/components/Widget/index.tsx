import React from "react";
import "./index.css";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";

interface WidgetProps {
    type: string;
}

const Widget: React.FC<WidgetProps> = ({ type }) => {

    let data: {
        title: string;
        isMoney: boolean;
        link: string;
        icon: JSX.Element;
    }={
        title: "",
        isMoney: false,
        link: "",
        icon: <></>,
    };;

    //temporary
    const amount: number = 100;
    const diff: number = 20;

    switch (type) {
        case "user":
            data = {
                title: "USERS",
                isMoney: false,
                link: "See all users",
                icon: <PersonOutlinedIcon className="icon" style={{ color: "crimson", backgroundColor: "rgba(255, 0, 0, 0.2)" }} />,
            };
            break;


        case "order":
            data = {
                title: "SERVICES",
                isMoney: false,
                link: "View all services",
                icon: <ShoppingCartOutlinedIcon className="icon" style={{ color: "goldenrod", backgroundColor: "rgba(218, 165, 32, 0.2)" }} />,
            };
            break;

        case "earning":
            data = {
                title: "EARNING",
                isMoney: true,
                link: "View net earnings",
                icon: <MonetizationOnOutlinedIcon className="icon" style={{ color: "green", backgroundColor: "rgba(0, 128, 0, 0.2)" }} />,
            };
            break;

        case "balance":
            data = {
                title: "BALANCE",
                isMoney: true,
                link: "See details",
                icon: <AccountBalanceWalletOutlinedIcon className="icon" style={{ color: "purple", backgroundColor: "rgba(128, 0, 128, 0.2)" }} />,
            };
            break;


        default:
            break;

    }

    return (
        <div className="widget">
            <div className="flex flex-col justify-between">
                <span className="title">{data.title}</span>
                <span className="counter">{data.isMoney && "$"} {amount}</span>
                <span className="link">{data.link}</span>
            </div>
            <div className="flex flex-col justify-between items-end">
                <div className="percentage positive">
                    <KeyboardArrowUpIcon />
                    {diff} %
                </div>
                <div>{data.icon}</div>
            
            </div>
        </div>
    )
}

export default Widget;

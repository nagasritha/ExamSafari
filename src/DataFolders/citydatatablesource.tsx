import React from "react";
import "../components/DashboardComponents/datatable/citydatatable.scss";
import { Link } from "react-router-dom";

interface CityRow {
    id: number;
    cityname: string;
    img: string;
    status: string;
}

interface CityColumns {
    field: string;
    headerName: string;
    width: number;
    renderCell?: (params: any) => JSX.Element;
}

export const cityColumns: CityColumns[] = [
    { field: "id", headerName: "ID", width: 70 },
    {
        field: "city",
        headerName: "City",
        width: 230,
        renderCell: (params: any) => {
            return (
                <div className="cellWithImg">
                    <img className="cellImg" src={params.row.img} alt="avatar" />
                    {params.row.cityname}
                </div>
            );
        },
    },
    {
        field: "service",
        headerName: "Service",
        width: 400,
        renderCell: (params: any) => {
            return (
                <select value={params.row.service} className="serviceSelect" disabled>
                    <option value="Service A">Travel Service</option>
                    <option value="Service B">Accommodation Service</option>
                    <option value="Service C">Travel + Accommodation Service</option>
                </select>

            );
        },
    },
    {
        field: "status",
        headerName: "Status",
        width: 200,
        renderCell: (params: any) => {
            return (
                <div className={`cellWithStatus ${params.row.status}`}>{params.row.status}</div>
            );
        },
    },
];

// temporary data
export const cityRows: CityRow[] = [
    {
        id: 1,
        cityname: "Allahabad",
        img: "/images/allahabad1.jpeg",
        status: "active",
    },
    {
        id: 2,
        cityname: "Kanpur",
        img: "/images/k.jpg",
        status: "pending",
    },
    {
        id: 3,
        cityname: "Lucknow",
        img: "/images/lucknow1.jpeg",
        status: "passive",
    },
];

const CityDatatable: React.FC = () => {
    return (
        <div className="citydatatable">
            <div className="citydatatableTitle">
                Add New Exam City
                <Link to="/examcity/new" className="link">
                    {" "}
                    Add New{" "}
                </Link>
            </div>
            {/* Render your DataGrid here */}
        </div>
    );
};

export default CityDatatable;

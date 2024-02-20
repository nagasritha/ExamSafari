import React from "react";
import "./citydatatable.scss";
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { cityColumns, cityRows } from "../../../DataFolders/citydatatablesource";
import { Link } from 'react-router-dom';

const CityDatatable: React.FC = () => {
  const actionColumn: GridColDef = {
    field: "action",
    headerName: "Action",
    width: 200,
    renderCell: () => {
      return (
        <div className="cellAction">
          <Link to="/examcity/test" style={{ textDecoration: "none" }}>
            <div className="viewButton">View</div>
          </Link>
          <div className="deleteButton">Delete</div>
        </div>
      );
    }
  };

  return (
    <div className="citydatatable">
      <div className="citydatatableTitle">
        Add New Exam City
        <Link to="/examcity/new" className="link"> Add New </Link>
      </div>
      <DataGrid
        rows={cityRows}
        columns={[...cityColumns, actionColumn]}
        // pagination={{ pageSize: 9 }}
        pageSizeOptions={[10, 10]}
        checkboxSelection
      />
    </div>
  );
};

export default CityDatatable;

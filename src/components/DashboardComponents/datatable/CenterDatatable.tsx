import React from "react";
import "./centerdatatable.scss";
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { centerColumns, centerRows } from "../../../DataFolders/centerdatatablesource";
import { Link } from 'react-router-dom';

const CenterDatatable: React.FC = () => {
    const actionColumn: GridColDef[] = [
        {
            field: "action",
            headerName: "Action",
            width: 200,
            renderCell: () => {
                return (
                    <div className="cellAction">
                        <Link to="/examcitycenter/test" style={{ textDecoration: "none" }}>
                            <div className="viewButton">View</div>
                        </Link>
                        <div className="deleteButton">Delete</div>
                    </div>
                );
            }
        }
    ];

    return (
        <div className="centerdatatable">
            <div className="centerdatatableTitle">
                Add New Exam Center
                <Link to="/examcitycenter/new" className="link"> Add New </Link>
            </div>
            <DataGrid
                className="datagrid"
                rows={centerRows}
                columns={[...centerColumns, ...actionColumn]}
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 9 },
                    },
                }}
                pageSizeOptions={[10, 10]}
                checkboxSelection
            />
        </div>
    );
};

export default CenterDatatable;

import React from "react";
import "./index.scss";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

interface Row {
    id: number;
    exam_city: string;
    img: string;
    city_centre: string;
    booking_from: string;
    room_options: number;
    amenities: string;
    amount: number;
    payment: string;
    status: string;
}

const List: React.FC = () => {
    const rows: Row[] = [
        {
            id: 1143155,
            exam_city: "Allahabad",
            img: "/images/HotelImage1.jpg",
            city_centre: "Arbour House",
            booking_from: "1 March 2024",
            room_options: 15,
            amenities: "Recycling, Refreshment Area",
            amount: 785,
            payment: "Cash On Delivery",
            status: "Approved",
        },
        // Other rows...
    ];

    return (
        <TableContainer component={Paper} className="table">
            <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        <TableCell className="tableCell">City ID</TableCell>
                        <TableCell className="tableCell">Exam City</TableCell>
                        <TableCell className="tableCell">City Centre</TableCell>
                        <TableCell className="tableCell">Booking From</TableCell>
                        <TableCell className="tableCell">Room Options</TableCell>
                        <TableCell className="tableCell">Amenities</TableCell>
                        <TableCell className="tableCell">Amount</TableCell>
                        <TableCell className="tableCell">Payment</TableCell>
                        <TableCell className="tableCell">Status</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.id}>
                            <TableCell>{row.id}</TableCell>
                            <TableCell className="tableCell">{row.exam_city}</TableCell>
                            <TableCell className="tableCell">
                                <div className="cellWrapper">
                                    <img src={row.img} alt="" className="image" />
                                    {row.city_centre}
                                </div>
                            </TableCell>
                            <TableCell className="tableCell">{row.booking_from}</TableCell>
                            <TableCell className="tableCell">{row.room_options}</TableCell>
                            <TableCell className="tableCell">{row.amenities}</TableCell>
                            <TableCell className="tableCell">{row.amount}</TableCell>
                            <TableCell className="tableCell">{row.payment}</TableCell>
                            <TableCell className="tableCell">
                                <span className={`status ${row.status}`}>{row.status}</span>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default List;

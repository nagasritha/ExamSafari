interface Row {
    id: number;
    centername: string;
    img: string;
    amenities: string;
    room: number;
    status: string;
}


export const centerColumns = [
    { field: "id", headerName: "ID", width: 70 },
    {
        field: "center",
        headerName: "Center",
        width: 230,
        renderCell: (params: { row: Row }) => {
            return (
                <div className="cellWithImg">
                    <img className="cellImg" src={params.row.img} alt="avatar" />
                    {params.row.centername}
                </div>
            );
        },
    },
    {
        field: "amenities",
        headerName: "Amenities",
        width: 230,
    },
    {
        field: "room",
        headerName: "Room",
        width: 200,
    },
    {
        field: "status",
        headerName: "Status",
        width: 200,
        renderCell: (params: { row: Row }) => {
            return (
                <div className={`cellWithStatus ${params.row.status}`}>{params.row.status}</div>
            );
        },
    },
];

// temporary data
export const centerRows: Row[] = [
    {
        id: 1,
        centername: "Arbour House",
        img: "/images/HotelImage1.jpg",
        amenities: "Swimming Pool, Gym",
        room: 4,
        status: "active",
    },
    {
        id: 2,
        centername: "Chapter Kings Cross",
        img: "/images/HotelImage2.jpg",
        amenities: "Guest House, Gym",
        room: 10,
        status: "pending",
    },
    {
        id: 3,
        centername: "Britannia South Bank",
        img: "/images/HotelImage3.jpg",
        amenities: "Cinema, Laundry",
        room: 8,
        status: "passive",
    },
];

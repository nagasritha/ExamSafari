import React from "react";

interface User {
  id: number;
  username: string;
  img: string;
  status: string;
  email: string;
  age: number;
}

interface UserColumns {
  field: string;
  headerName: string;
  width: number;
  renderCell?: (params: { row: User }) => JSX.Element;
}

export const userColumns: UserColumns[] = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "User",
    width: 230,
    renderCell: (params) => (
      <div className="cellWithImg">
        <img className="cellImg" src={params.row.img} alt="avatar" />
        {params.row.username}
      </div>
    ),
  },
  { field: "email", headerName: "Email", width: 230 },
  { field: "age", headerName: "Age", width: 200 },
  {
    field: "status",
    headerName: "Status",
    width: 200,
    renderCell: (params) => (
      <div className={`cellWithStatus ${params.row.status}`}>
        {params.row.status}
      </div>
    ),
  },
];

export const userRows: User[] = [
  {
    id: 1,
    username: "Cristiano",
    img: "/images/one.png",
    status: "active",
    email: "cristiano@gmail.com",
    age: 39,
  },
  {
    id: 2,
    username: "Lionel",
    img: "/images/two.png",
    status: "passive",
    email: "lionel@gmail.com",
    age: 35,
  },
  {
    id: 3,
    username: "Neymar",
    img: "/images/three.png",
    status: "pending",
    email: "neymar@gmail.com",
    age: 31,
  },
  {
    id: 4,
    username: "Modric",
    img: "/images/four.png",
    status: "active",
    email: "modric@gmail.com",
    age: 34,
  },
  {
    id: 5,
    username: "Rama",
    img: "/images/five.png",
    status: "active",
    email: "vini@gmail.com",
    age: 23,
  },
  {
    id: 6,
    username: "Gita",
    img: "/images/six.png",
    status: "passive",
    email: "kroos@gmail.com",
    age: 35,
  },
  {
    id: 7,
    username: "Sita",
    img: "/images/seven.png",
    status: "passive",
    email: "bellingham@gmail.com",
    age: 20,
  },
  {
    id: 8,
    username: "Ibrahimovic",
    img: "/images/eight.png",
    status: "pending",
    email: "ibrahimovic@gmail.com",
    age: 40,
  },
  {
    id: 9,
    username: "Mbappe",
    img: "/images/nine.png",
    status: "pending",
    email: "mbappe@gmail.com",
    age: 23,
  },
  {
    id: 10,
    username: "Halaand",
    img: "/images/ten.png",
    status: "active",
    email: "halaand@gmail.com",
    age: 22,
  },
];

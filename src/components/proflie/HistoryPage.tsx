//import React from 'react';



const BookingHistory = () => {
    const bookings = [
        {
            date: "2024-02-15",
            time: "10:00 AM",
            vehicle: "Toyota Camry",
            charges: "$60",
            kilometers: "120"
        },
        {
            date: "2024-02-14",
            time: "9:30 AM",
            vehicle: "Honda Civic",
            charges: "$55",
            kilometers: "110"
        },
        {
            date: "2024-02-13",
            time: "11:15 AM",
            vehicle: "Ford Mustang",
            charges: "$70",
            kilometers: "140"
        },
        {
            date: "2024-02-12",
            time: "10:45 AM",
            vehicle: "Tesla Model S",
            charges: "$100",
            kilometers: "200"
        }
    ];
    return (
        
        <div className="bg-gray-100 h-screen  rounded px-8 pt-6 pb-8 mb-4">
            <h2 className="text-xl font-semibold mb-4">Booking History</h2>
            <div className="overflow-x-auto">
                <table className="table-auto w-full">
                    <thead>
                        <tr>
                            <th className="px-4 py-2">Date</th>
                            <th className="px-4 py-2">Time</th>
                            <th className="px-4 py-2">Vehicle</th>
                            <th className="px-4 py-2">Charges</th>
                            <th className="px-4 py-2">Kilometers</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bookings.map((booking, index) => (
                            <tr key={index}>
                                <td className="border px-4 py-2">{booking.date}</td>
                                <td className="border px-4 py-2">{booking.time}</td>
                                <td className="border px-4 py-2">{booking.vehicle}</td>
                                <td className="border px-4 py-2">{booking.charges}</td>
                                <td className="border px-4 py-2">{booking.kilometers}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
        
    );
}

export default BookingHistory;

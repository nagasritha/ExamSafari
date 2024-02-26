/* eslint-disable @typescript-eslint/no-explicit-any */
//import React from 'react';
import Layout from "@/components/layout/Layout";
const BookingCheck = ({ bookingDetails }: { bookingDetails: any }) => {
    return (
        <Layout>
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <h2 className="text-xl font-semibold mb-4">Confirm Booking Details</h2>
            <div className="mb-4">
                <p className="text-gray-700 text-base">
                    <span className="font-bold">Date:</span> {bookingDetails.date}
                </p>
                <p className="text-gray-700 text-base">
                    <span className="font-bold">Time:</span> {bookingDetails.time}
                </p>
                <p className="text-gray-700 text-base">
                    <span className="font-bold">Source:</span> {bookingDetails.source}
                </p>
                <p className="text-gray-700 text-base">
                    <span className="font-bold">Destination:</span> {bookingDetails.destination}
                </p>
                <p className="text-gray-700 text-base">
                    <span className="font-bold">Vehicle:</span> {bookingDetails.vehicle}
                </p>
            </div>
        </div>
        </Layout>
    );
}

export default BookingCheck;

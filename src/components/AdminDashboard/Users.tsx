import React from 'react';

// Sample data in JSON format
const contacts = [
    {
        name: "John Doe",
        city: "Mumbai",
        phoneNumber: "+91 9876543210",
        emailAddress: "john.doe@example.com"
    },
    {
        name: "Jane Smith",
        city: "Delhi",
        phoneNumber: "+91 1234567890",
        emailAddress: "jane.smith@example.com"
    },
    {
        name: "Alice Johnson",
        city: "Bangalore",
        phoneNumber: "+91 7890123456",
        emailAddress: "alice.johnson@example.com"
    },
    {
        name: "Bob Brown",
        city: "Chennai",
        phoneNumber: "+91 2345678901",
        emailAddress: "bob.brown@example.com"
    },
    {
        name: "Eve Wilson",
        city: "Kolkata",
        phoneNumber: "+91 8765432109",
        emailAddress: "eve.wilson@example.com"
    }
];

const Users: React.FC = () => {
    return (
        <div className='flex flex-col gap-4 p-4'>
            <div className='font-bold text-xl'>
                User Data
            </div>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            City
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Phone Number
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Email Address
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {contacts.map((contact, index) => (
                        <tr key={index} className={`${index % 2 === 0 ? 'even:bg-gray-50 even:dark:bg-gray-800' : 'odd:bg-white odd:dark:bg-gray-900'} border-b dark:border-gray-700`}>
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {contact.name}
                            </th>
                            <td className="px-6 py-4">
                                {contact.city}
                            </td>
                            <td className="px-6 py-4">
                                {contact.phoneNumber}
                            </td>
                            <td className="px-6 py-4">
                                {contact.emailAddress}
                            </td>
                            <td className="px-6 py-4">
                                <button className="font-medium text-blue-600 dark:text-blue-500 hover:underline">more</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        </div>
    );
}

export default Users;

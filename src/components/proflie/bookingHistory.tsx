import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import Loading from '../Loading/loading';
import Card from './bookingCard';
import NewCard from './NewCard';

const BookingHistory: React.FC = () => {
    const [history, setHistory] = useState<any>({});
    const [loader, setLoader] = useState<boolean>(false);

    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        const token = Cookies.get("jwt_token");
        console.log("called");
        setLoader(true);
        try {
            const response = await fetch('https://example-na5m.onrender.com/api/user-history', {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${token}`, // Add the authorization header
                }
            });
            if (response.ok) {
                const jsonData = await response.json();
                console.log(jsonData);
                setHistory(jsonData.Enquire);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            setLoader(false);
        }
    };
    return (
        <div className='p-5 bg-white'>
            {loader && <Loading />}
            <Card history={history}/>
            <div className='text-center w-full'>
                <NewCard history={history}/>
            </div>
        </div>
    );
};

export default BookingHistory;

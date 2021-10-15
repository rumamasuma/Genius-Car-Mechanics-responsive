import React from 'react';
import { useParams } from 'react-router';

const Booking = () => {
    const {serviceId} = useParams();
    return (
        <div>
            <h2>Booking  your experts</h2>
            <h3>Booking experts id- {serviceId}</h3>
        </div>
    );
};

export default Booking;
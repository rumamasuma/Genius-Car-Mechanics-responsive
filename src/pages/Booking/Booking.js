import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Booking = () => {
    const {serviceId} = useParams();
    const [service, setService] = useState({});

    useEffect(() =>{
        fetch(`http://localhost:5000/services/${serviceId}`)
        .then(res =>res.json())
        .then(data => setService(data));
    },[])


    return (
        <div>
            <h2>Booking  your service</h2>
            <h3>Details of {service.name}</h3>
            <h3>Booking  id- {serviceId}</h3>
        </div>
    );
};

export default Booking;
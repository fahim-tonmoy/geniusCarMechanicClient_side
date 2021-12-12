import React, { useEffect, useState } from 'react';

import { useParams } from 'react-router';

const Booking = () => {
    const { serviceId } = useParams();
    const [service, setService] = useState({});
    useEffect(()=> {
        fetch(`http://thawing-reaches-90123.herokuapp.com/services/${serviceId}`)
            .then( res => res.json())
            .then( data => setService(data))
    }, [])
    return (
        <div>
            <h2 className='my-3'>Details of Service</h2>
            <h3 className='my-3'>Name: {service.name}</h3>
            <h5>Service ID: {serviceId}</h5>
            <img src={service.img} className='my-3' alt="" />
            <h4>Price: {service.price}</h4>
            <h4>Description: {service.description}</h4>
            
        </div>
    );
};

export default Booking;
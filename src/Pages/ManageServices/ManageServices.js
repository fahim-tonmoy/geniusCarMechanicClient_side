import React, { useEffect, useState } from 'react';

const ManageServices = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('http://thawing-reaches-90123.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    const handleDelete = id => {
        const procced =  window.confirm("Are You sure to delete this Servic!!");
        if ( procced ) {
            const URL = `http://thawing-reaches-90123.herokuapp.com/services/${id}`;
            fetch(URL, {
                method: 'DELETE'
            })
            .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully!');
                        const remainingServices = services.filter(service => service._id !== id);
                        setServices(remainingServices);
                    }
                })
        }
    }

    return (
        <div>
            <h2 className='my-4 '>Manage Service</h2>
            <ol className='container'>
            {
                    services.map(service => <li
                        className='my-4'
                        key={service._id}
                    >
                        <h3 className='my-3'>{service.name}</h3>
                        <button onClick={() => handleDelete(service._id)} className='btn btn-danger'>Delete</button>
                    </li>)
                }
            </ol>
        </div>
    );
};

export default ManageServices;
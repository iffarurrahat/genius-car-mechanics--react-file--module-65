import { Alert } from 'bootstrap';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const ManageServices = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/services/')
      .then(res => res.json())
      .then(data => setServices(data));
  }, []);

  const handleDelete = id => {
    const url = `http://localhost:5000/services/${id}`;
    fetch(url, {
      method: 'DELETE',
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.deletedCount) {
          alert('Deleted');
          const remaining = services.filter(service => service._id !== id);
          setServices(remaining);
        }
      });
  };

  return (
    <div>
      <h2>This one is manage services</h2>
      {services.map(service => (
        <div key={service._id}>
          <h2>{service.name}</h2>
          <button onClick={() => handleDelete(service._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default ManageServices;

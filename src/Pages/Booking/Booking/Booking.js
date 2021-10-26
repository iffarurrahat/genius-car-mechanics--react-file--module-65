import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';

const Booking = () => {
  const [service, setService] = useState();

  useEffect(() => {
    fetch(`http://localhost:5000/services/${serviceId}`)
      .then(res => res.json())
      .then(data => setService(data));
  }, []);
  const { serviceId } = useParams();
  return (
    <div>
      {/* <h2>Details {service.name}</h2> */}
      <h2>This is Booking {serviceId}</h2>
    </div>
  );
};

export default Booking;

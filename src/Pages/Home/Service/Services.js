import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from './ServiceCard';

const Services = () =>  {
    const[services,setServices] = useState([]);
    useEffect(()=>{
      fetch("http://localhost:5000/services")
      .then(res=>res.json())
      .then(data=>setServices(data))
    },[])
    return (
        <div>
            
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10'>
                {
                    services.map(service=><ServiceCard
                         key={service._id}
                         service={service}
                    ></ServiceCard>)
                }
               
            </div>
            
        </div>
    );
};

export default Services;
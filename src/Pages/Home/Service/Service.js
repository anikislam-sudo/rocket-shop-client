import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from './ServiceCard';

const Service = () => {
    const[services,setServices] = useState([]);
    useEffect(()=>{
      fetch("http://localhost:5000/services")
      .then(res=>res.json())
      .then(data=>setServices(data))
    },[])
    return (
        <div>
            <div className='text-center mb-4'>
                <p className="text-2xl font-bold text-purple-600">Services</p>
                <h2 className="text-5xl font-semibold">Our Service </h2>
                <p className='text-lg'>
                All benefits are provided only for you.<br></br>
                The smart solution to online shopping as you get the best collection of products and guaranteed fastest delivery. </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10'>
                {
                    services.slice(0,3).map(service=><ServiceCard
                         key={service._id}
                         service={service}
                    ></ServiceCard>)
                }
               
            </div>
            <div className='text-center mb-4'>
            <Link to="/services" ><button className='btn btn-primary '>See all</button></Link>
            </div>
        </div>
    );
};

export default Service;
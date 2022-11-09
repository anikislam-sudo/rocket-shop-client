import React from 'react';

import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const ServiceCard = ({service}) => {
    const{_id,title,img,charge,description}=service;
    return (
        
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
 <PhotoProvider>
 <PhotoView src={img}>
     <figure>
    <img src={img} alt="Shoes" /></figure>  
      </PhotoView>
    </PhotoProvider>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p ><span className='font-semibold'>Charge:</span >${charge}</p>
    <p ><span className='font-semibold'>Description:</span >{ description.length > 100 ?
                                <>{description.slice(0, 100) + '...'}  </>
                                 :
                                  description}</p>
        <p>rating:
        <FontAwesomeIcon className='text-warning'icon={faStar}></FontAwesomeIcon>
        <FontAwesomeIcon className='text-warning'icon={faStar}></FontAwesomeIcon>
        <FontAwesomeIcon className='text-warning'icon={faStar}></FontAwesomeIcon>
        <FontAwesomeIcon className='text-warning'icon={faStar}></FontAwesomeIcon>
        <FontAwesomeIcon className='text-warning'icon={faStar}></FontAwesomeIcon>
        </p>                          
    <div className="card-actions justify-end">
        <Link to={`/servicedetails/${_id}`}>
      <button className="btn btn-primary">view details</button>
      </Link>
    </div>
  </div>
  </div>
  
  




    );
};

export default ServiceCard;
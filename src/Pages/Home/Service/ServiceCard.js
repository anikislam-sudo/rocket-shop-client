import React from 'react';

import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css'

const ServiceCard = ({service}) => {
    const{title,img,charge,description}=service;
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
    <div className="card-actions justify-end">
      <button className="btn btn-primary">view details</button>
    </div>
  </div>
  </div>
  
  




    );
};

export default ServiceCard;
import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';

const ServiceDetails = () => {
    const { _id,title, img, charge, description } = useLoaderData();
    const {user} = useContext(AuthContext);

    const handleReview = event => {
        event.preventDefault();
        const form = event.target;
        const name = `${form.firstName.value} ${form.lastName.value}`;
        const email = user?.email || 'unregistered';
        const phone = form.phone.value;
        const message = form.message.value;

        const review = {
            service: _id,
            serviceName: title,
            charge,
            customer: name,
            email,
            phone,
            message
        }

        // if(phone.length > 10){
        //     alert('Phone number should be 10 characters or longer')
        // }
        // else{

        // }

        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.acknowledged){
                    alert('review placed successfully')
                    form.reset();
                    
                }
            })
            .catch(er => console.error(er));


    }

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 '>
            <div className="card card-compact w-96 bg-base-100 mb-4 shadow-xl mx-auto">
                <figure><img src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>

                    <p ><span className='font-semibold'>Description:</span >{description}</p>
                    <p>rating:
                        <FontAwesomeIcon className='text-warning' icon={faStar}></FontAwesomeIcon>
                        <FontAwesomeIcon className='text-warning' icon={faStar}></FontAwesomeIcon>
                        <FontAwesomeIcon className='text-warning' icon={faStar}></FontAwesomeIcon>
                        <FontAwesomeIcon className='text-warning' icon={faStar}></FontAwesomeIcon>
                        <FontAwesomeIcon className='text-warning' icon={faStar}></FontAwesomeIcon>
                    </p>
                </div>

            </div>

            <div>
                <form onSubmit={handleReview} >
                    <h2 className="text-5xl text-center m-4 font-semibold"> Your Reviews</h2>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                        <input name="firstName" type="text" placeholder="First Name" className="input input-ghost w-full  input-bordered" />
                        <input name="lastName" type="text" placeholder="Last Name" className="input input-ghost w-full  input-bordered" />
                        <input name="phone" type="text" placeholder="Your Phone" className="input input-ghost w-full  input-bordered" required />
                        <input name="email" type="text" placeholder="Your email" defaultValue={user?.email} className="input input-ghost w-full  input-bordered" readOnly required />
                    </div>
                    <textarea name="message" className="textarea textarea-bordered h-24 w-full" placeholder="Your Review" required></textarea>

                    <input className='btn btn-primary mb-4' type="submit" value="Submit Review" />
                </form>
            </div>
        </div>

    );
};

export default ServiceDetails;
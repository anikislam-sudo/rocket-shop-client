import React, { useEffect, useState } from 'react';

const ReviewRow = ({ review, handleDelete, handleStatusUpdate }) => {
    const { _id, serviceName, phone, customer, charge, service, status,message } = review;
    const [orderReview, setOrderReview] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/services/${service}`)
            .then(res => res.json())
            .then(data => setOrderReview(data));
    }, [service])
    return  (
            <tr>
            <th>
                <label>
                    <button onClick={() => handleDelete(_id)} className='btn rounded-lg bg-red-500 btn-ghost'>Delete</button>
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="rounded w-24 h-24">
                            {
                                orderReview?.img &&
                                <img src={orderReview?.img} alt="Avatar Tailwind CSS Component" />}
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{customer}</div>
                        <div className="text-sm opacity-50">{phone}</div>
                    </div>
                </div>
            </td>
            <td>
                {serviceName}
                <br />
                <span className="badge badge-ghost badge-sm">${charge}</span>
            </td>
            <td>{message}</td>
            <th>


                <button
                    onClick={() => handleStatusUpdate(_id)}
                    className="btn btn-success btn-xs">{status ? status : 'edit review'}</button>


            </th>
        </tr>
        
    );
};

export default ReviewRow;
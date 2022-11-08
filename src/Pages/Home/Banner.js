import React from 'react';
import bg1 from "../../Assets/banner/bg1.webp";
import "./Banner.css";
const Banner = () => {
    return (
        <div className="hero min-h-screen mb-32" >
            <img className='w-full banner-img rounded-xl  ' src={bg1} alt="" />
        <div className="hero-overlay bg-opacity-40"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-3xl font-bold">Hello there</h1>
            <p className="mb-5 text-5xl font-semi-bold">Stay home & we will deliver your daily needs.</p>
            <button className="btn btn-primary">Shop Now</button>
          </div>
        </div>
      </div>
    );
};

export default Banner;
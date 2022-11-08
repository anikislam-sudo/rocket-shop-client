import React from 'react';
import { Link } from 'react-router-dom';
import login from "../../Assets/banner/login.webp"
const SignUp = () => {
    const handleSignUp = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        
       
        
    }
    return (
        <div className="hero w-full">
        <div className="hero-content grid md:grid-cols-2 flex-col lg:flex-row">
          <div>
            
            <img className='w-3/4' src={login} alt="" srcset="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100  py-20">
            <form onSubmit={handleSignUp} className="card-body">
            <h1 className="text-5xl text-center font-bold">SignUp</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Full Name</span>
                </label>
                <input type="text"  name="name" placeholder="Your Name" className="input input-bordered"  />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                  <input type="submit" className="btn btn-primary" value="SignUp" />
                
              </div>
              <p className="text-center">Already have an account? <Link className='text-purple-600' to="/login">Login</Link></p>
            </form>
          </div>
        </div>
      </div>
    );
};

export default SignUp;
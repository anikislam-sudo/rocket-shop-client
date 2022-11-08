import React from 'react';
import { Link } from 'react-router-dom';
import login from "../../Assets/banner/login.webp"

const Login = () => {
    const handleLogin = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        login(email, password)
        .then( result => {
            const user = result.user;
            console.log(user);
        })
        .then(error => console.log(error));
    }
    return (
        <div className="hero w-full">
  <div className="hero-content grid md:grid-cols-2 flex-col lg:flex-row">
    <div>
      
      <img className='w-3/4' src={login} alt="" srcset="" />
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100  py-20">
      <form onSubmit={handleLogin} className="card-body">
      <h1 className="text-5xl text-center font-bold">Login</h1>
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
          <input type="text" name='password' placeholder="password" className="input input-bordered" required/>
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
            <input type="submit" className="btn btn-primary" value="Login" />
          
        </div>
        <p className="text-center">New to Rocket shop <Link className='text-purple-600' to="/signup">SignUp</Link></p>
      </form>
    </div>
  </div>
</div>
    );
};

export default Login;
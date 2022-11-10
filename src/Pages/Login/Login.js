import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';
import login1 from "../../Assets/banner/login.webp"
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import useTitle from '../../Hooks/useTitle';

const Login = () => {
    const { login, providerLogin, } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    
    useTitle("login");
    const from = location.state?.from?.pathname || '/';
   const googleProvider = new GoogleAuthProvider();


    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        login(email, password)
            .then(result => {
                const user = result.user;
                const currentUser ={
                    email:user.email
                }
                console.log(currentUser);
                //get jwt token
                fetch("http://localhost:5000/jwt",{
                    method:"POST",
                    headers:{
                        "content-type": "application/json"
                    },
                    body:JSON.stringify(currentUser)

                })
                .then(res=>res.json())
                .then(data=>{
                    console.log(data);
                    localStorage.setItem('rocket-shop', data.token);
                        navigate(from, { replace: true });
                })
                
               
            })
            .catch(error => console.log(error));
    }
    const handleSignInGoogle = () => {
        providerLogin(googleProvider)

            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => {
                console.error(error);
            })
    }
    return (
        <div className="hero w-full">
            <div className="hero-content grid md:grid-cols-2 flex-col lg:flex-row">
                <div>

                    <img className='w-3/4' src={login1} alt="" srcset="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl rounded-lg bg-zinc-300  py-20">
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
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input type="submit" className="btn btn-primary" value="Login" />

                        </div>
                        <p className="text-center">New  Rocket shop to <Link className='text-yellow-600' to="/signup">SignUp</Link></p>
                        <button onClick={handleSignInGoogle} className='btn btn-active btn-dark mt-4  text-white'  > <FaGoogle className='mr-2 '></FaGoogle>  Login with google</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
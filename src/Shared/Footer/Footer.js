import React from 'react';
import logo1 from "../../Assets/logo1.png"

const Footer = () => {
    return (
        <footer className="footer p-32 bg-black text-white">
  <div>
    <img className='h-20 w-20' src={logo1}  srcset="" />
    <p>Rocket Shop Ltd.<br/>copyright by RocketShop@2022</p>
  </div> 
  <div>
    <span className="footer-title ">Services</span> 
   <a href="/" className="link link-hover">Branding</a> 
   <a href="/" className="link link-hover">Design</a> 
   <a href="/" className="link link-hover">Marketing</a> 
   <a href="/" className="link link-hover">Advertisement</a>
  </div> 
  <div>
    <span className="footer-title">Company</span> 
   <a href="/" className="link link-hover">About us</a> 
   <a href="/" className="link link-hover">Contact</a> 
   <a href="/" className="link link-hover">Jobs</a> 
   <a href="/" className="link link-hover">Press kit</a>
  </div> 
  <div>
    <span className="footer-title">Legal</span> 
   <a href="/" className="link link-hover">Terms of use</a> 
   <a href="/" className="link link-hover">Privacy policy</a> 
   <a href="/" className="link link-hover">Cookie policy</a>
  </div>
</footer>
    );
};

export default Footer;
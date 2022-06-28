import React from 'react';


const Footer = () => {
    return (
        <footer style={{
            marginTop:'50px'
          
            
        }} className="p-10  bg-black text-white">
            <div className='footer ' >
                <div>
                    <span className="footer-title">Services</span>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </div>
                <div>
                  <img src="https://web.programming-hero.com/static/media/ssl-commerce.1d268dce.png" alt="" />
                </div>
            </div>
            <div className='my-10 text-center'>
                <p>Copyright © 2022 - All right reserved</p>
            </div>
        </footer>
    );
};

export default Footer;
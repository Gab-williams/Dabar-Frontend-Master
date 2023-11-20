import React from 'react';
import { FaInstagram, FaXTwitter, FaLinkedin, FaFacebook } from 'react-icons/fa6';
import logo from '../../images/Transparent PNG-011.png';

export default function Footer() {
  return (
    <div className='w-full bg-black py-10 pb-20 flex flex-col lg:flex-row items-center mt-10'>
      {/* Left Section */}
      <div className='w-full lg:w-1/2 p-4 mx-auto lg:text-left'>
        <section className='w-full  sm:w-full'>
          <article className='w-full lg:w-2/3 mx-auto lg:float-center mt-8 text-white'>
            <div className='w-full flex flex-col items-center lg:items-start'>
              <img src={logo} className='w-56 md:w-40 lg:w-48 h-auto mb-4 lg:mb-0' alt='Logo' />
              <p className='lg:w-4/5 text-white-50 text-center lg:text-left text-sm font-medium capitalize'>
              Dabar Media: Your vibrant lens across diverse industries, capturing the heartbeat of corporate 
              culture with dynamic innovation and timeless tradition.
              </p>
            </div>
          </article>
        </section>
      </div>

      {/* Right Section */}
      <div className='w-full lg:w-1/2 mt-4 lg:mt-0'>
        <section className='w-full flex flex-col items-center justify-end px-3 py-3'>
          {/* Follow Us Text */}
          <p className='text-white text-sm mb-2'>Follow Us</p>

          {/* Social Icons */}
          <div className='flex space-x-4'>
            <FaInstagram className='text-white w-8 h-8' />
            <FaXTwitter className='text-white w-8 h-8' />
            <FaLinkedin className='text-white w-8 h-8' />
            <FaFacebook className='text-white w-8 h-8' />
            {/* Add more social icons as needed */}
          </div>

          {/* Copyright Text */}
          <p className='text-white text-xs mt-4'> Copyright &copy;2023 Dabar Media. All rights reserved.</p>
        </section>
      </div>
    </div>
  );
}

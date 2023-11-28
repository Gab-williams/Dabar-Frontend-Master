import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaXTwitter, FaLinkedin, FaFacebook } from 'react-icons/fa6';
import logo from '../../images/Transparent PNG-011.png';

const FooterOne = () => {
  if (typeof window !== "undefined") {
    var colorMode = window.localStorage.getItem('color-mode');
  }

  return (
    <footer className="bg-black text-white mt-40 pt-10">
      <div className="container mx-auto py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className='w-full flex flex-col items-center lg:items-start'>
              <img src={logo} className='w-56 md:w-40 lg:w-48 h-auto mb-4 lg:mb-0' alt='Logo' />
              <p className='lg:w-2/5 text-white-50 text-center lg:text-left text-sm font-medium capitalize'>
                Dabar Media: Your vibrant lens across diverse industries, capturing the heartbeat of corporate culture with dynamic innovation and timeless tradition.
              </p>
            </div>
          </div>
          <div className="w-80 flex flex-col m-2 md:flex-row items-center">
            <h5 className="follow-title mb-0 mr-4 md:mr-20">Follow Us</h5>
            <ul className="social-icon color-tertiary md-size flex justify-start space-x-0.5  ">
              <li>
                <a href="https://www.facebook.com/" rel="noopener" target="_blank">
                <FaFacebook className='text-white w-6 h-6 ' />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/">
                  <FaInstagram className='text-white w-6 h-6' />
                </a>
              </li>
              <li>
                <a href="https://twitter.com/">
                <FaXTwitter className='text-white w-6 h-6' />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/">
                <FaLinkedin className='text-white w-6 h-6' />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="copyright-area bg-black pb-5 text-white">
        <div className="container mx-auto py-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <ul className="mainmenu flex justify-start md:justify-end space-x-4">
                <li>
                  <Link to="/Contact us" className="hover-flip-item-wrapper">
                    <span className="hover-flip-item">
                      <span data-text="Contact Us">Contact Us</span>
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/privacy-policy" className="hover-flip-item-wrapper">
                    <span className="hover-flip-item">
                      <span data-text="Privacy Policy">Privacy Policy</span>
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/about us" className="hover-flip-item-wrapper">
                    <span className="hover-flip-item">
                      <span data-text="AdChoices">About Us</span>
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover-flip-item-wrapper">
                    <span className="hover-flip-item">
                      <span data-text="Advertise with Us">Advertise with Us</span>
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover-flip-item-wrapper">
                    <span className="hover-flip-item">
                      <span data-text="Blogar Store">Dabar Instagram</span>
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="text-start md:text-end">
              <p className="b3">
                All Rights Reserved © {new Date().getFullYear()}
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterOne;

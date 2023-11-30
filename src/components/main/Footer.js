import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaInstagram,
  FaLinkedin,
  FaFacebook,
} from 'react-icons/fa6';
import { RiTwitterXLine } from "react-icons/ri";
import logo from '../../images/Transparent PNG-011.png';

const FooterOne = () => {
  if (typeof window !== 'undefined') {
    var colorMode = window.localStorage.getItem('color-mode');
  }

  return (
    <footer className="bg-black text-white mt-8 pb-3 sm:mt-16 pt-6 sm:pt-10 sm:pb-10">
      <div className="container mx-auto sm:mb-30 py-4">
        <div className="flex flex-col items-start sm:flex-row sm:justify-between">
          <div className="mb-4 sm:mb-4 lg:mb-0">
            <div className="w-auto flex flex-col items-center sm:items-start">
              <img
                src={logo}
                className="w-40 sm:w-48 h-auto mb-4 sm:mb-0"
                alt="Logo"
              />
              <p className="w-4/5 pb-5 text-white-50 m-2 text-center lg:w-2/5 lg:pb-0 sm:text-left sm:w-3/5 sm:pb-10 text-sm font-medium capitalize">
                Dabar Media: Your vibrant lens across diverse industries,
                capturing the heartbeat of corporate culture with dynamic
                innovation and timeless tradition.
              </p>
            </div>
          </div>
          <div className="w-full sm:w-80 flex flex-col items-center sm:items-end">
            <h5 className="items-center follow-title pb-5 sm:mb-0">Follow Us</h5>
            <ul className="social-icon color-tertiary sm-size flex justify-center sm:justify-end space-x-6 ">
              <li>
                <a href="https://www.facebook.com/profile.php?id=61552875998422&mibextid=ZbWKwL" rel="noopener" target="_blank">
                  <FaFacebook className="text-white w-8 h-8" />
                </a>
              </li>
              <li>
                <a href="https://instagram.com/the.dabar?igshid=YzAwZjE1ZTI0Zg==" rel="noopener" target="_blank" >
                  <FaInstagram className="text-white w-8 h-8" />
                </a>
              </li>
              <li>
                <a href="https://x.com/Dabarnetwork?t=FdWs0919Lh2CqQxq50VUMg&s=09" rel="noopener" target="_blank">
                  <RiTwitterXLine className="text-white w-8 h-8" />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/company/darbar-media/" rel="noopener" target="_blank">
                  <FaLinkedin className="text-white w-8 h-8" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="copyright-area bg-black text-white">
        <div className="container mx-auto py-2">
          <div className="flex text-xs flex-col items-center lg:text-sm sm:flex-row sm:justify-between sm:text-xs">
            <div className="mb-10 sm:mb-10 lg:mb-0">
              <ul className="mainmenu flex justify-center sm:justify-end space-x-2">
                <li>
                  <Link to="/contact-us" className="hover-flip-item-wrapper m-2">
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
                  <Link to="/about-us" className="hover-flip-item-wrapper">
                    <span className="hover-flip-item">
                      <span data-text="AdChoices">About Us</span>
                    </span>
                  </Link>
                </li>
               
                <li>
                  <Link to="#" className="hover-flip-item-wrapper">
                    <span className="hover-flip-item">
                      <span data-text="Dabar Instagram">Dabar Instagram</span>
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="text-center sm:text-end pb-20 sm:pb-20 lg:pb-0 ">
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
